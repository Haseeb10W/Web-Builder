'use client';

import BlockReader from '@/components/BlockReader';
import DropZone from '@/components/builder/DropZone';
import Section from '@/components/builder/Section';
import { Block, ContainerBlock } from '@/types/blocksSchema';
import { horizontalListSortingStrategy, rectSortingStrategy, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React from 'react'

interface FlexProps{
  block: Block;
  index : number;
  onDelete?: (id:string) => void;
  onCopy?:(id:string)=>void;
}

export default function FlexBox({block, index, onDelete, onCopy}:FlexProps) {

  

  if(block.type !== 'flex') return null;
  const flexBlock = block as ContainerBlock;
  const {children = [], props} = flexBlock;

  const flexDirection =  props?.direction || 'row';
  const gap = props?.gap || '10px';
  const strategy = flexDirection === 'row' ? horizontalListSortingStrategy : verticalListSortingStrategy;

  // const strategy = rectSortingStrategy ;

   const isHorizontalFlex = flexDirection === 'row';
  
  if(!flexBlock?.editable && !flexBlock?.draggable){
    return (
      <div style={{
        display: 'flex',
        flexDirection,
        gap,
        flexWrap : "wrap",
        ...flexBlock?.styles
      }}
      className={`block-${flexBlock?.id} ${flexBlock?.tailWindClasses} relative ${flexBlock?.customClasses}`}>
        {children.map((child, idx) => (
          <BlockReader key={child.id} props={child} index={idx} />
        ))}
      </div>

    )
  }


  const flexStyles = {
    styling : {
      ...flexBlock?.styles,
        display: 'flex',
        flexDirection,
        gap : '0px',
        flexWrap : 'wrap',
        justifyContent : 'flex-start',
        minHeight: children.length === 0 ? '100px' : '150px',
        border: children.length === 0 ? '2px dashed #ccc' : 'none',

    },

    classes : `flex-initial relative   block-editor-${flexBlock?.id} ${flexBlock?.tailWindClasses} ${flexBlock?.customClasses} `

  }



  return (
    <Section id={flexBlock.id} index={index} onDelete={(id)=>onDelete?.(id)} onCopy={onCopy} allStyles={flexStyles}>
      {/* <div style={{
        ...flexBlock?.styles,
        display: 'flex',
        flexDirection,
        gap,
        flexWrap : 'wrap',
        justifyContent : 'flex-start',
        minHeight: children.length === 0 ? '100px' : '300',
        border: children.length === 0 ? '2px dashed #ccc' : 'none',

        
      }}
      className={`relative   block-editor-${flexBlock?.id} ${flexBlock?.tailWindClasses} ${flexBlock?.customClasses} `}> */}
        
        <SortableContext items={children.map(child => child.id)} strategy={strategy}>
          {
            children.length ==0 ? (
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <DropZone
                  id={`flex-dropzone-${flexBlock.id}-0`}
                  index={0}
                  
                  isInline={isHorizontalFlex}
                  styles={{ width: '100%', height: '100%' }}
                  
                />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm pointer-events-none">
                  Drop blocks here
                </div>
              </div>
            ) :(
          <>
          <DropZone id={`flex-dropzone-${flexBlock.id}-0`} index={0} containerType='flex' isInline={isHorizontalFlex}/>
          {children.map((child, idx) => (
            <React.Fragment key={child.id}>
              <BlockReader props={child} index={idx} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)}/>
              <DropZone id={`flex-dropzone-${flexBlock.id}-${idx + 1}`} index={idx + 1} containerType='flex' isInline={isHorizontalFlex} />
            </React.Fragment>
          ))}
          </>
        ) }
        </SortableContext>

        
      {/* </div> */}
    </Section>
  )
}
