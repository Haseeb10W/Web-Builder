
import DynamicIcons from '@/components/DynamicIcons';
import { useSettingType } from '@/contexts/settingsType';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react'

interface SectionProps{
  children : ReactNode,
  id : string,
  index: number;
  onDelete?: (id:string)=>void;
  onCopy?: (id:string)=>void;
  allStyles?: {[key:string]: any};

}

export default function Section({children, id, index, onDelete, onCopy, allStyles}:SectionProps) {
  // console.log('Section props:', { id, index });
  // console.log(index)
  
  const {justDroppedId, setJustDroppedId, setSettingPopUp} = useSettingType();

  const isJustDropped = justDroppedId === id;

  const sortableResult = useSortable({
    id : id,
    data : {
      type : 'section',
      index : index
    },
   
  });
  
  

  
  // console.log('Sortable result:', sortableResult);
    const {attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging} = sortableResult;

    useEffect(()=>{
      
       if(isDragging){
      setJustDroppedId(null)
    }

  //  console.log(justDropped)

  }, [ isDragging , setJustDroppedId ])

    const styles = {
      transform: CSS.Transform.toString(transform),
      transition : isDragging ? 'none' : transition,
      opacity: isDragging ? 0.5 : 1,
      zIndex : isDragging ? 1000 : 2,
      cursor: isDragging ? 'grabbing' : 'grab',
      ...allStyles?.styling
    }
 
    const handleBlockDelete = (id:string)=>{
      setSettingPopUp(false);
      onDelete?.(id)

    }



  return (
    <>

    <div  ref={setNodeRef} id={allStyles?.cssId} style={{...styles, ...allStyles?.styling}} className={` flex-child group relative    ${isJustDropped && ''}  section-editor ${allStyles?.classes}  `   }  >
      

      {children}

    <span ref={setActivatorNodeRef}  
    className={` group-hover:block  group-hover:border group-hover:border-solid group-hover:border-blue-600/60 absolute top-0 w-full h-full  cursor-grab  ${isJustDropped ? ' border border-dashed  border-blue-600/40 hover:border-solid': 'hidden'} `} 
     {...attributes} {...listeners} >
          {/* <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs pointer-events-none">
          ⋮⋮ 
        </span> */}
                </span>
      
      {
      isJustDropped && ( 
        <div className={`absolute !top-[1px] right-[1px] px-2  h-5 z-999 bg-gray-300 flex gap-2 items-center `}>
          <span className={`cursor-pointer `} onClick={()=>handleBlockDelete(id)}>
            <DynamicIcons name="trash" classes={`w-3 h-3 text-black hover:text-gray-700`}  />
            
          </span>

        <span className={`cursor-pointer `} onClick={()=>onCopy?.(id)}>
          <DynamicIcons name="copy" classes={`w-4 h-4 text-black hover:text-gray-700`}  />
        </span>
          
        </div>
      )
    }

    </div>
    

    </>
  )
}
