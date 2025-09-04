import { Block, BlockType } from "@/types/blocksSchema";
import { editSchema } from "@/types/editSchema";
import { settingContiner, settingsSetupSchema } from "@/types/settingsSchema";
import { findBlockOverall } from "./blockHandlers";


export const backgroundSettingsSetter = (findBlock:Block, screenType: "desktop" | "tablet" | "mobile", status:string )=>{


  

  const allValues = {
    
    backgroundColor : getValueForFields(findBlock, screenType, status, 'background-color'),
    backgroundImage : getValueForFields(findBlock, screenType, status, 'background-image'),
    backgroundPosition : getValueForFields(findBlock, screenType, status, 'background-position'),
    backgroundSize : getValueForFields(findBlock, screenType, status, 'background-size'),
    backgroundRepeat: getValueForFields(findBlock, screenType, status, 'background-repeat'),
    backgroundAttachment: getValueForFields(findBlock, screenType, status, 'background-attachment'),
    backgroundGradient : getValueForFields(findBlock, screenType, status, 'background')
    
  }


  const fullValue = JSON.stringify(allValues) 
  return fullValue;


}









export const getValueOnStatusChange = (styleFields: string[], settingId:string, data: editSchema | undefined, statusValue:string, screenType: "desktop" | "tablet" | "mobile", field: string)=>{

   
   const findBlock = findBlockOverall(data, settingId);
   let findValue: string = ''

   if(findBlock){


    if(styleFields.includes(field)){
      findValue = getValueForFields(findBlock, screenType, statusValue, field)

    }else if(field == "fontFamilyChange"){
      findValue = findBlock?.classTracking?.fontFamilyClass;
    }



   }


   return findValue



}


export const getValueForFields = (block:Block, screen: "desktop" | "tablet" | "mobile", status:string, field: string )=>{

  let styleValue:string = ''; 

  switch (status){
    case 'normal':
      if( screen === "mobile" ){
        styleValue = block?.responsiveStyles?.baseStyle?.[field] || '';
      }else if (screen === "desktop"){
        
        styleValue = block?.responsiveStyles?.desktop?.[field] ||  block?.responsiveStyles?.baseStyle?.[field]  || '';
      }else if (screen === "tablet"){
        styleValue = block?.responsiveStyles?.tablet?.[field] ||  block?.responsiveStyles?.baseStyle?.[field]  || '';
      }
      break;

    case 'hover' : 
      styleValue = block?.responsiveStyles?.hoverStyles?.[field] || '';

  }

  return styleValue;

 

}


export const styleApplyToFields = (settings:settingsSetupSchema, block:Block, screen:  "desktop" | "tablet" | "mobile", container: "content" | "styles" | "settings", index: number,  status: string,  field: string )=>{


  
  switch (status){
    case 'normal':
      if( screen === "mobile" ){
        settings[container][index].props.value = block?.responsiveStyles?.baseStyle?.[field] || '';
      }else if (screen === "desktop"){
        settings[container][index].props.value = block?.responsiveStyles?.desktop?.[field] ||  block?.responsiveStyles?.baseStyle?.[field]  || '';
      }else if (screen === "tablet"){
        settings[container][index].props.value = block?.responsiveStyles?.tablet?.[field] ||  block?.responsiveStyles?.baseStyle?.[field]  || '';
      }
      break;

    case 'hover' : 
      settings[container][index].props.value = block?.responsiveStyles?.hoverStyles?.[field] || '';



  }


} 



