'use client';


import { Block, BlockType, ButtonBlock, Container, ContainerBlock, ContainerType, HeadingBlock, ImageBlock, TextBlock } from '@/types/blocksSchema';
import React, { useState } from 'react';

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
    styles :  {
      textAlign : 'left',
      margin: '0px 0px 0px 0px',
      padding: '5px 5px 5px 5px',
      color: '',
      backgroundColor: '',
      backgroundImage:'',
      backgroundPosition:'',
      backgroundSize:'',
      backgroundRepeat:'',
      backgroundAttachment:'',
      fontSize: '',
      width: '',
      height: '',
      maxWidth: '',
      maxHeight: '',
      alignContent: 'start',
      lineHeight: '',
      fontWeight: '',
      fontStyle: '',
      textDecoration: '',
      letterSpacing: '',
      wordSpacing: '',
      borderStyle:'',
      borderColor:'',
      borderWidth:'',
      borderTopWidth:'',
      borderRightWidth:'',
      borderBottomWidth:'',
      borderLeftWidth:'',
      borderRadius:'',
      borderTopLeftRadius:'',
      borderTopRightRadius:'',
      borderBottomRightRadius:'',
      borderBottomLeftRadius:'',
      display:'',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'',
      alignItems:'',
      gap :'',
      rowGap:'',
      columnGap :''

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
        return  {
          ...blockAdd,
          type : 'text',
          props : {
            text : `Your Text `

          }
          
        } as TextBlock;

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
          }
          
        } as ButtonBlock
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
