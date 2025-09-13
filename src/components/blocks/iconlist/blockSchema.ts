import { BaseBlock } from "@/types/blocksSchema";

export interface IconListBlock extends BaseBlock {
  type: 'iconlist';
  props: {
    items: {
      icon: string | null;
      text: string;
      link?: string;
      target?: '_self' | '_blank';
    }[];
  };
}

export const iconListSchema = (blockAdd :any) => {
  return  {
      ...blockAdd,
      type: 'iconlist',
      props: {
        // classes = {
        //   iconsStyle = '',
        //   textStyle = '',
  
        // },
        items: [
          { icon: null, text: "List item 1", link: "", target: "_self" },
          { icon: null, text: "List item 2", link: "", target: "_self" },
        ],
      },
      } as IconListBlock; 
}