export interface RiskData {
    apoe_genotype: string;
    apoe_risk_factors: RiskFactor[];
    apoe_risk_ratio: number;
    risk_factors: RiskFactor[];
    risk_ratio: number;
  }
  
  export interface RiskFactor {
    gene_name: string;
    genotype: string;
    risk_ratio: number;
    significance: string;
    variant: string;
  }