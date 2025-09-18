'use client';

import { settingFieldProps } from '@/types/settingsSchema';
import React, { useEffect, useState } from 'react'
import ResponsiveComponents from './ResponsiveComponents';

export default function TextField({props,change}:settingFieldProps) {

  const [changeInput,setChangeInput] = useState("")
  

  useEffect(()=>{
    setChangeInput(props?.value)
  },[props?.value])
  
  const handleInputChange = (value:string) =>{

    setChangeInput(value)

    
  }

 
  const sendTextInput = ()=>{
    const fullValue = {
      status : props?.currentStatus || 'normal',
      responsive : props?.responsive || 'on',
      value : changeInput
    }

    change?.(JSON.stringify(fullValue))

  }

 

  return (
    <>
      <div className='flex items-center gap-x-1.5'>
      <h3 className="text-sm text-gray-600 mt-2">{props?.label}</h3>
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
      </div>
      <div className='border w-[100%] border-gray-200 flex justify-between rounded-lg overflow-hidden mt-2'>
      <input type="url" placeholder={props?.placeholder}
       pattern="https://.*" value={changeInput} required  className='!w-[80%] text-[12px] outline-none pl-1.5 placeholder:text-[12px]' onChange={(e)=>handleInputChange(e.target.value)}  onBlur={()=>sendTextInput()}/>
      <button className='bg-gray-200 text-[12px] w-12 h-6 cursor-pointer ' onClick={()=>handleInputChange('')}>Clear</button>   
      </div>
    </>
  )
}



