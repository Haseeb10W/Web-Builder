

import { textBlockSchema } from '@/components/blocks/Text/blockSchema';
import { Block, BlockType, ButtonBlock, Container, ContainerBlock, ContainerType, HeadingBlock, IconBlock, ImageBlock } from '@/types/blocksSchema';


import { v4 as uuidv4 } from 'uuid';

interface blockSchemaProps {
  type : BlockType | ContainerType,

}


export default function useBlockSchema( { type } : blockSchemaProps)  {
  // const blockAdd  = {type } as Block
  const newId = uuidv4();
  
  const blockAdd : Omit<Block , 'type' | 'props' | 'children'> = {
    id :  `${type}-${newId}`, 
    link:"",
    styles :  {},
    responsiveStyles : {
      baseStyle : {},
      tablet : {},
      desktop : {},
      hoverStyles: {},
    },
    
    tailWindClasses : '',
    customClasses : '',
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
        return {
          ...blockAdd,
          type : 'heading',
          props : {
          text : 'Sample Heading',
          level : 'h1'
          },
          styles: {
            ...blockAdd.styles,
            fontWeight: '700',

          }

        } as HeadingBlock
      
      case 'button' : 
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
      case 'icon' : 
      return  {
          ...blockAdd,
          type : 'icon',
          props : {
          link : '',
          icon: null
          }

      } as IconBlock
      case 'image' : 
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
      case 'flex' : 
        return {
          ...blockAdd,
          type : 'flex',
          children : [],
          props : {
            direction : 'row',
            gap : '10px',
          }
        } as ContainerBlock
      
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
