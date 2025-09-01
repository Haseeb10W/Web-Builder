'use client'

import React, { createContext, useContext, useState } from "react"

export interface settingTypes{
   id: string,
  title: string,
  type : string,
}

export interface mediaApply{
  applyType: 'single'| 'multiple',
  type : 'image'| 'video',
  appliedData : any[],
  appliedId : string,

}

interface settingTypeContextTypes {
  settingType: settingTypes  | undefined;
  setSettingType: React.Dispatch<React.SetStateAction<settingTypes | undefined>>;
  settingPopUp : boolean;
  setSettingPopUp : React.Dispatch<React.SetStateAction<boolean>>;
  justDroppedId : string | null;
  setJustDroppedId : React.Dispatch<React.SetStateAction<string | null>>;
  dragDrop: boolean;
  setDragDrop: React.Dispatch<React.SetStateAction<boolean>>;
  openMedia:boolean;
  setOpenMedia: React.Dispatch<React.SetStateAction<boolean>>;
  mediaFilesApply: mediaApply | undefined;
  setMediaFilesApply: React.Dispatch<React.SetStateAction<mediaApply | undefined>>;
  screenType: string,
  setScreenType : React.Dispatch<React.SetStateAction<string>>;
  fileApplyOn : boolean;
  setFileApplyOn : React.Dispatch<React.SetStateAction<boolean>>;

}



const settingTypeContext =  createContext<settingTypeContextTypes | undefined>(undefined);

interface settingsContextProviderProps {
  children : React.ReactNode;
}


export const SettingsContextProvider = ({children}: settingsContextProviderProps)=>{
  const [settingType, setSettingType] = useState<settingTypes | undefined>(undefined);
  const [settingPopUp, setSettingPopUp] = useState<boolean>(false);
  const [justDroppedId, setJustDroppedId] = useState<string | null>(null);
  const [dragDrop, setDragDrop] = useState<boolean>(false);
  const [openMedia, setOpenMedia] = useState(false);
  const [mediaFilesApply, setMediaFilesApply] = useState<mediaApply | undefined>(undefined);
  const [screenType, setScreenType] = useState('');
  const [fileApplyOn, setFileApplyOn] = useState(false);
  return (
    <settingTypeContext.Provider value={{settingType, setSettingType, settingPopUp, setSettingPopUp, justDroppedId, setJustDroppedId, dragDrop, setDragDrop, openMedia, setOpenMedia, mediaFilesApply, setMediaFilesApply, screenType, setScreenType, fileApplyOn, setFileApplyOn  }}>
      {children}
    </settingTypeContext.Provider>
  )


}



export const useSettingType = ()=>{

  const context =  useContext(settingTypeContext);
  if (!context) {
    throw new Error('useSettingType must be used within a SettingsContextProvider');
  }

  return context
}