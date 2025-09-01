"use client"
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useState } from 'react'
import SelectField from './selectField'
import HalfSpace from './HalfSpace'

const translat = {
      label: "Translate",
      for : '',
      tab: '',
      unitOption:[
       {name: "pixels", value: "px"},
       {name: "percet", value: "%"},
      ],
      unitValue:'px',
      showUnit:true,
      selectUnit:true,
      tabOpen: true  
}

const rotat = {
      label: "Rotate",
      unitValue:'deg',
      showUnit:true,
      selectUnit:false,
      tabOpen: true  
}

const scal = {
     label: "Scale",
      unitValue:'',
      showUnit:false,
      selectUnit:false,
    tabOpen: true  
}

export default function Transform({props,change}: settingFieldProps) {
     console.log(props)
    const [transform,setTransform] = useState('')
    const [translate,setTranslate] = useState(translat)
    const [rotate,setRotate] = useState(rotat)
    const [scale,setScale] = useState(scal)
    const handleTransformChange = (value:any) =>{
        setTransform(value)
    }

    const handleTranslateChange = (value:any) =>{
     setTranslate((prev:any)=>({...prev,
        value: value
     }))
    }
     
    const handlRotateChange = (value:any) =>{
       setRotate((prev:any)=>({...prev,
        value:value
       }))
    }

    const handleScaleChange = (value:any) =>{
        setScale((prev:any)=>({...prev,
            value:value
        }))
    }

  return (
    <>
       <SelectField props={props} change={(value:any)=>handleTransformChange(value)}/>
        {props?.tabOpen && transform == "on" && (
            <>
            <HalfSpace props={translate} change={(value:any)=>handleTranslateChange(value)}/>
            <HalfSpace props={rotate} change={(value:any)=>handlRotateChange(value)}/>
            <HalfSpace props={scale} change={(value:any)=>handleScaleChange(value)}/>
            </>
        )}
      
    </>
  )
}
