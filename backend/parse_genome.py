import argparse 
from risk_data import APOE_INDEPENDENT_RISK_FACTORS, APOE_RISK_FACTORS


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
        for rsid, gene_name in zip(['rs2075650', 'rs4420638'], ['TOMM40', ['APOC1']]):
            risk_ratio = 1
            if genome_dict[rsid] == 'AA':
                self.apoe_related_risk_ratio = 1
                risk_ratio = 'Neutralizes APOE'

            self.apoe_risk_factors.append(dict(
                variant=rsid,
                risk_ratio=risk_ratio,
                genotype=genome_dict[rsid],
                gene_name=gene_name,
                significance=1.00e-300,
                ))

        # rs9536314
        risk_ratio = 1
        if (genome_dict['rs9536314'] == 'GT' or genome_dict['rs9536314'] == 'TG') and self.apoe_genotype == 'E3/E4':
            self.apoe_related_risk_ratio = self.apoe_related_risk_ratio * risk_ratio
            risk_ratio = 0.7

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

            # Append risk factor information to running list
            self.apoe_risk_factors.append(dict(
                variant='rs429358/rs7412',
                risk_ratio=apoe_risk_ratio,
                genotype=apoe_genotype,
                gene_name='APOE',
                significance=1.00e-300,
            ))

        except KeyError:
            return 


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
            return 1

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
                gene_name = self.get_gene_name_from_rsid(rsid)
                significance = self.get_significance_from_rsid(rsid)

                # Increment the overall APOE-independent risk
                self.increment_risk(risk_ratio)

                # Append risk factor information to running list
                self.risk_factors.append(dict(
                    variant=rsid,
                    risk_ratio=risk_ratio,
                    genotype=user_genotype,
                    gene_name=gene_name,
                    significance=significance,
                ))

            except KeyError:
                return

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

        # Get risk from APOE-independent risk factors
        self.get_apoe_independent_risk(genome_dict)

        # Gert risk from APOE-related risk factors
        self.get_apoe_risk(genome_dict)
        

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
        

