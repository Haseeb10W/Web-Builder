'use client';

import BuilderBody from '@/components/builder/BuilderBody';
import BuilderHeader from '@/components/builder/BuilderHeader';
import BuilderSideBar from '@/components/builder/BuilderSideBar';
import DynamicIcons from '@/components/DynamicIcons';
import { SettingsContextProvider } from '@/contexts/settingsType';
import { useSideToggle } from '@/contexts/toggleSide';
import {siteData} from '@/data/siteData';
import { customDropzoneCollisionDetection } from '@/lib/builder/customCollisionDetection';
import { editSchema } from '@/types/editSchema';

import {  defaultDropAnimationSideEffects, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ClientDndContext = dynamic(() => import('@/components/ClientDndContext'), {
  ssr: false, 
  // loading: () => <p>Loading drag-and-drop features...</p>, // Optional: A loading state
});


interface DragElementData {
  type: string;
  label: string;
  icon: string;
  source: string;
}
export default function Builder() {

  type currentContentState = editSchema | null;
  const [activeElement, setActiveElement] = useState<DragElementData | null>(null);
  const [shouldAnimateBack, setShouldAnimateBack] = useState(true);

  const {toggleSide} = useSideToggle();
  const [pageData, setPageData] = useState<currentContentState>(null);
  const router = useParams();
  // const [editPopup, setEditPopup] = useState<boolean>(false);
  // const [popUpContent, setPopUpCotent] = useState<{id: string, title: string}>(); 
  const [screenSize, setScreenSize] = useState(0);
  const [ bodyWidth , setBodyWidth] = useState(0);
  
  

  useEffect(()=>{
    // Fetch Page Data
    const slug = router.slug;
    const postType = router.editType;
    

    if(!slug || !postType) {
      setPageData(null);
      return;
    }



    switch (postType) {
      case 'page':

        
        const data = siteData.pages.find(item=> item.slug === slug);
        if(data){
          setPageData({
            editType: postType,
            editData: data,
          });
          // console.log('Page Data:', data);
        }else{
          setPageData(null);
        }
        break;
      
      default:
        setPageData(null);
    }

  }, [])

  
  
  const handleDragStart = (event:DragStartEvent) => {
    
    const dragData = event.active.data.current ;
    if(dragData && typeof dragData === 'object' && 'type' in dragData && 'label' in dragData && 'icon' in dragData && 'source' in dragData) {
    setActiveElement(dragData as DragElementData);
    setShouldAnimateBack(true);
    }else{
      setActiveElement(null);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    // setActiveElement(null);
    const {active, over} = event;
    if(over?.id === 'renderer-dropzone' && active.data.current?.source === 'sidebar'){
      // setActiveElement(null);
      setShouldAnimateBack(false);
      // return
    }
    setTimeout(()=>{
      setActiveElement(null);
      setShouldAnimateBack(true)

    }, shouldAnimateBack ? 0 : 150)
    
    }
    const getDropAnimation = () => {
  if (!shouldAnimateBack) {
    return null; // No animation for successful drops
  }
  
  return {
    duration: 200,
    easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
  };
};

  //   const customDropAnimation = {
  //     duration: 150,
  //     easing: 'ease-out',
  // keyframes:({transform})=> [
  //   {
  //     opacity: 1,
  //     transform: transform.initial,
  //   },
  //   {
  //     opacity: 0,
  //     transform: `${transform.initial} scale(0.8)`,
  //   },
  // ],
  //   }

  return (
    <>
  <SettingsContextProvider>
  <ClientDndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} collisionDetection={customDropzoneCollisionDetection} >

    
    <div className="flex min-[1000px]:flex-row flex-col-reverse h-screen w-full bg-gray-100">
      <div className={`side  transition-[width] duration-200 min-[1000px]:h-full min-[1000px]:overflow-hidden ${toggleSide ? 'min-[1000px]:w-0 min-[1000px]:h-screen h-0  ': 'min-[1024px]:!w-1/5  min-[1000px]:w-[270px] z-999 w-full h-[200px] min-[1000px]:border-r border-y border-gray-300'}`} >
        <BuilderSideBar   />
      </div>
      <div className={`body-left  min-[1000px]:h-full transition-[width] duration-200  ${toggleSide  ? 'w-5/5 h-full ': 'min-[1024px]:w-4/5 w-5/5  h-[calc(100%-170px)]'}`}>
      <BuilderHeader  dataPage={pageData}    screenSize={screenSize} updateScreenSize={setScreenSize} bodyWidth={ bodyWidth } />
      <BuilderBody updateBodyWidth ={setBodyWidth} pageData={pageData} updateData={setPageData}  updateScreenSize={setScreenSize} rendererSize={screenSize} />
    
      </div>
      
      
    </div>

    <DragOverlay dropAnimation={null}>
        {activeElement ? (
          <div className="flex flex-col gap-2 px-4 bg-gray-100 py-3 items-center rounded-md shadow-lg opacity-80">
            <DynamicIcons name={activeElement.icon} classes="w-5 h-5" />
            <span className="text-[12px]">{activeElement.label}</span>
          </div>
        ) : null}
      </DragOverlay>
    </ClientDndContext>
    </SettingsContextProvider>
    </>
  )
}
