'use client';

import { settingFieldProps } from '@/types/settingsSchema';
import React, { useEffect, useState } from 'react'

export default function TextField({props,change}:settingFieldProps) {

  const [changeInput,setChangeInput] = useState("")

  useEffect(()=>{
    setChangeInput(props?.value)
  },[props?.value])
  
  const handleInputChange = (value:string) =>{

    change?.(value)
  }

  return (
    <>
      <h3 className="text-sm text-gray-600 mt-2">{props?.label}</h3>
      <div className='border w-[100%] border-gray-200 flex justify-between rounded-lg overflow-hidden mt-2'>
      <input type="url" placeholder={props?.placeholder}
       pattern="https://.*" value={changeInput} required  className='!w-[80%] text-[12px] outline-none pl-1.5 placeholder:text-[12px]' onChange={(e)=>handleInputChange(e.target.value)}/>
      <button className='bg-gray-200 text-[12px] w-12 h-6 ' onClick={()=>handleInputChange('')}>Clear</button>   
      </div>
    </>
  )
}



