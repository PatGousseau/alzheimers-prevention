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

"""
Genes involved in the polygentic risk score (PRS)
"""
PRS_GENES = dict(
    rs4266886=dict(risk_allele='T',  weight=0.1426, risk_ratio=-0.09, frequency=0.1426),
    rs61822977=dict(risk_allele='A', weight=0.4091, risk_ratio=-0.08, frequency=0.4091),
    rs6733839=dict(risk_allele='T', weight=0.395, risk_ratio=-0.15, frequency=0.395),
    rs10202748=dict(risk_allele='A',  weight=0.652605, risk_ratio=-0.06,frequency=0.652605),
    rs115124923=dict(risk_allele='A',  weight=0.1554, risk_ratio=0.17,frequency=0.1554),
    rs115675626=dict(risk_allele='A',  weight=0.1104, risk_ratio=-0.11,frequency=0.1104),
    rs1109581=dict(risk_allele='T',  weight=0.2452, risk_ratio=-0.07,frequency=0.2452),
    rs17265593=dict(risk_allele='T',  weight=0.2726, risk_ratio=-0.23,frequency=0.2726),
    rs2597283=dict(risk_allele='A',  weight=0.3385, risk_ratio=0.28,frequency=0.3385),
    rs1476679=dict(risk_allele='T',  weight=0.7885, risk_ratio=0.11,frequency=0.7885),
    rs78571833=dict(risk_allele='A',  weight=0.975, risk_ratio=0.14,frequency=0.975),
    rs12679874=dict(risk_allele='A', weight=0.5445, risk_ratio=-0.09,frequency=0.5445),
    rs2741342=dict(risk_allele='T',  weight=0.2941, risk_ratio=0.09,frequency=0.2941),
    rs7831810=dict(risk_allele='A',  weight=0.4012, risk_ratio=0.09,frequency=0.4012),
    rs1532277=dict(risk_allele='T',  weight=0.236, risk_ratio=0.21,frequency=0.236),
    rs9331888=dict(risk_allele='C',  weight=0.6665, risk_ratio=0.16,frequency=0.6665),
    rs7920721=dict(risk_allele='A',  weight=0.7302, risk_ratio=-0.07,frequency=0.7302),
    rs3740688=dict(risk_allele='T',  weight=0.6392, risk_ratio=0.07,frequency=0.6392),
    rs7116190=dict(risk_allele='A',  weight=0.2879, risk_ratio=0.08,frequency=0.2879),
    rs526904=dict(risk_allele='T',  weight=0.3263, risk_ratio=-0.20,frequency=0.3263),
    rs543293=dict(risk_allele='A',  weight=0.2923, risk_ratio=0.3,frequency=0.2923),
    rs11218343=dict(risk_allele='T', weight=0.891, risk_ratio=0.18,frequency=0.891),
    rs6572869=dict(risk_allele='A',  weight=0.2754, risk_ratio=-0.11,frequency=0.2754),
    rs12590273=dict(risk_allele='T',  weight=0.9083, risk_ratio=0.1,frequency=0.9083),
    rs7145100=dict(risk_allele='C',  weight=0.146, risk_ratio=0.08,frequency=0.146),
    rs74615166=dict(risk_allele='T',  weight=0.992612, risk_ratio=-0.23,frequency=0.992612),
    rs2526378=dict(risk_allele='A', weight=0.4722, risk_ratio=0.09,frequency=0.4722),
    rs117481827=dict(risk_allele='T', weight=0.9531, risk_ratio=-0.09,frequency=0.9531),
    rs7408475=dict(risk_allele='C',  weight=0.7392, risk_ratio=0.18,frequency=0.7392),
    rs3752246=dict(risk_allele='C',  weight=0.8255, risk_ratio=-0.25,frequency=0.8255),
    rs7274581=dict(risk_allele='A',  weight=0.90595, risk_ratio=0.1,frequency=0.90595),
)
