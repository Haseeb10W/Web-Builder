'use client'

import { settingFieldProps } from "@/types/settingsSchema";
import { useEffect, useState } from "react";
import SelectField from "./selectField";
import ColorField from "./colorField";
import Image from "./Image";
import { lang } from "jodit/esm/core/constants";
import Gradient from "./Gradient";
import Video from "./Video";


const colorpros ={
        label: "Background Color", 
        // labelId: "bgcolor-text",
        value: '',
        tab: '',
        tabOpen: true
      
        }  

const bgRepeat = {
  label:"Background Repeat",
  value:"",
  tab:"",
  options:[
    {
       label: 'No Repeat',
       value: 'no-repeat'
    },
    {
       label: 'Repeat',
       value: 'repeat'
    },
    {
       label: 'Repeat X',
       value: 'repeat-x'
    },
    {
       label: 'Repeat Y',
       value: 'repeat-y'
    }
  ],
  tabOpen: true,
}

const bgSize = {
  label:"Background Size",
  value:"",
  tabOpen: true,
  tab:"",
  options:[
    {
      label: 'Cover',
      value: 'cover'
    },
    {
      label: 'Contain',
      value: 'contain'
    },
    {
      label: 'Fill',
      value: '100% 100%'
    }
  ]
}

const bgPosition = {
  label: "Background Position",
  value: "",
  tabOpen: true,
  tab: "",
  options: [
    {
      label: 'Left Top',
      value: 'left top'
    },
    {
      label: 'Left Center',
      value: 'left center'
    },
    {
      label: 'Left Bottom',
      value: 'left bottom'
    },
    {
      label: 'Right Top',
      value: 'right top'
    },
    {
      label: 'Right Center',
      value: 'right center'
    },
    {
      label: 'Right Bottom',
      value: 'right bottom'
    },
    {
      label: 'Center Top',
      value: 'center top'
    },
    {
      label: 'Center Center',
      value: 'center center'
    },
    {
      label: 'Center Bottom',
      value: 'center bottom'
    }
  ]
}



const bgAttachment = {
  label: "Background Attachment",
  value: "",
  tabOpen: true,
  tab: "",
  options: [
    {
      label: 'Scroll',
      value: 'scroll'
    },
    {
      label: 'Fixed',
      value: 'fixed'
    },
    {
      label: 'Local',
      value: 'local'
    }
  ]
}

const bgImagePros ={
  label : "Background Image",
  value:"/coffee.jpg",
  tab:"",
  tabOpen: true
}



// /coffee.jpg

export default function BackgroundAll({props, change}:settingFieldProps) {

  const [tabOpen,setTabOpen] = useState(false)
  const [bgSizeProps, setBgSizeProps] = useState(bgSize)
  const [bgRepeatProps, setBgRepeatProps] = useState(bgRepeat)
  const [bgType, setBgType] = useState({})
  const [colorProps,setColorProps] = useState(colorpros)
  const [bgImageProps,setBgImageProps] = useState(bgImagePros)
  const [bgPositionProps,setBgPositionProps] = useState(bgPosition)
  const [bgAttachmentProps,setBgAttachmentProps] = useState(bgAttachment)

  // const options = [
  //     {label: 'Color', value: 'color'},
  //     {label: 'Image', value: 'image'},
  //     {label: 'Gradient', value: 'gradient'},
  //     {label: 'video', value: 'video'},      
  // ]

  useEffect(()=>{

    setTabOpen(props?.tabOpen? true : false)

  }, [props?.tabOpen, props])

  const handleTypeChange = (value:any)=>{
    console.log(value)
    setBgType(value)

  }

  const handleColorValue = (value:string)=>{ 
    console.log(value);
    setColorProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  const handleBgRepeat = (value:any) =>{
    console.log(value);
    setBgRepeatProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  const handleBgSize = (value:any) =>{
    console.log(value);
    setBgSizeProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }
 const handleBgAttachment = (value:any) =>{
  console.log(value);
  setBgAttachmentProps((prev:any)=>({
      ...prev,
      value:value
  }))
}

  const handleBgPosition = (value:any) =>{
    console.log(value);
    setBgPositionProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  const handleBgImageValue = (value:string)=>{ 
    console.log(value);
    const imgValue = {...bgImageProps}

    imgValue.value = value;

    setBgImageProps(imgValue);

  }
  return (
    <>

    <SelectField props={props} change={(value:any)=>handleTypeChange(value)}></SelectField>
    
    {
     tabOpen && bgType == 'color' &&  (
        <ColorField  props={colorProps} change={(value:any)=>handleColorValue(value)}/>
      )
    }
    
    {
   tabOpen && bgType == 'image' && (
      <>
      <Image props={bgImageProps} change={(value:any)=>handleBgImageValue(value)} />

      {
        bgImageProps?.value && (
          <>
          <SelectField props={bgRepeatProps} change={(value:any)=>handleBgRepeat(value)}></SelectField>
          <SelectField props={bgSizeProps} change={(value:any)=>handleBgSize(value)}></SelectField>
          <SelectField props={bgPositionProps} change={(value:any)=>handleBgPosition(value)}></SelectField>
          <SelectField props={bgAttachmentProps} change={(value:any)=>handleBgAttachment(value)}></SelectField>

          </>
        )
      }
      

      </>
    )}



      {
       tabOpen && bgType == "gradient" && ( 
        <>
        <Gradient />        
        </>
      )
      }

    
     {
      tabOpen && bgType == "video" && (
      <>
      <Video />
      </>
      )
     }


    </>
  )

}