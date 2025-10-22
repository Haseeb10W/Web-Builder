
'use client';

import DynamicIcons from '@/components/DynamicIcons';
import { Block, blockProps } from '@/types/blocksSchema';
import Link from 'next/link';
import React from 'react'
import { IconListBlock } from './blockSchema';
import useClassTracking from '@/hooks/useClassTrack';
import Section from '@/components/builder/Section';


export default function IconsList({block, index, onDelete, onCopy}: blockProps) {

if(block.type !== 'iconlist'){
    return null;
  }

  const trackingClass = useClassTracking(block)

 const iconListBlock = block as IconListBlock;

   if(!iconListBlock?.editable && !iconListBlock?.draggable){
    return (
     
       <ul>
       {
        iconListBlock?.props?.items?.map((items,index)=>{
           return(
            <>
            <li className='listItems' key={index}>
              <DynamicIcons classes='iconList' name={items.icon || ''}/>
              <span className='textList'>{items.link}</span>
            </li>

            </>
           )
        })
       }
       </ul>
    
    )

  }

    const textStyles = {
    styling : {
      ...iconListBlock?.styles

    },

    classes : ` block-editor-${iconListBlock?.id} ${iconListBlock?.tailWindClasses} ${iconListBlock?.customClasses} cursor-default selected-child ${trackingClass} `

  }


  return (
    <>
        <Section id={iconListBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index} allStyles={textStyles}>
          <ul>
                 {
        iconListBlock?.props?.items?.map((items,index)=>(    
              <li className='listItems flc.ex' key={index}>
              <DynamicIcons classes='iconList' name={items.icon || ''}/>
              <span className='textList'>{items.text}</span>
            </li>
            
           )
        )
       }
       </ul>
        </Section>

    </>
  )
}
