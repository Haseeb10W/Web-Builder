'use client'

import { settingFieldProps } from '@/types/settingsSchema'
import { SketchPicker } from 'react-color';

import React, { useEffect, useState } from 'react'
import useElementPosiiton from '@/hooks/useElementPosition';
import { useSettingType } from '@/contexts/settingsType';
import useDocumentClick from '@/hooks/useDocumentClick';


export default function ColorField({props, change}:settingFieldProps) {
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);
  const [color, setColor] = useState('');
  const [elementRef , position, getPosition] = useElementPosiiton<HTMLDivElement>(false);
  const {dragDrop} = useSettingType()
  const clickRef = useDocumentClick(()=>setPickerOpen(false)) 
  const [colorNot, setColorNot] = useState(false)

  // console.log(position)


  useEffect(()=>{
    
    if(!props?.value ){
      // console.log('hello')
      setColor('#ffffff')
      setColorNot(true)
      return 

    }
    setColor(props?.value)
    setColorNot(false)

  }, [props?.value])

  const handleColorChange= (value:any)=>{
    
    const rgbaColor = value.rgb;
    const newColor = `rgba(${rgbaColor.r},${rgbaColor.g},${rgbaColor.b},${rgbaColor.a})`;
    // console.log(newColor)
    setColor(newColor)

    change?.(newColor)

  }

  const swatches = ['red', 'blue', 'yellow']

  useEffect(()=>{
    dragDrop && setPickerOpen(false)
  },[dragDrop])

  const handlePickerOpen = ()=>{
    getPosition()
    setPickerOpen(!pickerOpen)

  }


  return (
    
    <>
    {props?.tabOpen && (
    <div className={`flex gap-2 mt-3 !w-[97%] `}>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }

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
            top: `${position?.top + 25}px `, 
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
