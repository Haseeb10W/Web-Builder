'use client'

import Section from '@/components/builder/Section';
import DynamicIcons from '@/components/DynamicIcons';
import useClassTracking from '@/hooks/useClassTrack';
import { Block, IconBlock } from '@/types/blocksSchema';
import React from 'react'

interface IconProps{
  block: Block;
  index : number;
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
}
export default function Icon({block, index, onDelete, onCopy}:IconProps) {

    const trackingClass = useClassTracking(block)
    if(block.type !== 'icon') return null;
    const IconBlock = block as IconBlock;
    if(!IconBlock?.editable && !IconBlock?.draggable){
    return (
    <div>
        <DynamicIcons name={IconBlock?.props?.icon || ''} classes={`h-5 w-5`} styles= {{
        ...IconBlock?.styles}}  />
    </div>                 
       )

  }


    const IconStyles = {
    styling : {
      ...IconBlock?.styles

    },

    classes : ` block-editor-${IconBlock?.id} ${IconBlock?.tailWindClasses} ${IconBlock?.customClasses} cursor-default selected-child ${trackingClass} `

  }
  return (
    <>
    <Section id={IconBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index}allStyles={IconStyles}>   
      <div>
        <DynamicIcons key={IconBlock?.id} name={IconBlock?.props?.icon || ''}  classes={`  ${trackingClass}`}/>
      </div>                
  </Section>
    </>
  )
}

