'use client'

import useDocumentClick from '@/hooks/useDocumentClick';
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import ResponsiveComponents from './ResponsiveComponents';
import DynamicIcons from '../DynamicIcons';

export default function IconSelectField({props, change}: settingFieldProps) {
  const [selectedOption, setSelectedOption] = useState<{label: any, value: any,icon:string | null }>({label: null, value: null,icon:null});
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useDocumentClick(()=>{
    setIsOpen(false)
  })

  useEffect(()=>{
   
    if(props?.value == ''){
    
      // console.log(props?.options)
         setSelectedOption({
          label : props?.options[0].label,
          value: props?.options[0].value,
          icon: props?.options[0].icon
        })

    }
  
    if(props?.value !== selectedOption.value && props?.value !== ''){
    
      
      if(props?.options){
       const selectedOne =  props?.options.find((item:any)=>{
          return item.value === props.value

        })

        setSelectedOption({
          label : selectedOne?.label,
          value: selectedOne?.value,
          icon : selectedOne?.icons
        })


      }
      

    }
    

  }, [props?.value])



  const handleSelectOption = (value:any, label:any,icon:any)=>{
    setSelectedOption({label:label, value:value,icon:icon});
    setIsOpen(false)

    const fullValue = {
      status : props?.currentStatus,
      responsive : props?.responsive || 'on',
      value : value
    }

    change?.(fullValue)

  }




  return (

    <>
    
      {
      props?.tabOpen && (

     <div className={`flex mt-3 justify-between gap-2`}>
      <div className='flex gap-x-1.5'>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
      </div>



      <div ref={clickRef} className="select-field relative min-w-22 " >
        <div className="select-field-value text-center cursor-pointer bg-gray-200/90 rounded-lg pl-2 py-0.5 selection:bg-transparent " onClick={()=>setIsOpen(!isOpen)}>
          <div className={`text-[12px] flex items-center `}> 
            <span className='mr-2'>
                  <DynamicIcons name={selectedOption?.icon || "rabbit"} classes='w-3 h-3'/>
                </span>
                <span>
                  {selectedOption?.label}
                </span> 
          </div>
          
        </div>

        {
          isOpen && (
            <ul className={`absolute min-w-full  top-[103%] right-0 z-99 scroll-bar bg-white border border-gray-300  max-h-40 overflow-y-auto overflow-x-hidden`}>
             
             {/* {
              !props?.defaultNot && ( <li 
              className={`!text-[12px] py-0.5 px-1 text-center w-full cursor-pointer hover:bg-gray-200 ${selectedOption.value== '' && 'bg-gray-200' }`}
              onClick={()=>handleSelectOption('', 'Default')}>Default</li> ) 
             } */}
             
              
            {
              props?.options?.map((option :any, index:number) => (
              <li key={index}
              className={`!text-[12px] py-0.5 pl-2 text-center w-full cursor-pointer flex items-center   hover:bg-gray-200 ${selectedOption.value== option?.value && 'bg-gray-200' }`}
              onClick={()=>handleSelectOption(option?.value, option?.label,option?.icon)}>
                <span className='mr-2'>
                  <DynamicIcons name={option?.icon || "rabbit"} classes='w-3 h-3'/>
                </span>
                <span>
                  {option?.label}
                </span>
              </li>
              ))
            }

            </ul>

          )
        }        

      </div>
          
    </div>

   )}
    </>
  )
}
