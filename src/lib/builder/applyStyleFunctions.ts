import { Block } from "@/types/blocksSchema";


export const styleAppliedToCommonElements = (screen: 'desktop' | 'tablet' | 'mobile', settingField: any, block:Block | null, fieldValue: string, style:string)=>{

  if(!block) return;  

  const fullValue = JSON.parse(fieldValue);

  const status = fullValue.status;
  const value = fullValue.value;
  const responsive  = fullValue.responsive;

  settingField.props.value = value;

  styleApplyToElements(screen, block, value, style, responsive, status)


}


export const styleAppliedToBackground = (screen: 'desktop' | 'tablet' | 'mobile', settingField: any, block:Block | null, 
  fieldValue : string) =>{
    if(!block) return ;
    
    const allBackgroundProperties = JSON.parse(fieldValue);

    const status = allBackgroundProperties.status;
    const bgValues = allBackgroundProperties.backgroundValues;
    const responsive = allBackgroundProperties.responsive;

    const setValues = {
          backgroundColor : bgValues['background-color'],
          backgroundImage : bgValues['background-image'],
          backgroundPosition : bgValues['background-position'],
          backgroundSize : bgValues['background-size'],
          backgroundRepeat: bgValues['background-repeat'],
          backgroundAttachment: bgValues['background-attachment'],
          backgroundGradient : bgValues['background']
    }
    settingField.props.value = JSON.stringify(setValues)
    

    Object.entries(bgValues).forEach( ([style, value]: [string, any]) =>{
      styleApplyToElements(screen, block, value, style, responsive, status)

    })

}


export const styleApplyToElements = (screen: 'desktop' | 'tablet' | 'mobile', block:Block , value: string, style:string, responsive:string, status:string)=>{


  switch (status){
    case "normal":

    if(responsive == 'on'){

        if(screen === 'desktop'){
           block.responsiveStyles = block.responsiveStyles || {}
           block.responsiveStyles.baseStyle = block.responsiveStyles.baseStyle || {} 
           block.responsiveStyles.desktop = block.responsiveStyles.desktop || {} 

           if(block.responsiveStyles.desktop[style]  && block.responsiveStyles.desktop[style] !== ''){
             
             deleteOrSetProperty(block.responsiveStyles.desktop, style, value)
           }else{
             
             deleteOrSetProperty(block.responsiveStyles.baseStyle, style, value)

           }

         }else if(screen === 'mobile'){
           block.responsiveStyles = block.responsiveStyles || {}
           block.responsiveStyles.baseStyle = block.responsiveStyles.baseStyle || {} 
           block.responsiveStyles.desktop = block.responsiveStyles.desktop || {} 
           
           block.responsiveStyles.desktop[style] = block.responsiveStyles?.desktop[style] ? block.responsiveStyles.desktop[style] : block?.responsiveStyles?.baseStyle[style]
           
           deleteOrSetProperty(block.responsiveStyles.baseStyle, style, value)
           

         }else if(screen === 'tablet'){
           block.responsiveStyles = block.responsiveStyles || {}
           block.responsiveStyles.tablet = block.responsiveStyles.tablet || {} 
           deleteOrSetProperty(block.responsiveStyles.tablet, style, value)
           


         }
       }else{
          block.responsiveStyles = block.responsiveStyles || {}
          block.responsiveStyles.baseStyle = block.responsiveStyles.baseStyle || {} 

          deleteOrSetProperty(block.responsiveStyles.baseStyle, style, value)
          

       }
      break;
    case "hover":

       
      block.responsiveStyles = block.responsiveStyles || {}
      block.responsiveStyles.hoverStyles = block.responsiveStyles.hoverStyles || {} 

      deleteOrSetProperty(block.responsiveStyles.hoverStyles, style, value)

      
      break;
  }

  
  

}



const deleteOrSetProperty = (obj: Record<string, any>, style: string, value: string) => {

  if (value && value !== '') {
    obj[style] = value;
  } else {
    delete obj[style];
  }

}