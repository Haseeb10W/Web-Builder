'use client'

import { settingFieldProps } from '@/types/settingsSchema'
import { SketchPicker } from 'react-color';

import React, { useCallback, useEffect, useState } from 'react'
import useElementPosiiton from '@/hooks/useElementPosition';
import { useSettingType } from '@/contexts/settingsType';
import useDocumentClick from '@/hooks/useDocumentClick';
import { get } from 'http';
import ResponsiveComponents from './ResponsiveComponents';


export default function ColorField({props, change}:settingFieldProps) {
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);
  const [color, setColor] = useState('');
  const [elementRef , position, getPosition] = useElementPosiiton<HTMLDivElement>(false);
  const {dragDrop} = useSettingType()
  const clickRef = useDocumentClick(()=>setPickerOpen(false)) 
  const [colorNot, setColorNot] = useState(false)
  const [pickerStyle,setPickerStyle] = useState<React.CSSProperties>({})

  // console.log(position)


  useEffect(()=>{
  
    
    if(!props?.value ){
      // console.log('hello')
      setColor('#ffffff')
      setColorNot(true)
      return 

    }
    // console.log(props?.value)
    // if(props?.value == 'rgba(0,0,0,1)' ){
    //   setColorNot(true)
      
    //   return

    // }
    // console.log(props?.value)
    setColor(props?.value)
    setColorNot(false)

  }, [props?.value])


  

  const handleColorChange= (value:any)=>{
    
    
    const rgbaColor = value.rgb;
    const newColor = `rgba(${rgbaColor.r},${rgbaColor.g},${rgbaColor.b},${rgbaColor.a})`;
    // console.log(newColor)
    // setColor(newColor)

    const currentValue = {
      status : props?.currentStatus,
      responsive : props?.responsive || 'on',
      value : newColor
    }
    const finalValue = JSON.stringify(currentValue)

    change?.(finalValue)

  }

  const swatches = ['red', 'blue', 'yellow', 'transparent', 'white' ]

  useEffect(()=>{
    dragDrop && setPickerOpen(false)
  },[dragDrop])

  const handlePickerOpen = useCallback(()=>{

    
    getPosition()
    setPickerOpen(!pickerOpen)
    colorPicker()
    

  }, [getPosition, position.top, pickerOpen])

  const colorPicker = () =>{
    const height = window.innerHeight - position?.top
    // console.log(height)
    if(height > 300){
      setPickerStyle({top: position?.top + 25})

    }
    else{
      setPickerStyle({bottom:`calc(100% - ${position?.top}px)`})
    }

  }




  return (
    
    <>
    {props?.tabOpen && (
    <div className={`flex gap-2 mt-3 !w-[97%] `}>
      <div className='flex gap-x-1.5'>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
      </div>

    <div ref={clickRef} className="!relative rounded-sm w-5 h-5 border border-gray-300 ml-auto">
      <div ref={ elementRef } className="color relative rounded-sm  w-full h-full mr-4 cursor-pointer" style={{backgroundColor: color}} onClick={handlePickerOpen} > 
        {
          colorNot && (
            <hr className={`w-full h-1 transform rotate-45 text-gray-500 absolute top-[45%] left-0`}/>
          )

        }
        
        
      </div>
      

      {
        pickerOpen && (

          <div className={`fixed  z-9999 `} style={{
            ...pickerStyle ,
            left: `${position?.left- 170}px`
          }}>
          <SketchPicker 
          color={color} 
          presetColors = {swatches}
          onChangeComplete={(newColor) => handleColorChange(newColor)}
          
          />
          

          </div>

        )
      }
      </div>
      
      
      
    </div>
    )}
    </>
  )
}
