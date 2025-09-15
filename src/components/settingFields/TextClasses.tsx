'use client';

import { settingFieldProps } from '@/types/settingsSchema';
import React, { useEffect, useState } from 'react'
import ResponsiveComponents from './ResponsiveComponents';

export default function TextClasses({props,change}:settingFieldProps) {

  const [changeInput,setChangeInput] = useState("")

  const handleValue = (e:any) =>{
     setChangeInput(e.target.value)
  }

//   useEffect(()=>{
//     setChangeInput(props?.value)
//   },[props?.value])
  
//   const handleInputChange = (value:string) =>{

//     const fullValue = {
//       status : props?.currentStatus,
//       responsive : props?.responsive || 'on',
//       value : value
//     }

//     change?.(JSON.stringify(fullValue))
//   }

  return (
    <>
    {props?.tabOpen &&
    (
    <>
    <div className='flex justify-between'>
     <div className='flex items-center gap-x-1.5'>
      <h3 className="text-sm text-gray-600 mt-2">{props?.label}</h3>
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
    </div>
      <input type="text" placeholder={props?.placeholder}
     value={changeInput} required  className='!w-[150px] text-[12px] outline-none pl-1.5 placeholder:text-[12px] border p-1  border-gray-200  rounded-lg overflow-hidden mt-2' onChange={handleValue}/>
     </div> 
     
     </>
    )
    }

    </>
  )
}



