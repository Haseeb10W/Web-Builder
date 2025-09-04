'use client'

import DynamicIcons from '@/components/DynamicIcons'
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import ResponsiveComponents from './ResponsiveComponents'


export default function TextAlign({props, change}: settingFieldProps ) {
  const [alignValue, setAlignValue] = useState('')

  useEffect(()=>{
    setAlignValue(props?.value)
    

  }, [])

  const handleValueChange =(value:string)=>{
    setAlignValue(value)
    
    change?.(value)

  }

  const alignContent = [
    {name: 'left', value: 'left', title: 'Left'   },
    {name: 'center', value: 'center', title: 'Center'   },
    {name: 'right', value: 'right' , title: 'Right'  },
    {name: 'justify', value: 'justify', title: 'Justify'   },
  ]




  return (

    <>
    {
      props?.tabOpen && (
    
    <div className={`flex flex-col mt-2 gap-2`}>
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
          alignContent.map((item, index)=>(
            <span className={``} key={index} title={item.title} onClick={()=>handleValueChange(item.value)}>
              <DynamicIcons name={item.name} classes={`h-4 w-4 hover:text-black cursor-pointer ${alignValue == item.value ? 'text-black': 'text-gray-600'} `}></DynamicIcons>
            </span>

          ))

        }
        

        
        

      </div>
        

      
      

    </div>

      )}

    </>
    
  )
}
