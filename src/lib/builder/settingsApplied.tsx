import { BaseBlock, Block } from "@/types/blocksSchema"
import { styleAppliedToBackground, styleAppliedToCommonElements, styleAppliedToCustom } from "./applyStyleFunctions"



const BaseBlockKeys : any[] = ['customCSSID', 'customClasses', 'tailWindClasses', 'customCSSCode']
const propsKeys : string[] = ['text', 'level']

export const appliedSettings = (applied:string | undefined, foundBlock:Block | null, fieldValue: string, screenType: 'desktop' | 'tablet' | 'mobile', settingField: any, styleFields: string[] )=>{
  

  const isTextBlockType = (Block: Block | null)=>{
    return Block !== null && (Block.type === 'text' || Block.type === 'heading')
  }

  
  // console.log(applied, fieldValue)

  if(propsKeys.includes(applied as string) && foundBlock?.props && applied &&  applied in foundBlock.props ){

    // console.log('applied to props run');
            // amazonq-ignore-next-line
            const fieldVal = JSON.parse(fieldValue).value
            const responsive = JSON.parse(fieldValue).responsive

            if(responsive == 'off'){
              (foundBlock.props as any)[applied] = fieldVal
            settingField.props.value = fieldVal

            }

        
            
  }else if(styleFields.includes(applied as string)){

    styleAppliedToCommonElements(screenType, settingField,  foundBlock, fieldValue, applied as string)

  }else if(applied == "fontFamilyChange"){
    if(isTextBlockType(foundBlock)) {
        foundBlock.classTracking = {
          ...foundBlock.classTracking,
          fontFamilyClass: fieldValue
        };
      }

  }else if( applied == "backgroundChange"){
    
    styleAppliedToBackground(screenType, settingField, foundBlock, fieldValue)

  }else if(applied == "positionChange"){
    
    styleAppliedToCustom(screenType, settingField, foundBlock, fieldValue, ['position', 'top', 'left', 'bottom', 'right'])

  }else if(applied == "transitionChange"){
    styleAppliedToCustom(screenType, settingField, foundBlock, fieldValue, ['transition-property', 'transition-delay', 'transition-duration', 'transition-timing-function'])
  }else if(BaseBlockKeys.includes(applied as keyof BaseBlock)){
    if(foundBlock && applied){
      
      (foundBlock as any)[applied] = fieldValue
        // foundBlock.customClasses = fieldValue
      settingField.props.value = fieldValue
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



