'use client';

import { ContentSchema, renderSchema } from "@/types/editSchema";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";


interface ToogleContextType {
  toggleSide: boolean;
  setToggleSide: (value: boolean) => void;
  previewData : ContentSchema | null;
  setPreviewData: Dispatch<SetStateAction<ContentSchema | null>>;
}

const ToggleContext = createContext<ToogleContextType | undefined>(undefined);

interface ToggleContextProviderProps {
  children: ReactNode;
}

export const ToggleContextProvider = ({ children }: ToggleContextProviderProps) => {
  const [toggleSide, setToggleSide] = useState<boolean>(false);
  const [previewData, setPreviewData] = useState<ContentSchema | null>(null);


  return (
    <ToggleContext.Provider value={{ toggleSide, setToggleSide, previewData, setPreviewData }}>
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