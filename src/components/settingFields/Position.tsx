"use client"
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useState } from 'react'
import SelectField from './selectField'
import IconField from './IconField';

const horizentalOrientation = {
        label: "Horizental Orientation", 
        labelId: "horizental-orientation",
        data: [
          {name: 'hLeft', value: 'start', title: "Start"},
          {name: 'vCenter', value: 'center', title: "Center"},
        ],
        for : 'vAlignChange',
        tab: 'alignment',
        tabOpen: true
}

export default function Position({props,change}: settingFieldProps ) {
  const [horizental,setHorizental] = useState(horizentalOrientation);
  const [position,setPosition] = useState("");
  const handlePositionChange = (value:any) =>{
        setPosition(value)
    }
    
  const handleHorizentalChange = (value:any) =>{
    setHorizental((prev:any)=>({...prev,value:value}))
  }



  return (
    <>
     <SelectField props={props} change={(value:any)=>handlePositionChange(value)}/>
      {position === "absolute" || position === "sticky" || position === "fixed" ? (
        <>
         <IconField props={horizental} change={(value:any)=>handleHorizentalChange(value)}/>
        </>
      ): null}
    </>
  )
}
