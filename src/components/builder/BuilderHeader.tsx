'use client';

import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import DynamicIcons from '../DynamicIcons';
import { useSideToggle } from '@/contexts/toggleSide';
import { editSchema, renderSchema } from '@/types/editSchema';
import { useSettingType } from '@/contexts/settingsType';
import Link from 'next/link';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/reduxRoot';
import { updateData } from '@/redux/preview/previewDataSlice';

interface BuilderHeaderPops {
  dataPage? : editSchema ;
  // openPageSettings? : Dispatch<SetStateAction<boolean>>;
  
  screenSize?: number;
  updateScreenSize?: (width: number) => void;
  bodyWidth?: number;
  

}

function BuilderHeader ({dataPage, screenSize = 0, updateScreenSize, bodyWidth=0}: BuilderHeaderPops) {

  const {toggleSide, setToggleSide, setPreviewData} = useSideToggle();
  const { setSettingType, setSettingPopUp, setOpenMedia, screenType, setScreenType} = useSettingType()
  const router = useRouter();
  const dispatchPreview = useAppDispatch();



  

  useEffect(()=>{
    // let typeGet: 'desktop' | 'tablet' | 'mobile' ;
    // if(screenSize > 960 || window.innerWidth > 960 ){
    //   typeGet = 'desktop'
    // }else if( window.innerWidth >500)
    //   typeGet = 'tablet'
    // else{
    //   typeGet = 'mobile'

    // }
    // setScreenType(typeGet)
    setScreenType('desktop')
    
    

  }, [])

  useEffect(()=>{
    if(bodyWidth > 960 && screenType == 'desktop'){
      
      if(updateScreenSize){
        updateScreenSize(bodyWidth);
      }
    }
  },[bodyWidth])
  
  const handleSettingPopUp = () => {
    if (setSettingPopUp) {
      setSettingPopUp( (prev) => !prev);
  }
  if(setSettingType){
    setSettingType( dataPage?.editData ? {id: dataPage?.editData?.id, title: dataPage?.editData?.title, type: dataPage?.editData?.kind } : undefined  )
  }


}

  const handleToggleChange = () =>{
    setToggleSide(!toggleSide);
  

  }

  useEffect(()=>{
    if(updateScreenSize){
      const width = window.innerWidth;
      if(screenType === 'mobile'){
      if (width > 425){
        updateScreenSize(425)

      }else {
        updateScreenSize(width)
      }
      

    }else if(screenType === 'tablet'){
      if(width > 768){
        updateScreenSize(768)
      }else{
        updateScreenSize(width)
      }

      
    }else if(screenType === 'desktop'){
      
      updateScreenSize(bodyWidth)
    }

    }
    
  },[screenType])
  


  const showActiveScreen = (screen:string):boolean =>{
    
    if(screen == screenType){
      return true
    }else{
      return false
    }
  }
  
  const showToggleIcon = useCallback(() =>{
    let icon
    if(!toggleSide && window.innerWidth >= 1000){
      icon = "panelRight"
      
    }
    else if(toggleSide && window.innerWidth >= 1000){
      icon = "panelLeft"
    }
    else if(!toggleSide && window.innerWidth <1000){
      icon = "panelbottomClose"
    }
    else{
      icon = "panelbottomOpen"
    }
    return icon
  } ,[toggleSide] )



  const goToPreview = ()=>{

    const data = dataPage;
    console.log(data)

    const dataSlug = data?.editData?.slug

    if(data){
      setPreviewData(data.editData);
      // dispatchPreview(updateData(data.editData))

    }
    
    router.push(`/preview/${dataSlug}`)

    // window.open(`/preview/${dataSlug}`, '_blank')

  }

  return (
    <div className={`h-10 w-full px-2 flex justify-between items-center  border-b border-b-gray-300  content-center bg-white`}
    
    >

      {/* Left Header */}
      <div className={'flex items-center h-full gap-2'}>
      <span className={`cursor-pointer`} onClick={handleToggleChange} >
        <DynamicIcons name={showToggleIcon()} classes={`hover:text-gray-700`} /></span>
      {/* Title Page */}
      <div className={`ml-2 px-3 bg-gray-200 rounded-lg cursor-default`}>

      
      <p className={`  py-0.5  max-w-40 overflow-hidden text-nowrap text-sm  `} title='Page Name'>
        <span>{dataPage?.editData?.title}</span>
      </p>
      </div>

      {/* Page settings */}
      <span className={`cursor-pointer`} onClick={handleSettingPopUp} title='Edit Page Settings'>
        <DynamicIcons name='settings' classes={`ml-auto hover:text-gray-700`} />

      </span>
      <button className="cursor-pointer p-1 bg-gray-200 px-2 text-sm rounded-lg" onClick={()=>setOpenMedia(prev => !prev)}>&times;</button>
      </div>

      {/* Center Header */}

      <div className={`flex h-9`}>
        <div className="tabs flex justify-center gap-1 text-center my-1 p-1 px-1 mx-2 bg-gray-200 rounded-lg" >
          <li className={`p-1  py-0.5 rounded-sm cursor-pointer hover:bg-white ${showActiveScreen('desktop') && 'bg-white'}` } title="View Big Screen Mode" onClick={()=>setScreenType('desktop') } >
          <DynamicIcons name='laptop' classes='h-4 w-4'></DynamicIcons >
          </li>
          <li className={`p-1 py-0.5 rounded-sm cursor-pointer hover:bg-white ${showActiveScreen('tablet') && 'bg-white'}`} title="View Tablet Mode" onClick={()=>setScreenType('tablet') }>
          <DynamicIcons name='tablet' classes='h-4 w-4 ' ></DynamicIcons >
          </li>
          <li className={`p-1 py-0.5 rounded-sm  cursor-pointer hover:bg-white ${showActiveScreen('mobile') && 'bg-white'}`} title="View Mobile Mode" onClick={()=>setScreenType('mobile') }>
          <DynamicIcons name='smartphone' classes='h-4 w-4'></DynamicIcons >
          </li>
        </div>





      </div>



      {/* Right Header */}

      <div className="flex gap-2">

        
      <div onClick={goToPreview} className='flex items-center px-2 py-1 rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300' title='Preview'>

         <DynamicIcons name='scanEye' classes='h-5 w-5 ' /> 
      </div>
      
      <div className='flex items-center gap-1 px-3 py-1 rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300'>
        <DynamicIcons name='save' classes='h-5 w-5 ' />
        <span className='text-sm min-[660px]:inline hidden'>Published</span>
      </div>
      </div>
      
    </div>
  )
}

export default BuilderHeader