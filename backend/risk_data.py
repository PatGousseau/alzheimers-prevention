"""
Generic risk multipliers based on homo or hetero genotypes as a nested dictionary as: 
   RSID: 
       Heterozygous risk: ##
       Homozygous risk: ##
"""
LOOKUP = dict(
    # rs429358=dict(hetero=3.0, homo=10., genotype='T'),  # APOE4
    rs7412=dict(hetero=-.47, homo=-.4, risky_genotype='T'),  # APOE2
    rs2075650=dict(hetero=None, homo=-0.5, risky_genotype='A'),  # TOMM40
    rs4420638=dict(hetero=None, homo=-0.5, risky_genotype='A'),  # APOC1
    rs9536314=dict(hetero=-0.3, homo=None, risky_genotype='GT'),  # Klotho
    rs63750847=dict(hetero=-0.4, homo=None, risky_genotype='A'),  # APP
    rs142787485=dict(hetero=-0.5, homo=None, risky_genotype='G'),  # RAB10
    rs3846662=dict(hetero=-0.45, homo=None, risky_genotype='A'),  # HMGCR
    rs8070723=dict(hetero=-0.1, homo=None, risky_genotype='G'),  # noname
)

"""
APOE4 risk multipliers and genotype
Dictionary keys are the (rs429358, rs7412) genotypes as a comma-separated string
Values are tuples: (risk increase, genotype)
"""
APOE4 = {
    'TT,TT': (-(1-0.26), 'E2/E2'),
    'TT,CT': (-(1-0.36), 'E2/E3'),
    'TC,CT': (-(1-1.38), 'E2/E4'),
    'TT,CC': (-(1-0.56), 'E3/E3'),
    'CT,CC': (-(1-2.00), 'E3/E4'),
    'CC,CC': (-(1-7.71), 'E4/E4'),
}