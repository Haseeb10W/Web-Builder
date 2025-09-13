import { BaseBlock } from "@/types/blocksSchema";

 export interface ImageBlock extends BaseBlock {
  type: 'image';
  props : {
    src: string;
    alt?: string;
    link?: string;
    width?: string;
    height?: string;
  }
}

export const imageBlockSchema = (blockAdd :any) => {
   return  {
        ...blockAdd,
        type : 'image',
        props : {
          src: '',
          alt: '',
          width:'',
          height:''

        }
      } as ImageBlock
}