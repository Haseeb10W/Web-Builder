'use client'

import DynamicIcons from '@/components/DynamicIcons'
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import ResponsiveComponents from './ResponsiveComponents'


export default function IconField({props, change}: settingFieldProps ) {
  const [alignValue, setAlignValue] = useState('')
  const [data, setData] = useState([])

  useEffect(()=>{
    // console.log(props?.value)

    // console.log(props?.currentStatus)
    

  }, [props?.value])

  const handleValueChange =(value:string)=>{
    
    const currentValue = {
      status : props?.currentStatus,
      responsive : props?.responsive || 'on',
      value : value
    }
    const finalValue = JSON.stringify(currentValue)
    change?.(finalValue)

  }

  



  return (
    <>
    {
      props?.tabOpen && (

    
    <div className={`flex flex-col  gap-2 mt-2`}>
      <div className='flex items-center gap-x-1.5'>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
      </div>
      
      <div className="alignBlocks flex py-1 px-3 justify-between">
        {
         props?.data && props?.data?.map((item:any, index:number)=>(
            <span className={`p-2  rounded-sm ${props?.value == item?.value && 'bg-gray-200/30'}`} key={index} onClick={()=>handleValueChange(item?.value)} title={item?.title}>
              <DynamicIcons name={item?.name} classes={` h-4 w-4 hover:text-black cursor-pointer ${props?.value == item?.value ? 'text-black': 'text-black/60'} `}></DynamicIcons>
            </span>

          ))

        }
        

        
        

      </div>
        

      
      

    </div>
    
    )}
    </>
  )
}
