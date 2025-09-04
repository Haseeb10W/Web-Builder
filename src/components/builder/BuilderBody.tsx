'use client';
import { editSchema } from '@/types/editSchema';
import React, { useCallback, useEffect, useState } from 'react'
import ResizeableContainer from './ResizeableContainer';
import useContainerDimensions from '@/hooks/useContainerDeminsions';
import { Block} from '@/types/blocksSchema'; 
import { v4 as uuidv4 } from 'uuid';
import useDraggablePosition from '@/hooks/useDraggablePositions';
import { Capitalize } from '@/lib/stringFunctions';
import {Renderer} from '../Renderer';
import { DragEndEvent, DragOverlay, DragStartEvent, useDndMonitor } from '@dnd-kit/core';
import BlockReader from '../BlockReader';
import BlockRenderer from './BlockRenderer';
import { blockReorderOnDragging, dragStartOverlay, indexFinderReordering, sideBarDropAndAdd, updateFlexContainer } from '@/lib/builder/drop&dragHandlers';
import { DragEndHandler } from '@/lib/builder/renderDragEndHandler';
import BlockSettings from './blockSettings';
import { useSettingType } from '@/contexts/settingsType';
import Media from '../clientSide/media';
import { useSideToggle } from '@/contexts/toggleSide';

interface BuilderBodyProps {
  pageData?: editSchema;
  updateData?: (data: editSchema) => void;
  // popUpContent?:  { id: string; title: string; } | undefined;
 
  updateBodyWidth?: (width: number) => void;
  updateScreenSize?:(width: number) =>void;
  rendererSize?: number
}



