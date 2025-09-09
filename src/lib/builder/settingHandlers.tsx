import { settingTypes } from "@/contexts/settingsType"
import { Active } from "@dnd-kit/core"
import { Dispatch, SetStateAction } from "react"
import { getFirstWord } from "../stringFunctions"

export interface settingsArgs {
  (
    active: Active,
    setJustDroppedId : React.Dispatch<SetStateAction<string | null>>,
    setSettingType : React.Dispatch<SetStateAction<settingTypes | undefined>> ,
    setSettingPopUp : React.Dispatch<SetStateAction<boolean>>,
    

  ) : void
}


export const setSettings : settingsArgs = (active, setJustDroppedId, setSettingType, setSettingPopUp) =>{


  // console.log(active)

  if( active?.data?.current?.type == 'section'){
    
  if(active.id){
    setJustDroppedId(String(active?.id))

    setSettingPopUp(true)
    
    const blockId = String(active?.id);
    const blockType = getFirstWord(blockId);
    

    setSettingType({
      id: blockId,
      title: blockType,
      type :  blockId.split('-')[0]
    })
  
  }

  }else if(!active.data?.current?.currentX){
    setJustDroppedId(null);
    setSettingType(undefined)
    setSettingPopUp(false)
  }
  


}


export const handleSettingChange = (event:Event)=>{

  console.log(event);

  

}