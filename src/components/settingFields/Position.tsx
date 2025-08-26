"use client"
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useState } from 'react'
import SelectField from './selectField'
import TextField from './TextField';
import { validate } from 'uuid';

const horizentalOrientation = {
        label: "Horizental Orientation", 
        labelId: "horizental-orientation",
        data: [
          {name: 'vStart', value: 'start', title: "Start"},
          {name: 'vCenter', value: 'center', title: "Center"},
        ],
        for : 'vAlignChange',
        tab: 'alignment',
        tabOpen: true
}

export default function Position({props,change}: settingFieldProps ) {

  const [position,setPosition] = useState("");
  const handlePositionChange = (value:any) =>{
        setPosition(value)
    }
    



  return (
    <>
     <SelectField props={props} change={(value:any)=>handlePositionChange(value)}/>
      {position === "absolute" || position === "sticky" || position === "fixed" ? (
        <>
         <SelectField props={props} change={(value:any)=>handlePositionChange(value)}/>
        </>
      ): null}
    </>
  )
}
