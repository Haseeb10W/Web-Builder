import { Block } from "@/types/blocksSchema"



export const appliedSettings = (applied:string | undefined, foundBlock:Block | null, fieldValue: string )=>{
  

  const isTextBlockType = (Block: Block | null)=>{
    return Block !== null && (Block.type === 'text' || Block.type === 'heading')
  }

  
  // console.log(applied)

  switch (applied){
    case "textChange":
      if(isTextBlockType(foundBlock)) {
            foundBlock.props.text = fieldValue
      }
      break;
    case "alignChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'textAlign')
      break;
    case "marginChange":
      
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'margin')
      break;
    case "paddingChange":
      
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'padding')
      break;
    case "colorChange":
      
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'color')
      break;
    case "fontSizeChange":
      
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'fontSize')
      break;
    
    case "widthSizeChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'width')
      break;
    case "maxWidthSizeChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'maxWidth')
      break;
    case "heightSizeChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'height')
      break;
    case "maxHeightSizeChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'maxHeight')
      break;
    case "vAlignChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'alignContent')
      break;
    case "lineHeightChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'lineHeight')
      break
    case "fontWeightChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'fontWeight')
      break;
    case "textTransformChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'textTransform')
      break;
    case "fontStyleChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'fontStyle')
      break;
    case "textDecorationChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'textDecoration')
      break;
    case "letterSpacingChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'letterSpacing')
      break;
    case "wordSpacingChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'wordSpacing')
      break;
    case "fontFamilyChange":
      
      if(isTextBlockType(foundBlock)) {
        foundBlock.classTracking = {
          ...foundBlock.classTracking,
          fontFamilyClass: fieldValue
        };
      }
      break;

    case "backgroundChange":
      console.log('hello')
      if(isTextBlockType(foundBlock) ){
        backgroundSettingHandle(foundBlock, fieldValue)

      }
      break;




      // Cases End
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
  console.log(backgroundData)

  switch (backgroundData.type){
    case 'color': 
      foundBlock.styles = foundBlock.styles || {};
      foundBlock.styles['backgroundColor'] =  backgroundData?.colorValue;
      break;
    default:
      break
  }



}