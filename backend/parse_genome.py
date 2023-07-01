import argparse 
from risk_data import APOE_INDEPENDENT_RISK_FACTORS, APOE_RISK_FACTORS, PRS_GENES, APOE_GENES
import random
from scipy.stats import norm
import pandas as pd
import numpy as np

class NoRiskDetectedError(Exception):
    def __init__(self):
        pass

class AlzheimerRiskProfiler:
    def __init__(self, file):
        """
        Profile a user's 23andMe raw data (as a text file) for Alzheimer's risk
        :param str filename: Path to the 23andMe .txt file 
        """
        self.file = file
        
        self.apoe_risk_ratio = 1
        self.risk_ratio = 1

        self.risk_factors = [] # APOE-independent risk factors
        self.apoe_risk_factors = []  # APOE-related risk factors

        self.rs429358 = None
        self.rs7412 = None
        self.apoe_genotype = 'Unknown'
        self.prs_percentile = 0 # polygenic risk score
        self.overall_risk_percentile = 0
        self.risk_percentile_with_intervention = 0
        self.gender = 'Male'
        

    def increment_risk(self, risk_ratio):
        """
        Increment the user's risk.
        :param float risk_change: Change in risk as a percent increase/decrease (e.g. 0.2 for a 20% baseline increase)
        """
        self.risk_ratio *= risk_ratio
    
    @staticmethod
    def sort_char_string(s) -> str:
        """Sort a string's characters"""
        return ''.join(sorted(s))

    def get_apoe_modifiers(self, genome_dict):
        
        # rs2075650 and rs4420638
        for rsid, gene_name in zip(['rs2075650', 'rs4420638'], ['TOMM40', 'APOC1']):

            try:
                risk_ratio = 1
                if genome_dict[rsid] == 'AA':
                    self.apoe_related_risk_ratio = 1
                    risk_ratio = 'Neutralizes APOE'
                
                genotype = genome_dict[rsid]
            except KeyError:
                risk_ratio = 'Variant not included'
                genotype = 'NA'
            
            self.apoe_risk_factors.append(dict(
                variant=rsid,
                risk_ratio=risk_ratio,
                genotype=genotype,
                gene_name=gene_name,
                significance=1.00e-300,
                ))

        # rs9536314
        try:
            risk_ratio = 1
            if (genome_dict['rs9536314'] == 'GT' or genome_dict['rs9536314'] == 'TG') and self.apoe_genotype == 'E3/E4':
                self.apoe_related_risk_ratio = self.apoe_related_risk_ratio * risk_ratio
                risk_ratio = 0.7
        except KeyError:
            risk_ratio = '23andMe v2-4 only'

        self.apoe_risk_factors.append(dict(
            variant='rs9536314',
            risk_ratio=risk_ratio,
            genotype='GT',
            gene_name='KLOTHO',
            significance=1.00e-300,
            ))

    
    def get_apoe_risk(self, genome_dict):
        """
        Get APOE risk based on APOE4 and APOE2.

        :param dict genome_dict: 23andme genome as a dictionary
        :return float: Risk ratio resulting from the APOE combination. 
        """

        rs429358, rs7412 = genome_dict['rs429358'], genome_dict['rs7412']
        try:
            apoe_risk_ratio, apoe_genotype = APOE_RISK_FACTORS[f'{rs429358},{rs7412}']

            # Store base APOE risk 
            self.apoe_genotype = apoe_genotype
            
            self.apoe_risk_ratio = apoe_risk_ratio
        except KeyError:
            apoe_risk_ratio = 'Variant not included'
            apoe_genotype = 'NA'

        # Append risk factor information to running list
        self.apoe_risk_factors.append(dict(
            variant='rs429358/rs7412',
            risk_ratio=apoe_risk_ratio,
            genotype=apoe_genotype,
            gene_name='APOE',
            significance=1.00e-300,
        ))


    def get_risk_from_rsid(self, rsid: str, user_genotype) -> float:
        """
        Get risk given a known risk multiplying genetic factor RSID and the client's genotype.
        :param str rsid: RSID of interest
        :param str user_genotype: User's genotype for the RSID of interest
        :return: Risk ratio resulting from the variant 
        """
        risky_allele = APOE_INDEPENDENT_RISK_FACTORS[rsid]['minor']

        if risky_allele in user_genotype:
            return APOE_INDEPENDENT_RISK_FACTORS[rsid]['risk_ratio']
        else:
            raise NoRiskDetectedError

    def get_gene_name_from_rsid(self, rsid: str) -> str:
        """
        Get a given RSID's nominal designation.
        :param str rsid: RSID of interest
        :return: Gene name
        """
        return APOE_INDEPENDENT_RISK_FACTORS[rsid]['gene_name']

    def get_significance_from_rsid(self, rsid: str) -> float:
        """
        Get the statistical significance of the risk factor of a given variant
        :param str rsid: RSID of interest
        :return: Statistical significance
        """
        return APOE_INDEPENDENT_RISK_FACTORS[rsid]['significance']

    def get_apoe_independent_risk(self, genome_dict):
        # Get multiplier for each APOE4-independent RSID
        for rsid in APOE_INDEPENDENT_RISK_FACTORS:
            try:
                user_genotype = genome_dict[rsid]
                risk_ratio = self.get_risk_from_rsid(rsid, user_genotype)
                
                # Increment the overall APOE-independent risk
                self.increment_risk(risk_ratio)
            except KeyError:
                risk_ratio = 'Variant not included'
                user_genotype = 'NA'
            except NoRiskDetectedError:
                risk_ratio = 1
                user_genotype = genome_dict[rsid]

            gene_name = self.get_gene_name_from_rsid(rsid)
            significance = self.get_significance_from_rsid(rsid)

            # Append risk factor information to running list
            self.risk_factors.append(dict(
                variant=rsid,
                risk_ratio=risk_ratio,
                genotype=user_genotype,
                gene_name=gene_name,
                significance=significance,
            ))

    def get_risk(self):
        """
        Checks against a database of known risk multipliers and the risk multipliers from various APOE4 combinations.
        :return: Overall risk increase as a percentage (float)
        """
        lines = self.file.readlines()

        genome_dict = {}
        for line in lines:
            line = line.decode('utf-8')
            if line.startswith('rs'):
                rsid, chromosome, position, genotype = line.split()
                genome_dict[rsid] = genotype

        self.get_apoe_risk(genome_dict)
        # self.get_apoe_modifiers(genome_dict)
        prs = self.get_prs(genome_dict)
        self.prs_percentile = self.calculate_prs_percentile(prs)
        self.get_overall_risk(prs,genome_dict)
        self.get_risk_with_intervention(round(self.overall_risk_percentile),self.gender)
    
    def calculate_prs_percentile(self,sample):
        """
        Calculates users PRS based on standard deviation and mean of monte carlos simulation
        :return: percentile of users personsal risk score as percentage
        """
        mean = 0.3413453599999998 
        std_dev = 0.49243292092067764
        z_score = (sample - mean) / std_dev  # Calculate the z-score
        percentile = norm.cdf(z_score) * 100  # Calculate the percentile
        return percentile


    def get_prs(self, genome_dict):
        """
        Gets polygenic risk score of individual by checking against known SNPs
        """
        prs = 0
        for rsid in PRS_GENES:
            
            try:
                user_genotype = genome_dict[rsid] # ex: user_genotype = AT
                risk_allele = PRS_GENES[rsid]['risk_allele'] # risk allele is one character such as 'A'
                weight = PRS_GENES[rsid]['weight']
                risk_ratio = PRS_GENES[rsid]['risk_ratio']
                risk_multiplier = user_genotype.count(risk_allele) # 0/1/2
                prs += (risk_multiplier * risk_ratio)

                gene_name = PRS_GENES[rsid]['gene_name']
                if risk_multiplier > 0:
                    # Append risk factor information to running list
                    self.risk_factors.append(dict(
                        variant=rsid,
                        risk_ratio=risk_ratio,
                        genotype=user_genotype,
                        gene_name=gene_name,
                        significance=weight,
                    ))    
  
            except KeyError:
                risk_ratio = 'Variant not included'
                user_genotype = 'NA'
        # store prs
        self.prs_percentile = self.calculate_prs_percentile(prs)
        self.get_overall_risk(prs,genome_dict)
        return prs
    
    def get_overall_risk(self, prs,genome_dict):
        """
        Gets overall risk by adding the risk of APOE to the current polygenic risk score
        """
        overall_risk = prs
        
        for rsid in APOE_GENES:
            try:
                user_genotype = genome_dict[rsid] # ex: user_genotype = AT
                risk_allele = APOE_GENES[rsid]['risk_allele'] # risk allele is one character such as 'A'
                risk_ratio = APOE_GENES[rsid]['risk_ratio']
                risk_multiplier = user_genotype.count(risk_allele) # 0/1/2
                overall_risk += (risk_multiplier * risk_ratio)    
                
            except KeyError:
                risk_ratio = 'Variant not included'
                user_genotype = 'NA'

        df = pd.read_csv('overall_risk_score_simulation_results')
        self.overall_risk_percentile =  self.get_overall_risk_percentile(overall_risk, df.score, df.percentile)
        
        return overall_risk
    
    def get_overall_risk_percentile(self, sample, score, percentiles):
        return percentiles[np.argmin(np.abs(score - (sample)))] * 100
    
    
    def create_synthetic_genome_dict(self):
        """
        Creates synthetic genome containing all genes involved in PRS
        Generates SNPs for each SNP based on frequency of risk allele
        """
        genome_dict = {}
        for rsid in PRS_GENES:
            freq = PRS_GENES[rsid]['frequency']
            risk_allele = PRS_GENES[rsid]['risk_allele']

            genotype1 = risk_allele if random.random() < freq else 'X' 
            genotype2 = risk_allele if random.random() < freq else 'X' 
            genome_dict[rsid] = genotype1 + genotype2

        for rsid in APOE_GENES:
            freq = APOE_GENES[rsid]['frequency']
            risk_allele = APOE_GENES[rsid]['risk_allele']

            genotype1 = risk_allele if random.random() < freq else 'X' 
            genotype2 = risk_allele if random.random() < freq else 'X' 
            genome_dict[rsid] = genotype1 + genotype2
        return genome_dict
    



    def get_risk_from_percentile(self, percentile, gender, df):
        return df.loc[df['Percentile'] == percentile, gender].values[0]

    def get_risk_with_intervention(self, percentile, gender):
        df = pd.read_csv('percentile_to_risk.csv')
        raw_risk = self.get_risk_from_percentile(percentile, gender, df)
        risk_with_intervention = raw_risk * 0.4 
        self.risk_percentile_with_intervention = df.iloc[(df[gender] - risk_with_intervention).abs().argsort()[0]]['Percentile']
        
        

if __name__ == '__main__':    
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--filename')    # Path to .txt file

    args = vars(parser.parse_args())
    filename = args['filename']
    
    if filename is None:
        from tkinter import Tk
        from tkinter.filedialog import askopenfilename
        Tk().withdraw()
        filename = askopenfilename()
    
    file = open(filename, 'rb')
    profiler = AlzheimerRiskProfiler(file)
    profiler.get_risk()
    
    print('APOE-related risk factors:')
    for risk_factor in profiler.apoe_risk_factors:
        print(risk_factor)
    print('APOE-independent risk factors:')
    for risk_factor in profiler.risk_factors:
        print(risk_factor)
    print(f'APOE related risk ratio: {profiler.apoe_risk_ratio}')
    print(f'APOE independent risk ratio of {profiler.risk_ratio}')
    print(f'Your APOE genotype is {profiler.apoe_genotype}')
    print(f'Your risk percentile is {profiler.overall_risk_percentile}')
    print(f'Your risk percentile with intervention is {profiler.risk_percentile_with_intervention}')
        

