import { BaseBlock } from "@/types/blocksSchema";





export interface menuBlock extends BaseBlock {
  type: 'menu';
  props : {
    childClasses: string[];
    childStyles : {[key:string ]: any};
    items : {
      text : string;
      link : string;
      subNav?: menuBlock['props']['items'];
    }[];
  }
}

export const menuBlockSchema = (blockAdd: any)=>{
  return { ...blockAdd,
            type : 'menu',
            
            
            props : {
              childClasses : ['listItems', 'iconList', 'textList'],
              childStyles : {
                menuList : {responsiveStyles : {
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
              items : [
                { text : 'Menu Item', link : '' },
                { text : 'second Item', link : '', subNav : [
                  { text : 'Sub Item 1', link : '' },
                  { text : 'Sub Item 2', link : '' },
                ] }

              ]
  
            },
            
            
            
          } as menuBlock;
}

