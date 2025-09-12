import { TextBlock } from "@/types/blocksSchema";


export const textBlockSchema = (blockAdd: any)=>{
  return { ...blockAdd,
            type : 'text',
            props : {
              text : `Your Text `
  
            },
            responsiveStyles : {
               ...blockAdd.responsiveStyles,
               baseStyle : {
                ...blockAdd?.responsiveStyles?.baseStyle,
                
                
               },
               tablet : {
                ...blockAdd?.responsiveStyles?.tablet,
                
  
               },
               desktop: {
                ...blockAdd?.responsiveStyles?.desktop,
                
               },
               hoverStyles : {
                ...blockAdd?.responsiveStyles?.hoverStyles,
                
               }
  
            },
            
          } as TextBlock;
}


