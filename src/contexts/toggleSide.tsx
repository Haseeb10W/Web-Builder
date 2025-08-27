'use client';

import { createContext, ReactNode, useContext, useState } from "react";


interface ToogleContextType {
  toggleSide: boolean;
  setToggleSide: (value: boolean) => void;
}

const ToggleContext = createContext<ToogleContextType | undefined>(undefined);

interface ToggleContextProviderProps {
  children: ReactNode;
}

export const ToggleContextProvider = ({ children }: ToggleContextProviderProps) => {
  const [toggleSide, setToggleSide] = useState<boolean>(false);



  return (
    <ToggleContext.Provider value={{ toggleSide, setToggleSide }}>
      {children}
    </ToggleContext.Provider>
  );
};


export const useSideToggle= () => { 
  const context = useContext(ToggleContext);
  if (context === undefined) {
    throw new Error('useToggle must be used within a ToggleContextProvider');
  }
  return context;
}