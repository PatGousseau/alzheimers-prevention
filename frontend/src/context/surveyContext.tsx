import { createContext, ReactNode, useState } from 'react';

export interface Score {
  header:string;
  letter:string;
}

const initialState: Score[] = [
  {
    header: 'Energy',
    letter: '',
  },
  {
    header: 'Mood',
    letter: '',
  },
  {
    header: 'Attention',
    letter: '',
  },
  {
    header: 'Memory horsepower',
    letter: '',
  },
  {
    header: 'Executive function',
    letter: '',
  },
  {
    header: 'Memory',
    letter: '',
  },
  {
    header: 'Purpose',
    letter: '',
  },
  {
    header: 'Resilience',
    letter: '',
  },
]

export const SurveyContext = createContext<{
    state: Score[];
    updateState: (newState: Score[]) => void;
  }>({
    state: initialState,
    updateState: () => {},
  });

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<Score[]>(initialState);
    
    const updateState = (newState: Score[]) => {
      setState(newState);
    };
  
    return (
      <SurveyContext.Provider value={{ state, updateState }}>
        {children}
      </SurveyContext.Provider>
    );
  };
  
