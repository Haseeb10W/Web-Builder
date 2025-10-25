import { BaseBlock } from "@/types/blocksSchema";





export interface sliderBlock extends BaseBlock {
  type: 'menu';
  props : {
    
  }
}

export const sliderBlockSchema = (blockAdd: any)=>{
  return { ...blockAdd,
            type : 'slider',
            
            
            props : {
              
  
            },
            
            
            
          } as sliderBlock;
}

