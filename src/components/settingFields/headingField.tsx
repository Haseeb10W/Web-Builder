'use client'

import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import DynamicIcons from '../DynamicIcons'


export default function HeadingField({props, change}: settingFieldProps ) {

  const [tabOpen, setTabOpen] = useState(false)

  useEffect(()=>{

    if(props?.tabAllow){
      setTabOpen(props?.tabOpen)

    }
    
      
    

  }, [])
  
  const handleTab = ()=>{
    if(!props?.tabAllow) return

    const tabStat = tabOpen
    setTabOpen(!tabOpen)
    change?.(!tabStat)
  }



  return (
    
    <div className={`flex flex-col mt-4  `} >
      
      
      <div className={`flex justify-between items-center ${props?.tabAllow && 'cursor-pointer'}  `} onClick={handleTab}>
        <h3 className='text-base text-black'>  {props?.label} </h3>
       
       {
        props?.tabAllow && (<DynamicIcons name="downarrow" classes={`w-5 h-5 mr-2 transform  ${tabOpen ? 'rotate-0': 'rotate-180'}`} />)

       }
        

      </div>
      <hr className='mt-[5px] border border-gray-200'/>
        


    </div>
    
  )
}
