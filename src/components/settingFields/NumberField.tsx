'use client'


import { settingFieldProps } from '@/types/settingsSchema'
import React from 'react'
import ResponsiveComponents from './ResponsiveComponents'

export default function NumberField({props, change}:settingFieldProps) {
  
  


  

  const handleChange  = (e:any)=>{
    const target = e.target as HTMLInputElement;
    const value = target.value; 
    
    const fullValue = {
      status : props?.currentStatus,
      responsive : props?.responsive || 'on',
      value : value
    }
    change?.(JSON.stringify(fullValue))
  }
   

  return (
    <>

    {
      props?.tabOpen && (
        <div className={`flex justify-between gap-2 w-full mt-4 `}>
      <div className='flex gap-x-1.5'>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
      
      </div>


      
      <div  className="select-field relative flex  gap-2 items-center" >

        <input type="number" name="zindex" value={props?.value} id={props?.labelId} className={`input-no-spinner h-5.5 appearance-none max-w-16 border text-center border-gray-400 outline-0 rounded-sm text-[12px]` } onChange={handleChange}  />

      </div>

    </div>
      )
    }
    
   </>
  )
}

