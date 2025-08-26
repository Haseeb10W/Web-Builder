'use client'

import { settingFieldProps } from '@/types/settingsSchema'
import React from 'react'


export default function TextArea({props, change}: settingFieldProps ) {

  



  return (
    
    <div className={`flex flex-col gap-2 mt-2`}>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      <textarea 
      id={props?.labelId} 
      rows={4}  
      placeholder={props?.placeholder} 
      value={props?.value}
      onChange={change}
      className={` text-[12px] border border-gray-300 p-2 focus:border-gray-600 focus:border outline-0 rounded-md   `} 
      style={{}}

      />
        

      
      

    </div>
    
  )
}
