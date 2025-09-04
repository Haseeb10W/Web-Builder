import { Block, BlockType } from "@/types/blocksSchema";
import { editSchema } from "@/types/editSchema";
import { settingContiner, settingsSetupSchema } from "@/types/settingsSchema";
import { findBlockOverall } from "./blockHandlers";


export const backgroundSettingsSetter = (findBlock:Block)=>{

  const backgroundColor = findBlock?.styles?.backgroundColor;
  const backgroundImage = findBlock?.styles?.backgroundImage;
  const backgroundPosition = findBlock?.styles?.backgroundPosition;
  const backgroundSize = findBlock?.styles?.backgroundSize;
  const backgroundRepeat = findBlock?.styles?.backgroundRepeat;
  const backgroundAttachment = findBlock?.styles?.backgroundAttachment;



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


export const styleApplyToElements = (screen: 'desktop' | 'tablet' | 'mobile', settingField: any, block:Block | null, fieldValue: string, style:string)=>{

  if(!block) return;  

  const fullValue = JSON.parse(fieldValue);

  const status = fullValue.status;
  const value = fullValue.value;

  settingField.props.value = value

  switch (status){
    case "normal":
      if(screen === 'desktop'){
        block.responsiveStyles = block.responsiveStyles || {}
        block.responsiveStyles.baseStyle = block.responsiveStyles.baseStyle || {} 
        block.responsiveStyles.desktop = block.responsiveStyles.desktop || {} 

        if(block.responsiveStyles.desktop[style]  && block.responsiveStyles.desktop[style] !== ''){
          block.responsiveStyles.desktop[style] = value
        }else{
          block.responsiveStyles.baseStyle[style] = value;

        }
        
      }else if(screen === 'mobile'){
        block.responsiveStyles = block.responsiveStyles || {}
        block.responsiveStyles.baseStyle = block.responsiveStyles.baseStyle || {} 
        block.responsiveStyles.desktop = block.responsiveStyles.desktop || {} 
        block.responsiveStyles.baseStyle[style] = value
        block.responsiveStyles.desktop[style] = value

      }else if(screen === 'tablet'){
        block.responsiveStyles = block.responsiveStyles || {}
        block.responsiveStyles.tablet = block.responsiveStyles.tablet || {} 
         
        block.responsiveStyles.tablet[style] = value
        

      }
      break;
    case "hover":
      block.responsiveStyles = block.responsiveStyles || {}
      block.responsiveStyles.hoverStyles = block.responsiveStyles.hoverStyles || {} 
      block.responsiveStyles.hoverStyles[style] = value
  }

  
  

}


