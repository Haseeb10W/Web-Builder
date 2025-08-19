import { useDraggable } from '@dnd-kit/core';
import React from 'react';
import DynamicIcons from '../DynamicIcons';

interface DraggableElementsProps {
  element: {[key:string]: any};
  index: number;


}


export default function DraggableElement({element, index}:DraggableElementsProps) {
  const {attributes, listeners, setNodeRef, isDragging} = useDraggable({
    id: `draggable-element-${element.type}-${index}`,
    data: {
      type: element.type,
      label: element.label,
      icon: element.icon,
      source: 'sidebar'
    }
  })
  return (
    <li ref={setNodeRef} {...listeners} {...attributes} className={`flex flex-col gap-2  px-4 bg-gray-100     py-3 w-5/11 items-center   hover:bg-gray-200  rounded-md transition-colors ${isDragging ? 'opacity-50 scale-95 cursor-move' : 'opacity-100 scale-100 cursor-pointer'} `} >
      <DynamicIcons name={element.icon} classes= "w-5 h-5" />
      
      <span className="text-[12px]">{element.label}</span>
    </li>
  )
}
