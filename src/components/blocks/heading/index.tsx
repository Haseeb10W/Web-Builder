'use client';

import React, { useEffect, useState } from 'react'
import { Block, blockProps} from '@/types/blocksSchema';
import Section from '@/components/builder/Section';
import useClassTracking from '@/hooks/useClassTrack';
import LevelMap from '@/lib/maps/levelmap';
import Link from 'next/link';
import { HeadingBlock } from './blockSchema';




export default function Heading({block, index, onDelete, onCopy}: blockProps) {

  const trackingClass = useClassTracking(block)
  // console.log(trackingClass)

  if(block.type !== 'heading'){
    return null;
  }

  const HeadBlock = block as HeadingBlock;

  
  
  
  if(!HeadBlock?.editable && !HeadBlock?.draggable){
    return (
    <LevelMap classes={`block-${HeadBlock?.id} ${HeadBlock?.tailWindClasses} ${HeadBlock?.customClasses} ${HeadBlock?.classTracking}`} headStyles={HeadBlock?.styles} block={HeadBlock}  />
    )

  }

  const headingStyles = {
    styling : {
      ...HeadBlock?.styles,
       

    },

    classes : ` block-editor-${HeadBlock?.id} ${HeadBlock?.tailWindClasses} ${HeadBlock?.customClasses} ${HeadBlock?.classTracking}`

  }

  // console.log('BlockReader block ID:', block.id); 
  return (
    <Section id={HeadBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index} allStyles={headingStyles}>
  <LevelMap  block={HeadBlock}  />
    {/* <p key={HeadBlock?.id} style= {{
        ...HeadBlock?.styles

      }}
      className = {`${HeadBlock?.tailWindClasses} ${HeadBlock?.customClasses} cursor-default selected-child ${trackingClass}`} 

    >{HeadBlock && HeadBlock?.props?.text}</p> */}
    
    </Section>   
  )
}
