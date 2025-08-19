"use client";

import React, { useEffect, useState } from "react";
import DynamicIcons from "../DynamicIcons";
import { useSettingType } from "@/contexts/settingsType";
import MediaUploads from "./mediaUploads";

export default function Media() {
  const [tabOpen, setTabOpen] = useState("media");
  const [uploadMediaFiles, setUploadMediaFiles ] = useState<any[] >([])
  
  
  const {openMedia} = useSettingType()

  const tabsData = [
    { label: "Media", value: "media" },
    { label: "Upload Media", value: "upload" },
  ];

  const handleTabChange = (value: string) => {
    setTabOpen(value);
  };

  // useEffect(()=>{

  //   if(openMedia == false){
  //     setUploadMediaFiles([])
  //     setFileDragging(false)
  //     setTabOpen('media')
  //   }


  // },[openMedia])

  const handleCancelation = ()=>{
    setUploadMediaFiles([])
    
    
  }

  

  return (
    <>
      <div
        className={`w-full h-full  overflow-hidden scroll-bar py-3 `}
      >
        {/* tabs & Save */}
          <div className={`flex justify-between border-b border-gray-400/50 mx-6 `}>
          {/* tabs */}
            <ul className="tabs   flex gap-3 py-1  pl-3">
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
            {/* sabe-buttons */}

            <div className={`pr-6 `}>

              {
                uploadMediaFiles?.length >0 && (
                  <button className={`inline-block text-sm py-1 px-3 rounded-sm shadow-sm text-white bg-gray-500 hover:bg-gray-600 cursor-pointer mr-2 `} onClick={handleCancelation}>
                    Cancel
                  </button>

                )

              }
              
              <button className={`inline-block text-sm py-1 px-3 rounded-sm shadow-sm text-white
                ${uploadMediaFiles?.length ==0 ? 'bg-gray-400/70 cursor-not-allowed': 'bg-gray-500 hover:bg-gray-600 cursor-pointer '}   `}>
              {tabOpen == 'media' && 'Save' || tabOpen && 'upload' && "Upload"}
              </button>

            </div>
          </div>
        {/* Media */}
        <div className={`py-4 w-full overflow-y-auto overflow-x-hidden `} style={{
          height: `calc(100% - 25px)`
        }}>

        {
          tabOpen == 'media' && (
            <div className="media"></div>

          )

        }
          

        {/* Media Uploads */}

        { 
          tabOpen == 'upload'  && (
             <MediaUploads uploadMediaFiles={uploadMediaFiles} setUploadMediaFiles={setUploadMediaFiles} />


          )
        }
         



        
        </div>
      </div>
    </>
  );
}
