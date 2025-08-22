'use client'

import DynamicIcons from '@/components/DynamicIcons'
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'


export default function IconField({props, change}: settingFieldProps ) {
  const [alignValue, setAlignValue] = useState('')
  const [data, setData] = useState([])

  useEffect(()=>{
    setAlignValue(props?.value)
    

  }, [props?.value])

  const handleValueChange =(value:string)=>{
    setAlignValue(value)
    
    change?.(value)

  }

  useEffect(()=>{
    setData(props?.data)


  }, [])



  return (
    <>
    {
      props?.tabOpen && (

    
    <div className={`flex flex-col  gap-2 mt-2`}>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      
      <div className="alignBlocks flex py-1 px-3 justify-between">
        {
         data && data?.map((item:any, index:number)=>(
            <span className={`p-2  rounded-sm ${alignValue == item?.value && 'bg-gray-200/30'}`} key={index} onClick={()=>handleValueChange(item?.value)} title={item?.title}>
              <DynamicIcons name={item?.name} classes={` h-4 w-4 hover:text-black cursor-pointer ${alignValue == item?.value ? 'text-black': 'text-black/60'} `}></DynamicIcons>
            </span>

          ))

        }
        

        
        

      </div>
        

      
      

    </div>
    
    )}
    </>
  )
}
