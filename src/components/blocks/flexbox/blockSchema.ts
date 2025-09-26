import { BaseBlock, Block, ContainerBlock } from "@/types/blocksSchema";



export const flexBlockSchema = (blockAdd : any) => {
   return {
          ...blockAdd,
          type : 'flex',
          responsiveStyles : {
               ...blockAdd.responsiveStyles,
               baseStyle : {
                ...blockAdd?.responsiveStyles?.baseStyle,
                'display' : 'flex',
                'flex-wrap' : 'wrap',
                'flex-direction' : 'row',
                'gap' : '0px 0px',
                'padding': `10px 10px 10px 10px`
                
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
          children : [],
          props : {
            // direction : 'row',
            // gap : '10px',
          }
        } as ContainerBlock
}