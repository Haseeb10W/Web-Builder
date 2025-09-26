'use client'

import { settingFieldProps } from '@/types/settingsSchema'
import React from 'react'
import ResponsiveComponents from './ResponsiveComponents'


export default function TextArea({props, change}: settingFieldProps ) {

  const changeValue = (e:any)=>{

    const value = e.target.value;
    let fullValue = {
        status: props?.currentStatus || 'normal',
        responsive: props?.responsive || 'on',
        value: value
      };

    change?.(JSON.stringify(fullValue))
    
    

  } 


  return (

    props?.tabOpen &&  (
        <>
      <div className={`flex flex-col gap-2 mt-2`}>
      <div className='flex items-center gap-x-1.5'>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
      </div>
      <textarea 
      id={props?.labelId} 
      rows={props?.row}  
      placeholder={props?.placeholder} 
      value={props?.value}
      onChange={changeValue}
      className={` text-[12px] border border-gray-300 p-2 focus:border-gray-600 focus:border outline-0 rounded-md   `} 
      style={{}}

      />
        
       </div>
        </>
      )  
    
  )
}
