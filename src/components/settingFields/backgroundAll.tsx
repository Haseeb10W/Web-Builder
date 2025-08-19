'use client'

import { settingFieldProps } from "@/types/settingsSchema";
import { useEffect, useState } from "react";
import SelectField from "./selectField";




export default function BackgroundAll({props, change}:settingFieldProps) {
  const [bgProps, setBgProps] = useState({})
  const [bgType, setBgType] = useState({})

  const options = [
      {label: 'Color', value: 'color'},
      {label: 'Image', value: 'image'},
      {label: 'Gradient', value: 'gradient'},
      {label: 'video', value: 'video'},      
  ]

  useEffect(()=>{
    console.log(props)
    const prop = {...props};

    prop.options = [...options]
    console.log(prop)

    setBgProps(prop)




  }, [props?.tabOpen, props])

  const handleTypeChange = (value:any)=>{
    console.log(value)
    setBgType(value)

  }

  return (
    <>

    <SelectField props={bgProps} change={(value:any)=>handleTypeChange(value)}></SelectField>
    

    </>
  )

}