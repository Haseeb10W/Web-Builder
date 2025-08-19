import { settingTypes } from "@/contexts/settingsType";
import { editSchema } from "./editSchema";





export interface settingsSetArgs{
  (
    settingType:settingTypes,
     data: editSchema | undefined,
     setSettingsData: React.Dispatch<React.SetStateAction<{}>>
  ) : void
}


export interface handleSettingChangeArgs{
  (
    value: string | Event | number | boolean  ,
    id?: string,
    type?: string,
    applied?: string,
    data?: editSchema | undefined,
    updateData?: ((data: editSchema) => void) | undefined,
    setSettingsData?: React.Dispatch<React.SetStateAction<{
    [key: string]: any[]}>>,
    settingsData?: {[key: string]: any[]}


  ):void
}


export interface settingFieldProps {
  props?: {[key: string]: any};
  change?: (...args:unknown[])=>void;
  returnVal?: String;
}


export interface settingsSetupSchema {
  
  content : {
    field : string,
    props : {
      [key: string]: any
    }
    }[],
  
  styles : {
    field : string,
    props : {
      [key: string]: any
    }
    }[],
  
  settings : {
    field : string,
    props : {
      [key: string]: any
    }
    }[],
  

  
}