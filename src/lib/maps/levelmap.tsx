import { Block, HeadingBlock } from '@/types/blocksSchema'
import React from 'react'

interface levelProps {
    block:HeadingBlock,
    trackingClass:string
}

export default function LevelMap({block,trackingClass}:levelProps) {
if(block.props.level === 'h1') return (
<h1 key={block?.id}  
    style= {{...block?.styles}}      
    className = {`${block?.tailWindClasses} ${block?.customClasses} cursor-default selected-child ${trackingClass}`} >{block.props.text}
</h1>)

if(block?.props?.level === 'h2') return (
<h2 key={block?.id}   
    style= {{...block?.styles}}      
    className = {`${block?.tailWindClasses} ${block?.customClasses} cursor-default selected-child ${trackingClass}`} >{block.props.text}
</h2>)

if(block.props.level === 'h3') return (
<h3 key={block?.id} 
    style= {{...block?.styles}}      
    className = {`${block?.tailWindClasses} ${block?.customClasses} cursor-default selected-child ${trackingClass}`}>{block.props.text}
</h3>)
if(block.props.level === 'h4') return (
<h4 key={block?.id} 
    style= {{...block?.styles}}      
    className = {`${block?.tailWindClasses} ${block?.customClasses} cursor-default selected-child ${trackingClass}`}>{block.props.text}
</h4>)
if(block.props.level === 'h5') return (
<h5 key={block?.id} 
    style= {{...block?.styles}}      
    className = {`${block?.tailWindClasses} ${block?.customClasses} cursor-default selected-child ${trackingClass}`}>{block.props.text}
</h5>)

if(block.props.level === 'h6') return (
<h6 key={block?.id} 
    style= {{...block?.styles}}      
    className = {`${block?.tailWindClasses} ${block?.customClasses} cursor-default selected-child ${trackingClass}`}>{block.props.text}
</h6>)                
}
