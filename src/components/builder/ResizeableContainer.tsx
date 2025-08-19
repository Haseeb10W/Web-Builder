'use client';

import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizeableContainerProps {
  id: string,
  initialWidth?: number;
  initialHeight?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  classes?: string;
  children?: React.ReactNode;
  top?: number,
  left?: number,
  style? : React.CSSProperties,
  isDragging?: boolean,
  onPositionChange?: (position: { left: number; top: number }) => void;
  // nodeRef?: (element: HTMLElement | null)=>void;

}



const ResizeableContainer = forwardRef<HTMLDivElement, ResizeableContainerProps>(({ 
  id, 
  
  initialWidth = 300, 
  initialHeight = 200, 
  minWidth = 250, 
  minHeight = 300, 
  maxWidth = 800, 
  maxHeight = 600, 
  classes = '',
  top,
  left,
  style,
  isDragging,
  // nodeRef,
  onPositionChange,
  children
}, ref:Ref<HTMLDivElement> )=>{

    const [size, setSize] = React.useState({
      width: initialWidth,
      height: initialHeight
    });

    const rootDivRef = useRef<HTMLDivElement>(null);

  
  // useImperativeHandle(ref, () => internalResizableRef.current as HTMLDivElement, []);

  const resizableBoxComponentRef = useRef<ResizableBox>(null);

  // Use useImperativeHandle to expose the *actual DOM node* of the ResizableBox
  // to the ref provided by the parent (which is dnd-kit's setNodeRef).
  
  useImperativeHandle(ref, () => rootDivRef.current!, []);

    const onResize : ResizableBoxProps['onResize'] = (event, { node, size: newSize, handle }) => {
      const widthDiff = newSize.width - size.width;
      if (handle === 'sw' || handle === 'nw') {
    // Move left position by the width difference to keep right edge fixed
    if (onPositionChange) {
      onPositionChange({
        left: (left || 0) - widthDiff,
        top: top || 0
      });
    }
  }
      
   
    setSize(newSize);
    // console.log(`Resized to: ${newSize.width}x${newSize.height}`);
  };
  return (
    <ResizableBox 
      ref={resizableBoxComponentRef}
      width={size.width}
      height={size.height}
      minConstraints={[minWidth, minHeight]} 
      maxConstraints={[maxWidth, maxHeight]} 
      resizeHandles={['se', 'sw', 'ne', 'nw']} 
      onResize={onResize} 
      className={`${classes} ${isDragging ? 'dragging': ''} `}
      style={{
        top: top,
        left: left,
        position: 'absolute',
        ...style
      }}
    
    >
      <div ref={rootDivRef} className="content w-full h-full" style={{ flex: 1 }}>
        {children}
      </div>
    </ResizableBox>
  )
}
)

export default ResizeableContainer;