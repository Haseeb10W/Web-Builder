'use client';

import React, { useState } from 'react'
import DynamicIcons from '../DynamicIcons';
import { mediaUrl } from '../../../config/apiConfig';
import MediaEditForm from './mediaEditForm';
import { getNameAndExtension } from '@/lib/stringFunctions';
import { useSettingType } from '@/contexts/settingsType';


interface MediaFilesProps {
  mediaFiles :  any[],
  setMediaFiles: React.Dispatch<React.SetStateAction<any[]>>


}

export default function ShowMedia({mediaFiles, setMediaFiles}:MediaFilesProps) {
  const [editFileOpen, setEditFileOpen] = useState(false);
  const [fileSelected, setFileSelected] = useState<any>(null);
  const [applyChanges, setApplyChanges] = useState(false);
  const {mediaFilesApply, setMediaFilesApply}  = useSettingType()

  const fileUrl = mediaUrl;


   const handleFileEditOpen = (value:any)=>{
    // console.log('hello')

    const fullMediaData = [...mediaFiles]
    
     const fileFound =   fullMediaData.find(item=>{
      return item.imagePath == value
     })
    //  console.log(fileFound)
     const [fileName, extension] = getNameAndExtension(fileFound.imagePath)
     const fileData = {
      alternate : fileFound.alt,
      name : fileFound.custom_name,
      captions : fileFound.caption,
      original: fileFound.imagePath,
      
      extenstion: extension,
      description: fileFound.description,
      type : fileFound.type,
      imagePath: fileFound.imagePath,
      showUrl :fileUrl + fileFound.imagePath,
     }

    setFileSelected(fileData)
     !editFileOpen && setEditFileOpen(true)
    
  }

 
  const handleSelectMediaFile  = ( e: React.MouseEvent<HTMLDivElement>, item:any)=>{
    // console.log(item)
    if(mediaFilesApply && mediaFilesApply.applyType == 'single'){
      const fullMediaApply = {...mediaFilesApply};

      const newItem = {...item}
      // console.log(newItem)
      newItem.fullUrl = fileUrl + item.imagePath

      fullMediaApply.appliedData = [newItem]
      
      
      setMediaFilesApply(fullMediaApply)

    }else if(mediaFilesApply && mediaFilesApply.applyType == 'multiple'){
      if(e.ctrlKey){


      }else{


      }

    }
    
    

  }


  const showSelectedFiles = (item:any)=>{
    let showSelect = false;
    const appliedData = mediaFilesApply?.appliedData 

    if(appliedData && appliedData.length >0){
      const foundSelected =   appliedData.find((data:any)=>{
        return data.imagePath == item.imagePath && data.id == item.id
      })

       if(foundSelected){
          showSelect = true
    }
      
    }

   
   

    return showSelect
  }



  return (
    <>
      <div className={`media-uploads px-10 flex items-center w-full h-full `}>

             {
               mediaFiles?.length == 0 && (
                <div className={`w-1/2 h-2/3 mx-auto text-center content-center border shadow-lg border-gray-200 rounded-lg bg-gray-100 ` } 
                
                
       
                >
                  <h3> No Media Found</h3>

                </div>
              ) 
             }


             { 
              mediaFiles?.length >0  && (
                <div className={`w-full h-full  `}>
                  {
                    mediaFiles.filter(item=> (mediaFilesApply && mediaFilesApply.type == item?.type?.split('/')[0] )|| (mediaFilesApply == undefined && item?.type?.includes('/') ) ).map((item, index)=>(
                      <div key={index} className={`w-[11%] group relative cursor-pointer inline-block mx-2 my-2 h-32 shadow-sm border border-gray-400 rounded-sm ${mediaFilesApply && showSelectedFiles(item)? 'outline-2 outline-blue-600': ''} `} onClick={(e)=>handleSelectMediaFile(e, item)}>


                      
                        

                        {
                          item?.type?.startsWith('image/') && (
                            <img src={fileUrl +item.imagePath} alt=""  className={`object-cover w-full h-full rounded-sm ` }
                            
                            
                            />
                          )

                        }

                        {
                         item?.type?.startsWith('video/') && (
                            <div  className={`relative w-full h-full rounded-sm `}>
                              
                                <video src={fileUrl + item.imagePath}  className={`object-cover w-full h-full rounded-sm`}
                               
                                
                                >
                                  
                                </video>

                              <span className={`absolute top-[30%] left-[32%] py-3 px-3 rounded-full bg-black/40`}> 
                                <DynamicIcons name="video" classes={`w-8 h-8 text-white`} />
                              </span>
                            </div>
                            
                          )
                        }
                        
                        <span className={` hidden group-hover:block bg-blue-600 hover:bg-blue-800 cursor-pointer  absolute rounded-sm px-2  py-2 text-white top-0 right-0 text-xl z-99 `} onClick={()=>handleFileEditOpen(item.imagePath)}  >
                          <DynamicIcons name="pencil"  classes={`w-4 h-4`} />
                        </span>
                        

                      </div>
                    ))
                  }

                </div>
              )
              }



      </div>    

      {/* Media  Edit PopUp */}
      
            {
              editFileOpen && (
                <div className={`fixed w-full bg-black/50 h-full top-0 z-99 left-0 content-center  `}>
                  <div className={`relative border border-gray-600 rounded-sm max-w-md w-[90%] h-11/12 bg-white mx-auto overflow-hidden`}>
                    <div className={`py-4 px-4 w-full h-full scroll-bar overflow-y-auto overflow-x-hidden`}>
                      <MediaEditForm  data={fileSelected}  updateData={setFileSelected} applyChange={applyChanges} updateChanges={setApplyChanges} status="edit"  />
      
                    </div>
      
      
                    <span className={`absolute top-0 right-2 text-4xl cursor-pointer hover:text-gray-500`} onClick={()=>setEditFileOpen(false)}>&times;</span>
                  </div>
      
      
      
                </div>
              )
      
            }
      
    </>
  )
}
