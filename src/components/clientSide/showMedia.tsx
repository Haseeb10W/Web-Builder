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
      <div className={`media-uploads px-2 md:px-10 flex items-center w-full h-full `}>

             {
               mediaFiles?.length == 0 && (
                <div className={`min-w-[95%] min-[500px]:min-w-[450px]  min-[500px]:h-[350px] h-6/12  mx-auto text-center content-center border shadow-lg border-gray-200 rounded-lg bg-gray-100 `}
                
                
       
                >
                  <DynamicIcons name="moMedia" classes={`w-10 h-10 m-auto`}></DynamicIcons>
                  <h3 className='text-xl tracking-wider mt-3'>No Media Found</h3>

                </div>
              ) 
             }


             { 
              mediaFiles?.length >0  && (
                <div className={`w-full h-full flex-wrap `}>
                  {
                    mediaFiles.map((item, index)=>(
                      <div key={index} className={`lg:!w-[11%] min-[990px]:!w-[14.5%] md:!w-[18%] min-[640px]:!w-[22%] min-[425px]:!w-[28%] !w-[44%] group relative cursor-pointer inline-block mx-2 my-2 h-32 shadow-sm border border-gray-400 rounded-sm `} >


                      
                        

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
