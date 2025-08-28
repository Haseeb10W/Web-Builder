"use client"
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import SelectField from './selectField'
import IconField from './IconField';
import RangeField from './RangeField';
import SizeField from './sizeField';

const horizentalOrientation = {
        label: "Horizental Orientation", 
        labelId: "horizental-orientation",
        defaultNot: true,
        value:"left",
        options: [
          {label: 'Left', value: 'left'},
          {label: 'Right', value: 'right'},
        ],
        responsive:'on',
        for :'directionChange',
        tab: '',
        tabOpen: true
}

const horiOffset = {
        label: "Horizental Offset", 
        labelId: "horizental-offset",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
        ],
        for : 'widthSizeChange',
        tab: 'layout',
        tabOpen: true
  }

const verticalOrientation = {
        label: "Vertical Orientation", 
        labelId: "vertical-orientation",
        defaultNot: true,
        value:"top",
        options: [
          {label: 'Top', value: 'top'},
          {label: 'Bottom', value: 'bottom'},
        ],
        responsive:'on',
        for :'directionChange',
        tab: '',
        tabOpen: true
  }

  const vertiOffset = {
        label: "Vertical Offset", 
        labelId: "vertical-offset",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
        ],
        for : 'widthSizeChange',
        tab: 'layout',
        tabOpen: true
  }

export default function Position({props,change}: settingFieldProps ) {
  const [horizental,setHorizental] = useState(horizentalOrientation);
  const [vertical,setVertical] = useState(verticalOrientation);
  const [hOffset,sethOffset] = useState(horiOffset);
   const [vOffset,setvOffset] = useState(vertiOffset);
  const [position,setPosition] = useState("");
  const handlePositionChange = (value:any) =>{
        setPosition(value)
    }
    

  const handleHorizentalChange = (value:any) =>{
    setHorizental((prev:any)=>({...prev,value:value}))
  }
  
  const handleVerticalChange = (value:any) =>{
    setVertical((prev:any)=>({...prev,value:value}))
  }

  const handleHOffset = (value:any)=>{
    sethOffset((prev:any)=>({...prev,
      value:value
    }))
  }
  
  const handleVOffset = (value:any)=>{
   setvOffset((prev:any)=>({...prev,
      value:value
    }))
  }

  return (
    <>
     <SelectField props={props} change={(value:any)=>handlePositionChange(value)}/>
      { props?.tabOpen && (
           position === "absolute" || position === "sticky" || position === "fixed" ? (
        <>
         <SelectField props={horizental} change={(value:any)=>handleHorizentalChange(value)}/>
         <SizeField props={hOffset} change={(value:any)=>handleHOffset(value)}/>
         <SelectField props={vertical} change={(value:any)=>handleVerticalChange(value)}/>
        <SizeField props={vOffset} change={(value:any)=>handleVOffset(value)}/>
        </>
      ): null)
      }
    </>
  )
}
