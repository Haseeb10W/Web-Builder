'use client'

import DynamicIcons from '@/components/DynamicIcons'
import useDocumentClick from '@/hooks/useDocumentClick'
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useCallback, useEffect, useState } from 'react'
import ResponsiveComponents from './ResponsiveComponents'

export default function SizeField({props, change}:settingFieldProps) {

  const [unitOpen, setUnitOpen] = useState(false)
  const [unit, setUnit] = useState('px');
  const [size, setSize] = useState<string>('');
  const [fullValue, setFullValue] = useState('')

  

  const refUnit = useDocumentClick(()=> setUnitOpen(false))


  useEffect(()=>{
    if(props?.value){
      // console.log(props?.value)
      const value = props?.value.trim()
      // console.log(value)
      const units = ['px', '%', 'rem', 'em', 'vw', 'vh', 'deg'];
      const foundUnit = units.find((unit)=> value.includes(unit))
      // console.log(unit)

      let valueSize;
      if(foundUnit){
        valueSize = value.replace(foundUnit, '')
        setUnit(foundUnit)
      }else{
        valueSize = value;
        setUnit('px')
      }
      // console.log(size)
      setSize(valueSize)

     
    }else {
      setSize('')
      setUnit('px')
    }

  }, [props?.value])

  // const unitRanges = [
  //   {name: "pixels", value: "px"},
  //   {name: "percent", value: "%"},
  //   {name: "Rem", value: "rem"},
  //   {name: "Em", value: "e"},
  //   {name: "ViewWidth", value: "vw"},
  //   {name: "ViewHeight", value: "vh"},
    
  // ]
  

  const handleSizeChange  = (e:any)=>{
    const target = e.target as HTMLInputElement;
    const value = target.value; 
    let sizeValue 
   
    if (value === '' || value === '-') {
    setSize(value);
    return;
    }
    if(unit == "%" || unit == "rem" || unit == "em"){
      if(Number(value) > 100){
        sizeValue = "100"
      }
      else if(Number(value) < -100){
         sizeValue  = "-100"
      } 
      else{
        sizeValue  = value
      }   
    }else{
      sizeValue  = value
    }

    // const newValue = `${size}${unit}`;


    if(value != ''){

      setSize(sizeValue)
      // fullValue.value = newValue;

    }else{
      setSize('')

      
    }

    
    
    
  }


  const handleSizeSent = ()=>{
    const newValue = `${size}${unit}`;

    const fullValue = {
      status : props?.currentStatus,
      value : '',
      responsive : props?.responsive || 'on'
    }



    if(size != ''){
      fullValue.value = newValue;

    }else{
      fullValue.value = '';

      
    }
    change?.(JSON.stringify(fullValue))

  }



  const handleUnitChange = useCallback((value:string)=>{

    
    setUnit(value)

    handleSizeSent()



  }, [unit])
  

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

        <input type="number" name="textSize" value={size} id={props?.labelId} className={`input-no-spinner h-5.5 appearance-none max-w-16 border text-center border-gray-400 outline-0 rounded-sm text-[12px]` } onChange={handleSizeChange} onBlur={handleSizeSent}  />


        <div ref={refUnit} className={`range-unit relative min-w-8 h-6 rounded-sm ${!props?.optionNotShow && 'cursor-pointer'}   mt-auto flex items-center justify-center text-center bg-gray-200`} onClick={ ()=> {!props?.optionNotShow && setUnitOpen(!unitOpen)}}>
          <span className={`!text-sm `}>{unit}</span>
          {
            unitOpen && (
              <ul className={`absolute top-[103%] z-99 left-0 w-full flex flex-col items-center bg-white border border-gray-300 `}>
              {
                props?.unitOptions?.map((item:any, index:number)=>(
                  <li key={index} onClick={()=>handleUnitChange(item.value)} className={`hover:bg-gray-200 w-full text-sm p-1 ${item.value==unit && 'bg-gray-200' }`}>{item.value}</li>
                ))
              }
              </ul>
              
            )

          }
          
        </div>
  


      </div>

    </div>
      )
    }
    
   </>
  )
}
