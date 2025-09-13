import { BaseBlock } from "@/types/blocksSchema";

 export interface ButtonBlock extends BaseBlock {
  type: 'button';
  props : {
    text: string;
    link: string;
    target : '_self' | '_blank';
    icon : string | null
  }
}
export const buttonBlockSchema = (blockAdd : any) =>{
    return  {
              ...blockAdd,
              type : 'button',
              props : {
                text : 'Click Me',
                link : '',
                target : '_self',
                 icon: null
              }
              
            } as ButtonBlock
}