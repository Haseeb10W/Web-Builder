"use client";

import React, { useEffect, useState } from "react";
import DynamicIcons from "../DynamicIcons";
import { useSettingType } from "@/contexts/settingsType";
import MediaUploads from "./mediaUploads";
import { API } from "../../../config/apiConfig";
import ShowMedia from "./showMedia";
import { iconMap } from "@/lib/maps/iconMap";


export default function Media() {
  const [tabOpen, setTabOpen] = useState("media");
  const [uploadMediaFiles, setUploadMediaFiles ] = useState<any[] >([])

  const [mediaFiles, setMediaFiles] = useState<any[]>([]);
  const { mediaFilesApply, setMediaFilesApply, setFileApplyOn}  = useSettingType()
  
  const icon = iconMap;
  // console.log("icon", icon)
  
  const {setOpenMedia} = useSettingType()

  const tabsData = [
    { label: "Media", value: "media" },
    { label: "Upload Media", value: "upload" },
    { label: "Icons", value: "icons" },
  ];

  const handleTabChange = (value: string) => {
    setTabOpen(value);

  };

   useEffect(()=>{

    if(tabOpen == 'media'){
      setUploadMediaFiles([])
      getMediaFiles()
    }
    


  }, [tabOpen])



  const getMediaFiles = async ()=>{
    try{
      const response = await fetch( API.media.getFiles);

      if (!response.ok) {
        throw new Error('Failed to fetch media files');
      }

      const result = await response.json();
      if( result.success){
        setMediaFiles(result.data)
        // console.log(result.data)

      }

    }catch(err){

    }
  }
  // useEffect(()=>{

  //   if(openMedia == false){
  //     setUploadMediaFiles([])
  //     setFileDragging(false)
  //     setTabOpen('media')
  //   }


  // },[openMedia])

  const handleCancelation = ()=>{
    if(tabOpen == "upload"){
      setUploadMediaFiles([])
    }

    if(tabOpen == 'media' && mediaFilesApply && mediaFilesApply?.appliedData?.length > 0){
      const fullMediaApply = {...mediaFilesApply};
      fullMediaApply.appliedData = []
      setMediaFilesApply(fullMediaApply)
    }
    

  }

  const handleUpdatation = () => {
    
    if(tabOpen  == "upload" ){
      handleFileUploads();
       
    }

    if( tabOpen == 'media' && mediaFilesApply && mediaFilesApply?.appliedData?.length > 0){
      const fullMediaApply = {...mediaFilesApply};
      setMediaFilesApply(fullMediaApply)
      setFileApplyOn(true)
      setOpenMedia(false)
    }

  }

  const handleFileUploads = () => {
    const formData = new FormData();

    uploadMediaFiles.forEach((file, index) => {

      formData.append(`file-${index}`, file.fullFile);

      formData.append(`properties-${index}`, JSON.stringify(file.properties));




    });

    uploadFileRequest(formData);






  }

  const uploadFileRequest = async (formData: FormData) => {
    try{

      const response = await fetch( API.media.upload, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload files');
      }

      const result = await response.json();
      if( result.success){
        setTabOpen('media')
        setUploadMediaFiles([])

      }
      
    }catch(err){
      console.error("Error uploading files:", err);
    }
  }

  

  return (
    <>
      <div
        className={`w-full h-full  overflow-hidden scroll-bar py-3 `}
      >
        {/* tabs & Save */}
          <div className={` flex flex-col-reverse sm:flex-row sm:justify-between border-b border-gray-400/50 sm:mx-6 `}>
          {/* tabs */}
          <div>
            <ul className="tabs flex gap-3 py-1 pl-3">
              {tabsData.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm py-1 px-2 cursor-pointer ${
                  tabOpen === item.value ? "text-black" : "text-gray-500"
                  }`}
                  onClick={()=>handleTabChange(item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>  
            {/* sabe-buttons */}

            <div className={`pl-6  sm:text-end sm:pr-6 `}>

              {
                ( ( tabOpen == 'upload' && uploadMediaFiles?.length > 0) || (tabOpen == 'media' && mediaFilesApply && mediaFilesApply?.appliedData?.length > 0) ) && (
                  <button className={`inline-block text-sm py-1 px-3 rounded-sm shadow-sm text-white bg-gray-500 hover:bg-gray-600 cursor-pointer mr-2 `} onClick={handleCancelation}>
                    Cancel
                  </button>

                )

              }
              
              <button className={`inline-block text-sm py-1 px-3 rounded-sm shadow-sm text-white
                ${((tabOpen == 'upload' && uploadMediaFiles?.length == 0) || ( tabOpen == 'media' && mediaFilesApply && mediaFilesApply?.appliedData.length == 0 ) ) ?  'bg-gray-400/70 cursor-not-allowed': 'bg-gray-500 hover:bg-gray-600 cursor-pointer '}   ` } disabled={ ((tabOpen == 'upload' && uploadMediaFiles?.length == 0) || ( tabOpen == 'media' && mediaFilesApply && mediaFilesApply?.appliedData.length == 0 ) ) }   
                onClick={handleUpdatation}
                
                >
              {tabOpen == 'media' && 'Apply' || tabOpen == 'upload' && "Upload" || tabOpen == 'icons' && "Select" }
              </button>

            </div>
          </div>
        {/* Media */}
        <div className={`py-4 w-full overflow-y-auto overflow-x-hidden `} style={{
          height: `calc(100% - 25px)`
        }}>

        {
          tabOpen == 'media' && (
            <div className="media w-full h-full">

              <ShowMedia mediaFiles={mediaFiles} setMediaFiles={setMediaFiles}   />

            </div>

          )

        }
          

        {/* Media Uploads */}

        { 
          tabOpen == 'upload'  && (
             <MediaUploads uploadMediaFiles={uploadMediaFiles} setUploadMediaFiles={setUploadMediaFiles} />


          )
        }


        {  tabOpen == 'icons' && (
          <>
        <div className="grid grid-cols-15 px-5">
         {Object.keys(icon).map((key) => {
           return (
             <DynamicIcons key={key} name={key} classes="w-6 h-6 m-2 hover:text-gray-500 cursor-pointer " />
           );
         })}
          </div>
          </>
        )}
        
        </div>
      </div>
    </>
  );
}
