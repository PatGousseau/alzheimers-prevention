import argparse 
from backend.risk_data import LOOKUP, APOE4


class AlzheimerRiskProfiler:
    def __init__(self, filename):
        """
        Profile a user's 23andMe raw data (as a text file) for Alzheimer's risk
        :param str filename: Path to the 23andMe .txt file 
        """
        self.filename = filename
        
        self.risk_increase = 0  # Overall risk increaase
        self.risk_factors = [] # All risk factors

        self.apoe4genotype = 'Unknown'
        

    def increment_risk(self, risk_change):
        """
        Increment the user's risk.
        :param float risk_change: Change in risk as a percent increase/decrease (e.g. 0.2 for a 20% baseline increase)
        """
        self.risk_increase =  ((self.risk_increase + 1) * (risk_change + 1)) - 1
    
    @staticmethod
    def sort_char_string(s):
        """Sort a string's characters"""
        return ''.join(sorted(s))
    
    def get_apoe4_risk(self, rs429358: str, rs7412: str) -> float:
        """
        Get APOE4 risk based on the two RSIDs.

        :param str rs429358: The rs429358 genotype as a 2-char string.
        :param str rs7412: The rs7412 genotype as a 2-char string.
        :return (float, str): Tuple containing the risk multiplier and allele type. 
        """
        try:
            risk_change, apoe4genotype = APOE4[f'{rs429358},{rs7412}']
            self.apoe4genotype = apoe4genotype
            return risk_change
        except KeyError:
            return None

    def get_other_risk(self, rsid: str, user_genotype) -> float:
        """
        Get risk given a known risk multiplying genetic factor RSID and the client's genotype.
        :param str rsid: RSID of interest
        :param str genotype: Client's genotype for the RSID of interest
        :return: Risk multiplier as a float
        """
        risky_genotype = LOOKUP[rsid]['risky_genotype']

        # Sort in alphabetical order to normalize format
        user_genotype = self.sort_char_string(user_genotype)
        risky_genotype = self.sort_char_string(risky_genotype)

        if len(risky_genotype) == 2:
            if risky_genotype == user_genotype:
                risk_change = LOOKUP[rsid]['homo'] if user_genotype[0] == user_genotype[1] else LOOKUP[rsid]['hetero']
            else:
                risk_change = 1
        elif len(risky_genotype) == 1:
            if risky_genotype in user_genotype:
                risk_change = LOOKUP[rsid]['homo'] if user_genotype[0] == user_genotype[1] else LOOKUP[rsid]['hetero']
            else:
                risk_change = None
        else:
            raise ValueError(f'Unknown genotype format: {risky_genotype}')

        return risk_change


    def get_risk(self) -> float:
        """
        Checks against a database of known risk multipliers and the risk multipliers from various APOE4 combinations.
        :return: Overall risk increase as a percentage (float)
        """

        with open(self.filename, 'r') as f:
            line = True
            i = 0
            while line:
                line = f.readline()

                # Continue to the next line if not in RSID of interest
                if not line.startswith('rs'):
                    continue

                rsid, chromosome, position, genotype = line.split()

                # Get multiplier if in RSID of interest
                if rsid in LOOKUP:
                    risk_change = self.get_other_risk(rsid, genotype)

                    if risk_change is not None:
                        self.increment_risk(risk_change)
                        
                        self.risk_factors.append((rsid, risk_change, genotype))

                # Get APOE4-specific genotypes 
                if rsid == 'rs429358':
                    rs429358 = genotype

                if rsid == 'rs7412':
                    rs7412 = genotype

        # Get APOE4 risk and allele type
        apoe4_mult = self.get_apoe4_risk(rs429358, rs7412)

        # Multiply by APOE4 risk
        self.increment_risk(apoe4_mult)
        

if __name__ == '__main__':    
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--filename')    # Path to .txt file

    args = vars(parser.parse_args())
    filename = args['filename']
    
    if filename is None:
        from tkinter import Tk
        from tkinter.filedialog import askopenfilename
        Tk().withdraw()
        filepath = askopenfilename()
    
    profiler = AlzheimerRiskProfiler(filename)
    profiler.get_risk()
    
    print(f'You have a {profiler.risk_increase * 100}% increase in Alzheimer\'s risk.')
    print(f'Your APOE4 genotype is {profiler.apoe4genotype}')
        

