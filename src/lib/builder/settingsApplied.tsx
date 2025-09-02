import { Block } from "@/types/blocksSchema"
import { styleApplyToElements } from "./settingsSetter"



export const appliedSettings = (applied:string | undefined, foundBlock:Block | null, fieldValue: string, screenType: 'desktop' | 'tablet' | 'mobile', settingField: any, styleFields: string[] )=>{
  

  const isTextBlockType = (Block: Block | null)=>{
    return Block !== null && (Block.type === 'text' || Block.type === 'heading')
  }

  
  // console.log(applied)

  if(applied == "textChange"){
    if(isTextBlockType(foundBlock)) {
            foundBlock.props.text = fieldValue
            settingField.props.value = fieldValue
      }
  }else if(styleFields.includes(applied as string)){
    
    styleApplyToElements(screenType, settingField,  foundBlock, fieldValue, applied as string)
  }else if(applied == "fontFamilyChange"){
    if(isTextBlockType(foundBlock)) {
        foundBlock.classTracking = {
          ...foundBlock.classTracking,
          fontFamilyClass: fieldValue
        };
      }

  }else if( applied == "backgroundChange"){
    if(isTextBlockType(foundBlock) ){
        backgroundSettingHandle(foundBlock, fieldValue)

      }

  }



// Function End
}



const settingStyleApply = (condition:any, block:any, fieldValue:any,  property:string)=>{

  if(condition(block) ){
        block.styles = block.styles || {};
        block.styles[property] = fieldValue ;
      }

}



const backgroundSettingHandle = (foundBlock:Block, fieldValue: string )=>{
  const backgroundData = JSON.parse(fieldValue);
  // console.log(backgroundData)

  switch (backgroundData.type){
    case 'color': 
      foundBlock.styles = foundBlock.styles || {};
      foundBlock.styles['backgroundColor'] =  backgroundData?.colorValue;
      break;
    default:
      break
  }



}