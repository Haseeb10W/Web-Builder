'use client'
import Section from '@/components/builder/Section';
import DynamicIcons from '@/components/DynamicIcons';
import { Block, ImageBlock } from '@/types/blocksSchema';
import Link from 'next/link';
import React from 'react'

interface ImageProps{
  block: Block;
  index : number;
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
}
export default function Image({block, index, onDelete, onCopy}:ImageProps) {
    if(block.type !== 'image') return null;
    const ImageBlock = block as ImageBlock;

      if(!ImageBlock?.editable && !ImageBlock?.draggable){
    return (
     <img 
        src={ImageBlock?.props.src || "/placeholder.png"}
        alt={ImageBlock?.props.alt || "Image"}
        width={ImageBlock?.props.width || 400}
        height={ImageBlock?.props.height || 500}
        className={` block-${ImageBlock?.id}   ${ImageBlock?.customClasses} ${ImageBlock?.tailWindClasses} rounded-lg`}
      />
      
       )

  }
  return (
    <>
    <Section id={ImageBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index}>
        {ImageBlock.props.src ? (
    <div className='flex justify-center'>    
        <Link href={ImageBlock?.link} ><img
        src={ImageBlock?.props.src || "/placeholder.png"}
        alt={ImageBlock?.props.alt || "Image"}
        width={ImageBlock?.props.width || 400}
        height={ImageBlock?.props.height || 500}
        className={`block-${ImageBlock?.id}  ${ImageBlock?.tailWindClasses} ${ImageBlock?.customClasses}`}
      /></Link> 
      </div>
            ):(
                <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
                    <DynamicIcons name="moMedia" classes={`w-10 h-10 text-gray-800`} />
                </div>
            )
        }

    </Section>
    </>
  )
}
