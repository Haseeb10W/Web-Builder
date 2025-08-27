'use client';

import React, { useEffect, useState } from 'react'
import DynamicIcons from '../DynamicIcons';
import useDocumentClick from '@/hooks/useDocumentClick';
import { calculateSize, getNameAndExtension } from '@/lib/stringFunctions';
import MediaEditForm from './mediaEditForm';

interface MediaUploadsProps {
  uploadMediaFiles :  any[],
  setUploadMediaFiles: React.Dispatch<React.SetStateAction<any[]>>


}

export default function MediaUploads({uploadMediaFiles, setUploadMediaFiles}:MediaUploadsProps) {
  
  const [fileDragging, setFileDragging] = useState(false);
  const [fileSelected, setFileSelected] = useState<any>(null);
  const [editUploadOpen, setEditUploadOpen] = useState(false);
  const [applyChanges, setApplyChanges] = useState(false);
  // const urlRef = useDocumentClick(()=>set)



  const handleFileUploads = (e:any)=>{
    
    // console.log(Array.from(e.target.files))
    
    const files = Array.from(e.target.files)

   
    const fullFiles:any[] = [];
    files.forEach((item:any)=>{
      const url = URL.createObjectURL(item)
      const [fileName, extension] = getNameAndExtension(item.name)
      const fullItem = {
        urlMedia: url,
        fullFile : item,
        loading: true,
        properties: {
          alternate : '',
          name : fileName,
          captions : '',
          original: item.name,
          size : calculateSize(item.size),
          extenstion: extension,
          description: '',
          type : item.type,
          imagePath: item.name,
          showUrl : url,
          
        }
        
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

  const handleFileEditOpen = (value:any)=>{
    // console.log('hello')

    const fullMediaData = [...uploadMediaFiles]
     const fileFound =   fullMediaData.find(item=>{
      return item.urlMedia == value
     })
     

    setFileSelected(fileFound.properties)
     !editUploadOpen && setEditUploadOpen(true)
    
  }


  useEffect(()=>{

    if(applyChanges){
      const mediaFiles = [...uploadMediaFiles];
  
      const selectedFile = {...fileSelected};
      const fileIndex = mediaFiles.findIndex(item => item.urlMedia === selectedFile.showUrl);
      // console.log(fileIndex)
      mediaFiles[fileIndex] = {...mediaFiles[fileIndex], properties: selectedFile };
      setUploadMediaFiles(mediaFiles);


      setApplyChanges(false);
    }


  }, [applyChanges]) 




 



  return (
    <>
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
                      <div key={index} className={`w-[11%] group relative cursor-pointer inline-block mx-2 my-2 h-32 shadow-sm border border-gray-400 rounded-sm ${editUploadOpen && fileSelected?.showUrl === item.urlMedia ? 'outline-2 outline-blue-600': ''}`} onClick={()=>handleFileEditOpen(item.urlMedia)}>


                      {item.loading && (
                        <div className={` w-full h-full rounded-sm `}>
                          <img src="/images/thick_circle_loader.gif" alt=""  className={` w-full h-full  `}/>
                        </div>

                      )}
                        

                        {
                          item.fullFile.type.startsWith('image/') && (
                            <img src={item.urlMedia} alt=""  className={`object-cover w-full h-full rounded-sm ${item.loading ?'hidden': 'block' }` }
                            onLoad={() => {
                                  setUploadMediaFiles(prev => 
                                  prev.map((prevItem, i) => i === index ? { ...prevItem, loading: false } : prevItem)
                                );
                              }}
                            
                            />
                          )

                        }

                        {
                          item.fullFile.type.startsWith('video/') && (
                            <div  className={`relative w-full h-full rounded-sm ${item.loading ?'hidden': 'block' }`}>
                              
                                <video src={item.urlMedia}  className={`object-cover w-full h-full rounded-sm`}
                                onLoadedData={() => {
                                  setUploadMediaFiles(prev => 
                                prev.map((prevItem, i) => i === index ? { ...prevItem, loading: false } : prevItem)
                                );
                              }}
                                
                                >
                                  
                                </video>

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



      {/* Upload Edit PopUp */}

      {
        editUploadOpen && (
          <div className={`fixed w-full bg-black/50 h-full top-0 z-99 left-0 content-center  `}>
            <div className={`relative border border-gray-600 rounded-sm max-w-md w-[90%] h-11/12 bg-white mx-auto overflow-hidden`}>
              <div className={`py-4 px-4 w-full h-full scroll-bar overflow-y-auto overflow-x-hidden`}>
                <MediaEditForm  data={fileSelected}  updateData={setFileSelected} applyChange={applyChanges} updateChanges={setApplyChanges} status="upload" />

              </div>


              <span className={`absolute top-0 right-2 text-4xl cursor-pointer hover:text-gray-500`} onClick={()=>setEditUploadOpen(false)}>&times;</span>
            </div>



          </div>
        )

      }



     
      

    </>
  )
}
