import { BaseBlock } from "@/types/blocksSchema";

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  props : {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
}
export const headingBlockSchema = (blockAdd : any) => {
   return {
             ...blockAdd,
             type : 'heading',
             props : {
            //  childStyleClasses : ['imageClass', 'liClass'],
            //  childStyles : {
            //    imageClass: {
            //      responsiveStyles : {
            //            baseStyle : {},
            //            tablet : {},
            //            desktop : {},
            //            hoverStyles: {},
            //       },
            //    },
            //    liClass : {
            //      responsiveStyles : {
                   
            //      }
            //    }
            //  },
             text : 'Sample Heading',
             level : 'h1'
             },
             styles: {
               ...blockAdd.styles,
               fontWeight: '700',
   
             }
   
           } as HeadingBlock
}