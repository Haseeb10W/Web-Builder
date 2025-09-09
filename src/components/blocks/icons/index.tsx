import Section from '@/components/builder/Section';
import DynamicIcons from '@/components/DynamicIcons';
import { Block, IconBlock } from '@/types/blocksSchema';
import React from 'react'

interface IconProps{
  block: Block;
  index : number;
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
}
export default function Icon({block, index, onDelete, onCopy}:IconProps) {
    if(block.type !== 'icon') return null;
    const IconBlock = block as IconBlock;
    if(!IconBlock?.editable && !IconBlock?.draggable){
    return (
        <DynamicIcons name={IconBlock?.props?.icon || ''} classes={`h-5 w-5`}/>              
       )

  }
  return (
    <>
    <Section id={IconBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index}>   
        <DynamicIcons name={IconBlock?.props?.icon || ''} classes={`flex block-${IconBlock?.id} ${IconBlock?.tailWindClasses} ${IconBlock?.customClasses}`}/>                
  </Section>
    </>
  )
}

