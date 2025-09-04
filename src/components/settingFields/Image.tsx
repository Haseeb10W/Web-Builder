"use client";
import React, { useEffect, useState } from "react";
import DynamicIcons from "../DynamicIcons";
import { useSettingType } from "@/contexts/settingsType";
import { settingFieldProps } from "@/types/settingsSchema";
import { v4 as uuidv4 } from 'uuid';
import { mediaUrl } from "../../../config/apiConfig";
import ResponsiveComponents from "./ResponsiveComponents";

export default function Image({props, change}:settingFieldProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { setOpenMedia } = useSettingType();
  const { mediaFilesApply, setMediaFilesApply, fileApplyOn, setFileApplyOn} = useSettingType();
  const [idApply, setIdApply] = useState<string>('');

  const filePath = mediaUrl;

  useEffect(() => {
    if(props?.value !== ''){
      const fullPath = filePath + props?.value;
      setSelectedImage(fullPath);
    }else{
      setSelectedImage( null);
    }
    
    
  }, [props?.value]);

  useEffect(() => {

    if (fileApplyOn == true && mediaFilesApply && mediaFilesApply.appliedId == idApply  && mediaFilesApply.appliedData.length > 0) {
      const appliedImage = mediaFilesApply.appliedData[0].imagePath;
      // setSelectedImage(appliedImage);
      change?.(appliedImage);
      
      
      setMediaFilesApply(undefined);
      setFileApplyOn(false);
    }
  }, [fileApplyOn]); 

  const handledelete = (e: React.MouseEvent<HTMLSpanElement>) =>{
    // console.log()
    e.stopPropagation();
    // setSelectedImage(null);
    change?.('')
  }

  const handleImageSelect = () => {
    setOpenMedia(true)
    
    const id = uuidv4();

    setIdApply(id);
    const mediaApply = {
      applyType: 'single' as  'single'| 'multiple',
      type : 'image' as  'image'| 'video',
      appliedData : [],
      appliedId : id ,
      

    }

    setMediaFilesApply(mediaApply)
    setFileApplyOn
    

  }

  return (
    <>
      <div className="mt-2">

        <div className='flex gap-x-1.5'>
        <h3 className="text-sm text-gray-600">{props?.label}</h3>
        { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
        </div>

        
        <div className="w-full h-40 mt-2 bg-gray-200 flex items-center justify-center ">
          {selectedImage ? (
            <div className="relative group h-full w-full cursor-pointer" onClick={handleImageSelect} >
            <img
              src={selectedImage}
              alt="image"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 right-0 hidden group-hover:block z-99">
              <span onClick={handledelete}><DynamicIcons name="delete" classes="w-6 h-6 bg-gray-200 p-1" /></span>
            </div>  
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
              <span><DynamicIcons name="add" classes="w-30 h-30 !text-gray-200/30 " /></span>
            </div> 
          </div>
          ) : (
            <span onClick={handleImageSelect} className="cursor-pointer">
              <DynamicIcons name="addimg" classes="w-10 h-10" />
            </span>
          )}  

        </div>  
      </div>
    </>
  );
}
