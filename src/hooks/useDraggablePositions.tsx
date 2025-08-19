'use client';

import { useSettingType } from "@/contexts/settingsType";
import { DndContext, DragEndEvent, DragMoveEvent, useDndContext, useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useCallback, useEffect, useRef, useState } from "react";
import useElementPosiiton from "./useElementPosition";



interface UseDraggablePositionOptions {
  id: string; 
  cont: string;
  x : number;
  y : number;
  onPositionChange?: (newPos: { x: number; y: number }) => void;
  handleRef?: React.RefObject<HTMLElement>;

  containerWidth?: number; 
  containerHeight?: number;
  elementWidth?:number;
  elementHeight?:number;
}

interface DraggablePosition {
  x: number;
  y: number;
}

interface UseDraggablePositionReturn {
  nodeRef: (element: HTMLElement | null) => void; 
  dragHandleRef: React.Ref<HTMLElement>; 
  position: DraggablePosition; 
  transformStyle: React.CSSProperties; // CSS transform for visual dragging
  isDragging: boolean; // True if currently dragging
  attributes: any; // dnd-kit attributes for accessibility
  listeners: any; // dnd-kit event listeners for drag handle
}


export default function useDraggablePosition ({
  id, cont , x , y, onPositionChange, handleRef, containerWidth = Infinity, containerHeight= Infinity, elementWidth = 0, elementHeight = 0
}:UseDraggablePositionOptions): UseDraggablePositionReturn {
  const [position , setPosition] = useState<DraggablePosition>({x: 0, y: 0});
  const internalHandleRef = useRef<HTMLElement>(null);

  const {setDragDrop} = useSettingType()

  const actualHandleRef = handleRef || internalHandleRef;

  // const dndContext = useDndContext();
  const constrainPosition = (targetX: number, targetY: number): DraggablePosition => {
    const maxX = Math.max(0, containerWidth - elementWidth);
    const maxY = Math.max(0, containerHeight - elementHeight);
    return {
       x: Math.min(Math.max(0, targetX), maxX),
      y: Math.min(Math.max(0, targetY), maxY)
    };

  }




  // useEffect(() => {
  //   setPosition({ x: initialX, y: initialY });
  // }, [initialX, initialY]);

  const {attributes,
    listeners,
    setNodeRef, 
    setActivatorNodeRef,
    transform,
    isDragging} = useDraggable({
      id : id,
      
      data: {
      container : cont,
      currentX: x,
      currentY: y,
    },
    })

    useEffect(()=>{
      if(actualHandleRef?.current){
        setActivatorNodeRef(actualHandleRef.current)

      }
    }, [actualHandleRef, setActivatorNodeRef])

    

  //   const handleDragEnd = useCallback((event: DragEndEvent) => {
  //   const { delta, active } = event;

  //   // Ensure this specific draggable is the one that ended
  //   if (active.id === id) {
  //     setPosition((prevPosition) => ({
  //       x: prevPosition.x + delta.x,
  //       y: prevPosition.y + delta.y,
  //     }));
  //   }
  // }, [id]);

  useDndMonitor({
   onDragStart: useCallback((event:DragMoveEvent) => {
            setPosition({ x: 0, y: 0 }); 
            const {active} = event;
            if(active.data?.current?.container == 'settings-cont'){
              setDragDrop(true)
            }
        }, []),
    onDragMove: useCallback((event: DragMoveEvent) => {
    const { delta, active } = event;
    // console.log("Dragging in progress");
    
    if (active.id === id) {
      // console.log("Dragging in progress", delta);
     setPosition({ x: delta.x, y: delta.y });
    }
  }, [id]),
    onDragEnd: useCallback((event: DragEndEvent) => {
      const { delta, active } = event;
      
      

      if(active.data && active.data.current?.container == "settings-cont"){
        setDragDrop(false)

      }

      // Ensure this specific draggable is the one that ended
      if (active.id === id) {

        
        
        // setPosition((prevPosition) => {
        //   const newX= prevPosition.x + delta.x;
        //   const newY = prevPosition.y + delta.y;

        //   return constrainPosition(newX, newY);
        // });
        const finalX = x + delta.x;
        const finalY = y + delta.y;
        const constrainedFinalPosition = constrainPosition(finalX, finalY);

                // Inform the parent (BuilderBody) of the new settled position
        if (onPositionChange) {
          onPositionChange(constrainedFinalPosition);
        }

          setPosition({ x: 0, y: 0 });
      }
    }, [id,x, y, onPositionChange, containerWidth, containerHeight, elementWidth, elementHeight]) // Dependency array for the useCallback
  });

   const currentX = x + position.x;
    const currentY = y + position.y;
    const constrainedPosition = constrainPosition(currentX, currentY);

   const transformStyle: React.CSSProperties = isDragging && transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        cursor: 'grabbing',
    } : {
        cursor: 'default',
        transform: 'none' 
    };


  return {
    nodeRef: setNodeRef,
    dragHandleRef: setActivatorNodeRef, // Expose dnd-kit's activator ref for the handle
    position : {x, y},
    transformStyle,
    isDragging,
    attributes,
    listeners, // These are the listeners RETURNED by useDraggable, to be spread on the handle
  };



  

}