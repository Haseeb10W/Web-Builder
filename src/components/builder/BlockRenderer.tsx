import { Block } from '@/types/blocksSchema';
import { editSchema } from '@/types/editSchema'
import React, { useEffect} from 'react'
import BlockReader from '../BlockReader';
import {  SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DropZone from './DropZone';

import { deleteBlockHandler, duplicateBlockHandler } from '@/lib/builder/blockHandlers';
import {  loadStyleForEditor } from '@/lib/builder/renderHandling';
import { useSettingType } from '@/contexts/settingsType';

interface BlockRendererProps {
  pageData?: editSchema;
  onBlockReorder?: (newBlocks : Block[])=> void;
  onSidebarDrop?: (newBlock: Block, insertIndex?: number) => void;
  updateData?: (data: editSchema) => void;
}

export default function BlockRenderer({pageData, updateData, onBlockReorder, onSidebarDrop}: BlockRendererProps) {
  // console.log(pageData)
  const {screenType} = useSettingType()

  

  if(!pageData?.editData) return [];
  let blocks : Block[] = [];
  
  switch (pageData.editType){
    case 'page':
    case 'header':
    case 'footer':
    case 'post':
      blocks = pageData.editData.content;
      break;
    default:
      return [];
  }

  const handleBlockDelete = (id:string)=>{
    // console.log('delete')
    // console.log(id)
    // const block = findBlockOverall(pageData, id);
    // console.log(block)
    deleteBlockHandler(id, pageData, updateData)

  }

  const handleBlockCopy = (id:string)=>{
    // console.log('copy')
    // console.log(id)
    duplicateBlockHandler(id, pageData, updateData);
};
  

    useEffect(()=>{
      loadStyleForEditor(pageData, screenType);

    }, [pageData, screenType])


  

  return (
    
    <SortableContext items={blocks?.map(block=>block.id)} strategy={verticalListSortingStrategy}>
      <DropZone id="dropzone-0" index={0} />
   {blocks?.map((block, idx)=>(
    <React.Fragment key={block.id}>
    <BlockReader  index={idx}  props={block} onDelete={(id)=>handleBlockDelete(id)} onCopy={(id)=>handleBlockCopy(id)}  />
    <DropZone id={`dropzone-${idx + 1}`} index={idx + 1} />
    </React.Fragment>
  ))}
  </SortableContext>
  
  )
}
