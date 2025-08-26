'use client';

import React from 'react'
import DynamicIcons from '../DynamicIcons';
import { mediaUrl } from '../../../config/apiConfig';


interface MediaFilesProps {
  mediaFiles :  any[],
  setMediaFiles: React.Dispatch<React.SetStateAction<any[]>>


}

export default function ShowMedia({mediaFiles, setMediaFiles}:MediaFilesProps) {

  const fileUrl = mediaUrl;




  return (
    <>
      <div className={`media-uploads px-10 flex items-center w-full h-full `}>

             {
               mediaFiles?.length == 0 && (
                <div className={`w-1/2 h-2/3 mx-auto text-center content-center border shadow-lg border-gray-200 rounded-lg bg-gray-100  `}
                
                
       
                >
                  <h3> No Media Found</h3>

                </div>
              ) 
             }


             { 
              mediaFiles?.length >0  && (
                <div className={`w-full h-full  `}>
                  {
                    mediaFiles.map((item, index)=>(
                      <div key={index} className={`w-[11%] group relative cursor-pointer inline-block mx-2 my-2 h-32 shadow-sm border border-gray-400 rounded-sm `} >


                      
                        

                        {
                          item?.type?.startsWith('image/') && (
                            <img src={fileUrl +item.imagePath} alt=""  className={`object-cover w-full h-full rounded-sm ` }
                            
                            
                            />
                          )

                        }

                        {
                          item?.type?.startsWith('video/') && (
                            <div  className={`relative w-full h-full rounded-sm `}>
                              
                                <video src={fileUrl +item.imagePath}  className={`object-cover w-full h-full rounded-sm`}
                               
                                
                                >
                                  
                                </video>

                              <span className={`absolute top-[30%] left-[32%] py-3 px-3 rounded-full bg-black/40`}> 
                                <DynamicIcons name="video" classes={`w-8 h-8 text-white`} />
                              </span>
                            </div>
                            
                          )
                        }
                        
                        

                      </div>
                    ))
                  }

                </div>
              )
              }



      </div>    
      
    </>
  )
}
