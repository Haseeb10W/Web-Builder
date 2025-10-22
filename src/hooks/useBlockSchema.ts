

import { buttonBlockSchema } from '@/components/blocks/button/blockSchema';
import { flexBlockSchema } from '@/components/blocks/flexbox/blockSchema';
import { headingBlockSchema } from '@/components/blocks/heading/blockSchema';
import { iconListSchema } from '@/components/blocks/iconlist/blockSchema';
import { iconBlockSchema } from '@/components/blocks/icons/blockSchems';
import { imageBlockSchema } from '@/components/blocks/Image/blockSchema';
import { menuBlockSchema } from '@/components/blocks/menu/menuBlockSchema';
import { textBlockSchema } from '@/components/blocks/Text/blockSchema';

import { Block, BlockType, ContainerBlock, ContainerType} from '@/types/blocksSchema';


import { v4 as uuidv4 } from 'uuid';

interface blockSchemaProps {
  type : BlockType | ContainerType,
}


export default function useBlockSchema( { type } : blockSchemaProps)  {
  // const blockAdd  = {type } as Block
  const newId = uuidv4();
  
  const blockAdd : Omit<Block , 'type' | 'props' | 'children'> = {
    id :  `${type}-${newId}`, 
    title: `${type}`,
    link:"",
    styles :  {},
    responsiveStyles : {
      baseStyle : {},
      tablet : {},
      desktop : {},
      hoverStyles: {},
    },

    customCSSCode : '',
    tailWindClasses : '',
    customClasses : '',
    customCSSID : '', 
    classTracking: {
      fontFamilyClass: ''

    },
    draggable : true, 
    resizable : true,
    editable : true

  }
  

  
  
    switch (type) {
      case 'text' : 
        return  textBlockSchema(blockAdd)

      case 'heading' :

        return headingBlockSchema(blockAdd)

      
      case 'button' : 
        return buttonBlockSchema(blockAdd)
      case 'icon' : 
        return iconBlockSchema(blockAdd)

      case 'iconlist':
        return  iconListSchema(blockAdd)

      case 'image' : 
        return imageBlockSchema(blockAdd)

      case 'menu' :
        return menuBlockSchema(blockAdd)
      
      case 'flex' : 
        return flexBlockSchema(blockAdd)
      
      case 'grid' : 
        return {
          ...blockAdd,
          type : 'grid',
          children : [],
          props : {
            columns : 3,

          }
        } as ContainerBlock
      default :
        console.log("No such Block Found")
      return undefined;
    }


 

  
}
