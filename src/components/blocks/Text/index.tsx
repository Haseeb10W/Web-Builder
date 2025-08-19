'use client';

import React, { useEffect, useState } from 'react'
import { Block, TextBlock} from '@/types/blocksSchema';
import Section from '@/components/builder/Section';
import useClassTracking from '@/hooks/useClassTrack';

interface TextProps {
  block : Block,
  index : number,
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
  
}

export default function Text({block, index, onDelete, onCopy}: TextProps) {

  const trackingClass = useClassTracking(block)
  // console.log(trackingClass)

  if(block.type !== 'text'){
    return null;
  }

  const textBlock = block as TextBlock;

 
  

  
  if(!textBlock?.editable && !textBlock?.draggable){
    return (
      <p key={textBlock?.id} style= {{
        ...textBlock?.styles

      }}
      className = {`flex-child ${textBlock?.tailWindClasses} ${textBlock?.customClasses} ${trackingClass}`}
      dangerouslySetInnerHTML={{__html:textBlock && textBlock?.props?.text }}

    >
    </p>
    )

  }

  // console.log('BlockReader block ID:', block.id); 
  return (
    <Section id={textBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index}>
    <p key={textBlock?.id} style= {{
        ...textBlock?.styles

      }}
      className = {`${textBlock?.tailWindClasses} ${textBlock?.customClasses} cursor-default selected-child ${trackingClass}`}
      dangerouslySetInnerHTML={{__html:textBlock && textBlock?.props?.text }}

    ></p>
    
    </Section>
  )
}