export default function BuilderBody({pageData, updateData,  updateBodyWidth, updateScreenSize, rendererSize=0}: BuilderBodyProps) {
  const [containerRef, containerDimensions] = useContainerDimensions();
  const [screenRef, screenDimensions] = useContainerDimensions();
   const {toggleSide} = useSideToggle();

  const [isDropAnimating, setIsDropAnimating] = useState(false);

  const [resize_id] = useState(() => uuidv4());
  const [panelPosition, setPanelPosition] = useState({ x: 0, y: 50 });
  const [activeId, setActiveId] = useState<string | null >(null);
  const [activeBlock, setActiveBlock] = useState<Block | null >(null)
  const {settingType, setSettingType, settingPopUp, setSettingPopUp, setJustDroppedId, openMedia, setOpenMedia, setMediaFilesApply} = useSettingType()

  const handleBlockReorder = useCallback((newBlocks: Block[]) => {
    blockReorderOnDragging(newBlocks, pageData, updateData)
  
}, [pageData]);

//  Drag end handler for block reordering the Elements
const handleBlockDragEnd = useCallback((event: DragEndEvent) => {
  
    const newBlocks = indexFinderReordering(event, pageData)
    if (newBlocks) {
      
      handleBlockReorder(newBlocks);
    }
  // }
}, [pageData, handleBlockReorder]);
  

// Side Bar Drop Elements
const handleSidebarDrop = useCallback((newBlock: Block, insertIndex?: number) => {
   sideBarDropAndAdd(pageData, updateData, insertIndex, newBlock)
  
}, [pageData]);


// DragOver the Renderer Already Elements visual Effect of moving and live Positioning

  const handleDragStart = useCallback((event:DragStartEvent)=>{
    dragStartOverlay(event, pageData, setActiveId, setActiveBlock)

  }, [pageData])

  const handleDraggablePanelPositionChange = useCallback((newPos: { x: number; y: number }) => {
    setPanelPosition(newPos);
  }, []);

  

  useDndMonitor({

    onDragStart: handleDragStart,
    onDragEnd : (event : DragEndEvent) =>{
      DragEndHandler(event, 
        pageData, 
        updateData, 
        handleBlockDragEnd, 
        handleSidebarDrop, 
        handleBlockReorder, 
        setIsDropAnimating, 
        updateFlexContainer, 
        setJustDroppedId, 
        setSettingType,
        setSettingPopUp,

      
      
      )
      
    }
  })

  const {
    nodeRef : dndKitNodeRef,
    dragHandleRef,
    position,
    transformStyle,
    isDragging,
    attributes,
    listeners,

  }= useDraggablePosition({
    id: resize_id,
    cont : 'settings-cont',
    x : panelPosition.x > 0 ? panelPosition.x : containerDimensions.width - 330, 
    y : panelPosition.y,
    onPositionChange : handleDraggablePanelPositionChange,
    containerWidth : containerDimensions.width,
    containerHeight : containerDimensions.height,
    elementWidth: 300,
    elementHeight: 450,

  })

  const combinedRefs = useCallback(
    (node: HTMLDivElement | null) => {
      
      dndKitNodeRef(node);
    },
    [dndKitNodeRef] 
  );

  useEffect(()=>{
    // console.log(containerDimensions.width)
    if (updateBodyWidth && containerDimensions.width) {
      updateBodyWidth(containerDimensions.width);
    }

    if(updateScreenSize && containerDimensions.width && rendererSize == 0 ){
      updateScreenSize(containerDimensions.width)
    }

  },[containerDimensions])

  const handleCloseMedia = ()=>{
    setOpenMedia(false)
    setMediaFilesApply(undefined)
  }

  useEffect(()=>{
  console.log(pageData)
  },[pageData])
  


  return (
    <>
    <div ref={containerRef} className={`w-full h-[calc(100%-40px)] relative overflow-hidden bg-gray-300 z-33`}>
      
      <Renderer  rendererRef={screenRef} rendererWidth={rendererSize} renderData={pageData} isDropAnimating={isDropAnimating}>
        <BlockRenderer pageData={pageData} updateData={updateData} onBlockReorder={handleBlockReorder} onSidebarDrop={handleSidebarDrop}/>
      </Renderer>     



      {/* Popup of Editing*/}


{
  settingPopUp && (

    <ResizeableContainer
    id={resize_id}
    ref={combinedRefs}
    top = {position.y}
    left = {position.x}
    style= {transformStyle}
    isDragging={isDragging}
    onPositionChange={(newPos) => {
    // Update position state when resizing from left handles
    setPanelPosition({ x: newPos.left, y: newPos.top });
  }}
    maxHeight={containerDimensions.height -20} maxWidth={containerDimensions.width > 800 ? 500 : containerDimensions.width - 40} initialWidth={300} initialHeight={450}
      classes ={` z-99 bg-white rounded-lg border border-gray-200 shadow-lg`}
    >

      <span
              ref={dragHandleRef} 
              className="drag-handle absolute top-0 left-3/12 " 
              style={{
                height: '30px',
                width: '50%',
                cursor: 'move', 
              }}
              {...attributes}
              {...listeners} 
            ></span>
            <span 
            className={`text-2xl font-extrabold absolute top-0 cursor-pointer text-gray-500 hover:text-gray-800 transfrom hover:scale-110 transition-transform duration-150 right-1.5`} 
            onClick={()=>setSettingPopUp?.(false)}
            > &times;</span>
        <div className="cont-title-cross flex text-center justify-center w-full  py-2">

          <span className={` text-base  justify-center `}>Edit {Capitalize(settingType? settingType.title : '')}</span>
          
        </div>
        <BlockSettings data={pageData} updateData={updateData}  />



    </ResizeableContainer>

  )
}


    <DragOverlay>
      {activeId && activeBlock ? (
        <div className="opacity-90 transform  shadow-2xl border-2 border-blue-400 rounded bg-white">
          <BlockReader props={activeBlock} index={-1} />
        </div>
        ) : null}
      </DragOverlay>
    

    </div>
    
    {
      openMedia && (
        <div className={'fixed flex items-center z-999 top-0 left-0 bg-gray-500/40 w-full h-full'}>
          <div className={`bg-white w-[95%] relative h-[95%] m-auto rounded-sm`}>
            <Media />
            <span className={'absolute !top-0 right-1.5 text-4xl font-bold cursor-pointer text-gray-700/80 transform hover:rotate-90 duration-200 hover:scale-110'} onClick={handleCloseMedia}>&times;</span>
          </div>
        
        </div>
      )
    }


    </>
  )
}
