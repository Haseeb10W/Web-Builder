import { Block, HeadingBlock } from '@/types/blocksSchema'
import React from 'react'

interface levelProps {
    block:HeadingBlock,
    classes?:string,
    headStyles?:React.CSSProperties,
    
}

export default function LevelMap({block, headStyles, classes}:levelProps) {
if(block.props.level === 'h1') return (
<h1 
    style= {{...headStyles}}   className = {`${classes} `} >{block.props.text}
</h1>)

if(block?.props?.level === 'h2') return (
<h2   
    style= {{...headStyles}}   className = {`${classes} `} >{block.props.text}
</h2>)

if(block.props.level === 'h3') return (
<h3 
    style= {{...headStyles}}   className = {`${classes} `}>{block.props.text}
</h3>)
if(block.props.level === 'h4') return (
<h4 
    style= {{...headStyles}}   className = {`${classes} `} >{block.props.text}
</h4>)
if(block.props.level === 'h5') return (
<h5  
    style= {{...headStyles}}   className = {`${classes} `}>{block.props.text}
</h5>)

if(block.props.level === 'h6') return (
<h6 
    style= {{...headStyles}}   className = {`${classes} `}>{block.props.text}
</h6>)                
}
