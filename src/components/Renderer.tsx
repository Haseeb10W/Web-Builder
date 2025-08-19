'use client';

import { editSchema } from '@/types/editSchema';
import { useDroppable } from '@dnd-kit/core';
import React, { forwardRef } from 'react'

interface RendererProps {
  header?: React.ReactNode;
  children?:  React.ReactNode;
  footer?: React.ReactNode;
  rendererRef: React.Ref<HTMLDivElement>;
  ref?: React.Ref<HTMLDivElement>;
  classes?: string;
  rendererWidth?: number;
  renderData?: editSchema;
  onElementAdd?: (element: any) => void; 
  isDropAnimating?: boolean;

}

export const  Renderer = forwardRef<HTMLDivElement, RendererProps>(({ header, children, footer, rendererRef, classes = '', rendererWidth = 0, renderData, isDropAnimating=false }, ref)=> {

  const {setNodeRef, isOver, active} = useDroppable({
    id: 'renderer-dropzone'
    
  });
  const shouldShowOverEffect = isOver && active && (
    active.data.current?.source === 'sidebar' || 
    active.data.current?.type === 'section'
  );


  return (
    
    <div ref={rendererRef } className={`renderer-container  bg-white h-full mx-auto border-l border-r  border-gray-200 shadow-lg overflow-y-auto `} style={{ width: rendererWidth ? `${rendererWidth}px` : '100%' }}>
      {/* <div className={`pb-10`}> */}
      
      {header && <div className="renderer-header">{header}</div>}
      <div  ref={ (node)=>{
        setNodeRef(node); 
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref && typeof ref === 'object') {
          ref.current = node;
        }
      }} className={`${classes}   min-h-full w-full ${shouldShowOverEffect  ? 'bg-blue-50 border-2 border-dashed border-blue-300': ''} ${isDropAnimating ? 'drop-success': ''}`} data-type={renderData?.editType} >
        <div className={`pb-10`}>
        {children}
        </div>
      </div>
      {footer && <div className="renderer-footer">{footer}</div>}
      {/* </div> */}
    </div>
  )
});
