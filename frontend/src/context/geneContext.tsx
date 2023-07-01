import { createContext, ReactNode, useState } from 'react';

export interface RiskState {
  apoe_genotype: string;
  apoe_risk_factors: RiskFactor[];
  apoe_risk_ratio: number;
  risk_factors: RiskFactor[];
  risk_ratio: number;
  prs_percentile:number;
  overall_risk_percentile: number;
  risk_percentile_with_intervention: number;
  other_relevant_genes: RiskFactor[];
  gender: string,
}

export interface RiskFactor {
  gene_name: string;
  genotype: string;
  risk_ratio: number;
  significance: string;
  variant: string;
  evidence: number;
  implication: string;
}

const initialState: RiskState = {
  apoe_genotype: '',
  apoe_risk_factors: [
    {
      gene_name: '',
      genotype: '',
      risk_ratio: 0,
      significance: '',
      variant: '',
      evidence: 0,
      implication: '...'
    },
  ],
  apoe_risk_ratio: 0,
  risk_factors: [
    {
      gene_name: '',
      genotype: '',
      risk_ratio: 0,
      significance: '',
      variant: '',
      evidence: 0,
      implication: '...'
    },
  ],
  risk_ratio: 10,
  prs_percentile: 0,
  overall_risk_percentile: 0,
  risk_percentile_with_intervention: 0,
  other_relevant_genes: [
    {
      gene_name: '',
      genotype: '',
      risk_ratio: 0,
      significance: '',
      variant: '',
      evidence: 0,
      implication: '...'
    },
  ],
  gender: '',
};

export const GeneContext = createContext<{
    state: RiskState;
    updateState: (newState: RiskState) => void;
  }>({
    state: initialState,
    updateState: () => {},
  });

export const GeneProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<RiskState>(initialState);
    
    const updateState = (newState: RiskState) => {
      setState(newState);
    };
  
    return (
      <GeneContext.Provider value={{ state, updateState }}>
        {children}
      </GeneContext.Provider>
    );
  };
  
