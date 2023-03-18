"""
Generic risk multipliers based on homo or hetero genotypes as a nested dictionary as: 
   RSID: 
       Heterozygous risk: ##
       Homozygous risk: ##
"""

APOE_INDEPENDENT_RISK_FACTORS = dict(
    rs8070723=dict(minor='G', major='A', minor_freq=0.40, risk_ratio=0.9, significance=2.5e-37, gene_name='MAPT'),
    rs679515=dict(minor='T', major='C', minor_freq=0.19, risk_ratio=1.13, significance=7.2e-46, gene_name='CR1'),
    rs6733839=dict(minor='T', major='C', minor_freq=0.39, risk_ratio=1.17, significance=6.1e-118, gene_name='BIN1'),
    rs143332484=dict(minor='T', major='C', minor_freq=0.01, risk_ratio=1.41, significance=2.8e-25, gene_name='TREM2'),
    rs75932628=dict(minor='T', major='C', minor_freq=0.00, risk_ratio=2.39, significance=2.5e-37, gene_name='TREM2'),
    rs11771145=dict(minor='A', major='G', minor_freq=0.35, risk_ratio=0.95, significance=3.3e-14, gene_name='EPHA1'),
    rs3851179=dict(minor='T', major='C', minor_freq=0.36, risk_ratio=0.9, significance=3.0e-48, gene_name='PICALM'),
    rs74685827=dict(minor='G', major='T', minor_freq=0.02, risk_ratio=1.19, significance=2.8e-11, gene_name='SORL1'),
    rs11218343=dict(minor='C', major='T', minor_freq=0.04, risk_ratio=0.84, significance=1.4e-21, gene_name='SORL1'),
    rs199515=dict(minor='G', major='C', minor_freq=0.22, risk_ratio=0.94, significance=9.3e-13, gene_name='MAPT'),
    rs4277405=dict(minor='C', major='T', minor_freq=0.38, risk_ratio=0.94, significance=8.8e-20, gene_name='ACE'),
    rs16824536=dict(minor='A', major='G', minor_freq=0.05, risk_ratio=0.92, significance=3.6e-8, gene_name='MME'),
    rs61762319=dict(minor='G', major='A', minor_freq=0.03, risk_ratio=1.16, significance=2.2e-11, gene_name='MME'),
)

"""
APOE4 risk multipliers and genotype
Dictionary keys are the (rs429358, rs7412) genotypes as a comma-separated string
Values are tuples: (risk increase, genotype)
"""
APOE_RISK_FACTORS = {
    'TT,TT': (0.26, 'E2/E2'),
    'TT,CT': (0.36, 'E2/E3'),
    'TC,CT': (1.38, 'E2/E4'),
    'TT,CC': (0.56, 'E3/E3'),
    'CT,CC': (2.00, 'E3/E4'),
    'CC,CC': (7.71, 'E4/E4'),
}