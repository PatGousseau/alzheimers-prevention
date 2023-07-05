import { createContext, ReactNode, useState } from 'react';

const initialState: string[] = [];

export const SurveyContext = createContext<{
    state: string[];
    updateState: (newState: string[]) => void;
  }>({
    state: initialState,
    updateState: () => {},
  });

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<string[]>(initialState);
    
    const updateState = (newState: string[]) => {
      setState(newState);
    };
  
    return (
      <SurveyContext.Provider value={{ state, updateState }}>
        {children}
      </SurveyContext.Provider>
    );
  };
  
