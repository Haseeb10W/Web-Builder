'use client';

import React, { useEffect, useState } from 'react'
import { Block, blockProps} from '@/types/blocksSchema';
import Section from '@/components/builder/Section';
import useClassTracking from '@/hooks/useClassTrack';
import { TextBlock } from './blockSchema';



export default function Text({block, index, onDelete, onCopy}: blockProps) {

  const trackingClass = useClassTracking(block)

  if(block.type !== 'text'){
    return null;
  }

  const textBlock = block as TextBlock;

 
  

  
  if(!textBlock?.editable && !textBlock?.draggable){
    return (
      <p key={textBlock?.id} id={textBlock?.customCSSID} style= {{
        ...textBlock?.styles

      }}
      className = {`flex-child block-${textBlock?.id} ${textBlock?.tailWindClasses} ${textBlock?.customClasses} ${trackingClass}`}
      dangerouslySetInnerHTML={{__html:textBlock && textBlock?.props?.text }}

    >
    </p>
    )

  }

  const textStyles = {
    styling : {
      ...textBlock?.styles

    },
    cssId: textBlock?.customCSSID,
    classes : ` block-editor-${textBlock?.id} cursor-default selected-child ${textBlock?.tailWindClasses} ${textBlock?.customClasses}  ${trackingClass} `

  }

  // console.log('BlockReader block ID:', block.id); 
  return (
    <Section id={textBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index} allStyles={textStyles}>
    <p key={textBlock?.id} 
      className = {`  ${trackingClass}`}
      dangerouslySetInnerHTML={{__html:textBlock && textBlock?.props?.text }}

    ></p>
    
    </Section>
  )
}
