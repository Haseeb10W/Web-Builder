'use client';

import React, { useState } from 'react'
import DynamicIcons from '../DynamicIcons';

interface MediaUploadsProps {
  uploadMediaFiles :  any[],
  setUploadMediaFiles: React.Dispatch<React.SetStateAction<any[]>>

}

export default function MediaUploads({uploadMediaFiles, setUploadMediaFiles}:MediaUploadsProps) {
  
  const [fileDragging, setFileDragging] = useState(false)


  const handleFileUploads = (e:any)=>{
    
    // console.log(Array.from(e.target.files))
    
    const files = Array.from(e.target.files)

    

    const fullFiles:any[] = [];
    files.forEach((item:any)=>{
      const url = URL.createObjectURL(item)
      const fullItem = {
        urlMedia: url,
        fullFile : item
      }
      
      fullFiles.push(fullItem)
      

    })
    // console.log(fullFiles)
    setUploadMediaFiles(fullFiles)

  }

  const handleRemovingMedia = (e:React.MouseEvent<HTMLSpanElement>, url:String)=>{
    e.stopPropagation();
    const mediaFiles = uploadMediaFiles;
    const newMedia = mediaFiles.filter(item=>{
      return item.urlMedia !== url
    })

    setUploadMediaFiles(newMedia)
  }



  return (
    <div className={`media-uploads px-10 flex items-center w-full h-full `}>

             {
               uploadMediaFiles?.length == 0 && (
                <div className={`w-1/2 h-2/3 mx-auto border shadow-lg border-gray-200 rounded-lg ${fileDragging? 'bg-gray-300': 'bg-gray-100'}  `}
                
                onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      !fileDragging && setFileDragging(true);
                      
                      }}
                    onDragEnter={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                     !fileDragging && setFileDragging(true);
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFileDragging(false);
                      }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFileDragging(false);
                      const files = e.dataTransfer.files;
                      handleFileUploads({ target: { files } });
                  }}
                
                
                
                
                >
                  <label htmlFor="media-uploads" className="cursor-pointer">
                    <div className={`flex flex-col gap-3 items-center justify-center h-full`}>
                      <span className={``}>
                        <DynamicIcons name="upload" classes={`w-10 h-10`}></DynamicIcons>
                      </span>
                      <div className={`text-xl text-gray-800 `}>
                        Upload Media
                      </div>
                    </div>
                    <input type="file" multiple accept="video/*, image/*, .svg" name="mediaUploads" id="media-uploads" onChange={handleFileUploads}   hidden/>


                  </label>



                </div>
              ) 
             }


             { 
              uploadMediaFiles?.length >0  && (
                <div className={`w-full h-full  `}>
                  {
                    uploadMediaFiles.map((item, index)=>(
                      <div key={index} className={`w-[11%] group relative cursor-pointer inline-block mx-2 my-2 h-32 shadow-sm border border-gray-400 rounded-sm`} >
                        {
                          item.fullFile.type.startsWith('image/') && (
                            <img src={item.urlMedia} alt=""  className={`object-cover w-full h-full rounded-sm`}/>
                          )

                        }

                        {
                          item.fullFile.type.startsWith('video/') && (
                            <div  className={`relative w-full h-full rounded-sm `}>
                              <video src={item.urlMedia} className={`object-cover w-full h-full rounded-sm`} ></video>
                              <span className={`absolute top-[30%] left-[32%] py-3 px-3 rounded-full bg-black/40`}> 
                                <DynamicIcons name="video" classes={`w-8 h-8 text-white`} />
                              </span>
                            </div>
                            
                          )
                        }
                        
                        <span className={` hidden group-hover:block bg-blue-600 hover:bg-blue-800 cursor-pointer  absolute rounded-sm px-2  text-white top-0 right-0 text-xl z-99 `}  onClick={(e)=>handleRemovingMedia(e, item.urlMedia)} >&times;</span>



                      </div>
                    ))
                  }






                </div>
              )
              }



            </div>
  )
}
