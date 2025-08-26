import { Block } from "@/types/blocksSchema"



export const appliedSettings = (applied:string | undefined, foundBlock:Block | null, fieldValue: string | number)=>{
  

  const isTextBlockType = (Block: Block | null)=>{
    return Block !== null && (Block.type === 'text' || Block.type === 'heading')
  }

  
  

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
    case "backgroundChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'backgroundColor')

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
    case "fontStyleChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'fontStyle')
      break;
    case "textDecorationChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'textDecoration')
    case "letterSpacingChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'letterSpacing')
    case "wordSpacingChange":
      settingStyleApply(isTextBlockType, foundBlock, fieldValue, 'wordSpacing')
    case "fontFamilyChange":
      
      if(isTextBlockType(foundBlock)) {
        foundBlock.classTracking = {
          ...foundBlock.classTracking,
          fontFamilyClass: fieldValue
        };
      }
      break;


  }
        


}



const settingStyleApply = (condition:any, block:any, fieldValue:any,  property:string)=>{

  if(condition(block) ){
        block.styles = block.styles || {};
        block.styles[property] = fieldValue ;
      }

}






// if(isTextBlockType(foundBlock) ){
      //   foundBlock.styles = foundBlock.styles || {};
      //   foundBlock.styles.backgroundColor = fieldValue as React.CSSProperties['backgroundColor'];
      // }