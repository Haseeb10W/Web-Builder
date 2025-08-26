"use client";
import React, { useEffect, useState } from "react";
import DynamicIcons from "../DynamicIcons";
import { useSettingType } from "@/contexts/settingsType";
import { settingFieldProps } from "@/types/settingsSchema";

export default function Image({props, change}:settingFieldProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { setOpenMedia } = useSettingType();
  const { mediaFilesApply, setMediaFilesApply} = useSettingType()

  useEffect(() => {
    setSelectedImage(props?.value || null);
  }, [props?.value]);

  const handledelete = (e: React.MouseEvent<HTMLSpanElement>) =>{
    e.stopPropagation();
    change?.('')
  }

  const handleImageSelect = () => {
    setOpenMedia(true)

    const mediaApply ={
      applyType: 'single' as  'single'| 'multiple',
      type : 'image' as  'image'| 'video',
      appliedData : [],

    }

    setMediaFilesApply(mediaApply)

  }

  return (
    <>
      <div className="mt-2">
        <h3 className="text-sm text-gray-600">{props?.label}</h3>
        <div className="w-full h-40 mt-2 bg-gray-200 flex items-center justify-center ">
          {selectedImage ? (
            <div className="relative group h-full w-full cursor-pointer" onClick={handleImageSelect} >
            <img
              src={selectedImage}
              alt="image"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 right-0 hidden group-hover:block">
              <span onClick={handledelete}><DynamicIcons name="delete" classes="w-6 h-6 bg-gray-200 p-1" /></span>
            </div>  
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
              <span><DynamicIcons name="add" classes="w-30 h-30 !text-gray-200/30 " /></span>
            </div> 
          </div>
          ) : (
            <span onClick={handleImageSelect}>
              <DynamicIcons name="addimg" classes="w-10 h-10" />
            </span>
          )}  

        </div>  
      </div>
    </>
  );
}
