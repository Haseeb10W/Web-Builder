'use client';

import React, { useEffect, useState } from 'react'
import { Block, HeadingBlock} from '@/types/blocksSchema';
import Section from '@/components/builder/Section';
import useClassTracking from '@/hooks/useClassTrack';
import LevelMap from '@/lib/maps/levelmap';
import Link from 'next/link';


interface HeadingProps {
  block : Block,
  index : number,
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
  
}

export default function Heading({block, index, onDelete, onCopy}: HeadingProps) {

  const trackingClass = useClassTracking(block)
  // console.log(trackingClass)

  if(block.type !== 'heading'){
    return null;
  }

  const HeadBlock = block as HeadingBlock;

  
  
  
  if(!HeadBlock?.editable && !HeadBlock?.draggable){
    return (
    <Link href={HeadBlock?.link} className={`${HeadBlock?.link !== "" ? "block":"hidden"}`}><LevelMap  block={HeadBlock} trackingClass={trackingClass} /></Link>
    )

  }

  // console.log('BlockReader block ID:', block.id); 
  return (
    <Section id={HeadBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index}>
  <Link href={HeadBlock?.link} className={``}> <LevelMap  block={HeadBlock} trackingClass={trackingClass} /></Link>
    {/* <p key={HeadBlock?.id} style= {{
        ...HeadBlock?.styles

      }}
      className = {`${HeadBlock?.tailWindClasses} ${HeadBlock?.customClasses} cursor-default selected-child ${trackingClass}`} 

    >{HeadBlock && HeadBlock?.props?.text}</p> */}
    
    </Section>   
  )
}
