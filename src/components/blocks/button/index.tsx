'use client'
import Section from '@/components/builder/Section';
import DynamicIcons from '@/components/DynamicIcons';
import { Block, ButtonBlock } from '@/types/blocksSchema';
import Link from 'next/link';
import React from 'react'


interface ButtonProps{
  block: Block;
  index : number;
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
}
export default function Button({block, index, onDelete, onCopy}:ButtonProps) {
    if(block.type !== 'button') return null;
    const ButtonBlock = block as ButtonBlock;
  //  console.log(ButtonBlock)
          if(!ButtonBlock?.editable && !ButtonBlock?.draggable){
    return (
     <Link href={ButtonBlock?.props?.link || " "} target={ButtonBlock?.props?.target || "_self"} className={`flex block-${ButtonBlock?.id} ${ButtonBlock?.tailWindClasses} ${ButtonBlock?.customClasses}`} style={{...ButtonBlock?.styles}}>
        
            {
                ButtonBlock?.props?.icon && (
                   <DynamicIcons name={ButtonBlock?.props?.icon} classes={`h-5 w-5`}/>
                )
            }
           <span>{ButtonBlock?.props?.text}</span>
        
      </Link>
       )

  }

  const buttonStyles = {
    styling : {
      ...ButtonBlock?.styles,
       

    },

    classes : `flex block-editor-${ButtonBlock?.id} ${ButtonBlock?.tailWindClasses} ${ButtonBlock?.customClasses} `

  }

  return (
    <>
     <Section id={ButtonBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index} allStyles={buttonStyles}>
             
         <Link href={ButtonBlock?.props?.link || ''} target={ButtonBlock?.props?.target || "_self"}  >
        
            {
                ButtonBlock?.props?.icon && (
                   <DynamicIcons name={ButtonBlock?.props?.icon}  classes={`h-5 w-5`}/>
                )
            }
           <span>{ButtonBlock?.props?.text || 'Button'} </span>
        
      </Link>
     
         </Section>
    </>
  )
}
