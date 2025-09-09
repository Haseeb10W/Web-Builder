'use client';

import { useDroppable } from '@dnd-kit/core';
import React, { useCallback } from 'react';

interface DropZoneProps {
  id: string;
  index: number;
  containerType?:string;
  isInline?: boolean;
  styles?: React.CSSProperties;
}

export default function DropZone({ id, index, containerType, isInline, styles }: DropZoneProps) {
  const { setNodeRef, isOver, active } = useDroppable({
    id: id,
    data: {
      type: 'dropzone',
      index: index,
      containerType : containerType
    }
  });

  const showOver = isOver && active && (
    active.data.current?.source === 'sidebar' || 
    active.data.current?.type === 'section'
  ) && active.data.current?.container !== 'settings-cont'

  // console.log( isOver)
  // console.log(active)
  // console.log(showOver)

  const baseShowOver = `bg-blue-200 border-0 border-dashed border-blue-400 rounded`
  const baseDefault = `border-blue-400 border-blue-400`

  const getDefaultClass = useCallback(() => {
    if (containerType === 'flex' && !active) {
      return `w-0 h-0 overflow-hidden ${baseDefault}` ;
    }else if (containerType === 'flex' && active && active.data.current?.container == 'settings-cont'){
      return `w-0 h-0 overflow-hidden ${baseDefault}` ;
    }
      else if(containerType == 'flex' && isInline && active  ){
      return `w-10 min-h-full  ${baseDefault}`
    }else if (containerType == 'flex' && isInline && active ){
      return `w-full h-3 ${baseDefault}`;
    }
    // return `w-full h-3 ${baseDefault}`;
  }, [active]);
  
  const showOverClass = ()=> {
    if(containerType === 'flex' && isInline) {
      // console.log('this run flex wala')
      return `flex-[0_0_30%]  ${baseShowOver} `
    }else if (containerType === 'flex' && !isInline){
      // console.log('this run without inline wala')
      return `min-h-8 w-full ${baseShowOver}`
    
    }
    // console.log('this run without flex wala')
    return `w-full min-h-8 ${baseShowOver}`
  }

  return (
    <div
      ref={setNodeRef}
      className={`drop-zone   ${
        showOver ? showOverClass()  : getDefaultClass()
      }`}
      style ={{
        // padding: showOver? '12px 0px': '0',
        
        margin: '0 0',
        zIndex: showOver? 10 : 1,
        pointerEvents : 'auto',
        ...styles,
        
      }}
    >
      {showOver && (
        <div className="flex items-center justify-center h-full">
          <span className="text-xs text-blue-600 font-medium"></span>
        </div>
      )}
    </div>
  );
}