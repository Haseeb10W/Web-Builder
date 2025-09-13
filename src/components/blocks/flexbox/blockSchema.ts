import { BaseBlock, Block, ContainerBlock } from "@/types/blocksSchema";

export const flexBlockSchema = (blockAdd : any) => {
   return {
          ...blockAdd,
          type : 'flex',
          children : [],
          props : {
            direction : 'row',
            gap : '10px',
          }
        } as ContainerBlock
}