'useclient'

import DynamicIcons from '@/components/DynamicIcons';
import { Block, IconListBlock } from '@/types/blocksSchema';
import Link from 'next/link';
import React from 'react'

interface IconListProps {
  block : Block,
  index : number,
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
  
}
export default function IconsList({block, index, onDelete, onCopy}: IconListProps) {

if(block.type !== 'iconlist'){
    return null;
  }

 const iconListBlock = block as IconListBlock;

   if(!iconListBlock?.editable && !iconListBlock?.draggable){
    return (
       <>
       {
        iconListBlock?.props?.items?.map((items)=>{
           return(
            <>
            <DynamicIcons name={items.icon || ''}/>
            </>
           )
        })
       }
       
       </>
    )

  }


  return (
    <>

    </>
  )
}
