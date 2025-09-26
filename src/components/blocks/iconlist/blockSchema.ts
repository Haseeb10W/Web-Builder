import { BaseBlock } from "@/types/blocksSchema";

export interface IconListBlock extends BaseBlock {
  type: 'iconlist';
  props: {
    childClasses: string[];
    childStyles : {[key:string ]: any};
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
        childClasses : ['listItems', 'iconList', 'textList'],
        childStyles : {
          listItems : {responsiveStyles : {
                          baseStyle:{},
                          tablet: {},
                          desktop: {},
                          hoverStyles: {},
                      }
                    },
          iconList : {responsiveStyles : {
                          baseStyle:{},
                          tablet: {},
                          desktop: {},
                          hoverStyles: {},
                      }},
           textList : {responsiveStyles : {
                          baseStyle:{},
                          tablet: {},
                          desktop: {},
                          hoverStyles: {},
                      }},
        },
        items: [
          { icon: null, text: "List item 1", link: ""  },
          { icon: null, text: "List item 2", link: "" },
        ],
      },
      } as IconListBlock; 
}