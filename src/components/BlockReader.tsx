'use client';
import { blockMap } from '@/lib/maps/blocksMap';
import { Block, BlockType } from '@/types/blocksSchema';
import React from 'react'

interface BlockReaderProps  {
  
  props : Block
  index : number
   onDelete?: (id:string) => void;
   onCopy?: (id:string) => void;
}

export default function BlockReader({ props, index, onDelete, onCopy}: BlockReaderProps) {


  const Block = blockMap[props.type] || blockMap['text'];




  return (
    <Block block={props} index={index} onDelete={(id:string)=>onDelete?.(id)} onCopy={(id:string)=>onCopy?.(id)} ></Block>
  )
}
