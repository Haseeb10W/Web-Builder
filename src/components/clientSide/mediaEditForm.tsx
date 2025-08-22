'use client';



import React, { useEffect, useState } from 'react'
import DynamicIcons from '../DynamicIcons';


interface MediaEditFormProps {
  data :any,
  updateData: React.Dispatch<any>;
  applyChange:boolean,
  updateChanges: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MediaEditForm({data, updateData, applyChange, updateChanges}: MediaEditFormProps) {
  const [contentChanged, setContentChanged] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [submitEdit, setSubmitEdit] = useState(false);
  const [error, setError] = useState<{[key:string]: any} | null>(null);
 

  useEffect(()=>{
    console.log(data)

  }, [])


  const handleDataChange = (value:string, field: string  )=>{
    if(Object.keys(error || {}).length > 0){
      setError(null);
    }
    updateData({...data, [field] : value})
    if(!contentChanged){
      setContentChanged(true)
    }

  }

  const checkErrors = (data:any)=>{
    let errors = {} ;
    if(data?.name.trim() === ''){
      errors = {name: 'Name is required'};
      
    }
    

    return errors

  }


  const handleSubmit = ()=>{

    const errors = checkErrors(data);
    if(Object.keys(errors).length > 0){
      setError(errors);
      return;
    }
     




    if(contentChanged){
      
      updateChanges(true)


      setContentChanged(false)
    }
    

  }



  return (

    <>
    <div className={`h-full w-full `}>

      <div>
        <h3 className='text-xl'>Preview</h3>

        <div className={`flex gap-3`}>
        <div  className={`w-[30%] h-24 group relative cursor-pointer inline-block mx-2 my-2  shadow-sm border border-gray-300/80 rounded-sm `} >
          {
            data?.type.startsWith('image/') && (
              <img src={data.showUrl} alt=""  className={`object-cover w-full h-full rounded-sm`} onClick={()=>setShowPreview(true)}/>
            )
            }
          {
            data?.type.startsWith('video/') && (
              <div  className={`relative w-full h-full rounded-sm `} onClick={()=>setShowPreview(true)}>
                <video src={data?.showUrl} className={`object-cover w-full h-full rounded-sm`} ></video>
                <span className={`absolute top-[25%] left-[30%] py-3 px-3 rounded-full bg-black/40`}> 
                  <DynamicIcons name="play" classes={`w-5 h-5 text-white`} />
                </span>
              </div>
              
            )
          }
          
        </div>

        <ul className={`max-w-[65%] flex flex-col gap-2`}>
          <li className='text-[14px]'>{data.name}</li>
          <li className='text-[14px]'><strong>Size: </strong> {data.size}</li>
        </ul>

      </div>
        


      </div>



      <div className={`flex flex-col gap-3 py-4 `}>
        {
          error?.name && (
            <span className={`flex items-center gap-2 py-2 px-3 rounded-lg bg-red-600`}>
              <DynamicIcons name="error" classes={`text-white w-5 h-5 inline-block`} />
              <span className={`text-sm text-white`}>{error.name}</span>
            </span>
          )
        }
        
        <div className={`flex flex-col gap-2`}>
          <label className={`text-sm`} htmlFor='file-name'>Name</label>
          <input type="text" id='file-name' 
          onChange={(e)=>handleDataChange(e.target.value, 'name')} 
          className={`w-full border border-gray-300 rounded-sm p-2 text-sm  outline-0`} value={data.name} />
        </div>
        <div className={`flex flex-col gap-2`}>
          <label className={`text-sm`} htmlFor='file-alternative'>Alt Text</label>
          <input type="text" id='file-alternative'
          onChange={(e)=>handleDataChange(e.target.value, 'alternate')}
          className={`w-full border border-gray-300 rounded-sm p-2 text-sm outline-0`} value={data.alternate} />
        </div>
        <div className={`flex flex-col gap-2`}>
          <label className={`text-sm`} htmlFor='file-caption'>Caption</label>
          <input type="text" id='file-caption'
          onChange={(e)=>handleDataChange(e.target.value, 'captions')}
          className={`w-full border border-gray-300 rounded-sm p-2 text-sm outline-0`} value={data.captions}/>
        </div>
        
        <div className={`flex flex-col gap-2`}>
          <label className={`text-sm`} htmlFor='file-description'>Description</label>
          <textarea id='file-description'
          onChange={(e)=>handleDataChange(e.target.value, 'description')}
          value={data.description} 
          className={`w-full border border-gray-300 rounded-sm p-2 text-sm outline-0`} />
        </div>


        <div className='mt-2 mb-1'>
          <button disabled={!contentChanged} className={`bg-gray-500  hover:bg-gray-600 disabled:bg-gray-400 ${!contentChanged ? 'cursor-not-allowed': 'cursor-pointer'} rounded-sm  text-white py-1 px-5`} onClick={handleSubmit}> Save </button>
        </div>

      </div>

      {/* <div className="space my-2"></div> */}
      
      

      
    </div>

    {
      showPreview && (
        <div className={`fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50`} onClick={()=>setShowPreview(false)}>
          <div className={` h-[90vh] w-[80vw] p-5 rounded-md shadow-lg `} onClick={(e)=>e.stopPropagation()}>
            
            <div className={`w-full  h-full overflow-hidden`}>
              {
                data?.type.startsWith('image/') ? (
                  <img src={data.showUrl} alt="" className={`object-contain  w-full h-full`}/>
                ) : (
                  <video src={data.showUrl} className={`object-cover w-full h-full`} controls autoPlay muted></video>
                  
                )
              }
            </div>
            <button className='absolute top-2 right-2 text-white text-5xl cursor-pointer hover:text-gray-400 ' onClick={()=>setShowPreview(false)} >&times;</button>
          </div>
        </div>
      )

    }


  </>
  )
}
