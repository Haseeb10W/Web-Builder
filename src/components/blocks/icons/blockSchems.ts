import { BaseBlock } from "@/types/blocksSchema";

export interface IconBlock extends BaseBlock {
  type: 'icon';
  props : {
    link: string;
    icon : string | null
  }
}
export const iconBlockSchema = (blockAdd :any) => {
    return  {
          ...blockAdd,
          type : 'icon',
          props : {
          link : '',
          icon: null
          }

      } as IconBlock
}