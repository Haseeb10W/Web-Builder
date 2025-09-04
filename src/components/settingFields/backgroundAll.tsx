'use client'

import { settingFieldProps } from "@/types/settingsSchema";
import { useEffect, useState } from "react";
import SelectField from "./selectField";
import ColorField from "./colorField";
import Image from "./Image";
import { lang } from "jodit/esm/core/constants";
import Gradient from "./Gradient";
import Video from "./Video";
import PseudoStatus from "./pseudoStatus";


const colorpros ={
        label: "Background Color", 
        // labelId: "bgcolor-text",
        value: '',
        tab: '',
        tabOpen: true,
        currentStatus : 'normal',
        statuses : ['normal', 'hover'],
        responsive: 'on',
      
        }  

const pseudo ={
    // tabOpen: true,
    statusOptions : [
      {name: 'Normal', value: 'normal' },
      {name: 'Hover', value: 'hover' },
      // {name: 'Active', value: 'active' },
    ],
    value: 'normal',
    tabOpen:true,
    currentStatus : 'normal',
    statuses : ['normal', 'hover']
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
  responsive: 'on',
  currentStatus : 'normal',
  statuses : ['normal', 'hover']
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
  ],
  responsive: 'on'
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
  ],
  responsive: 'on'
}



const bgAttachment = {
  label: "Effects",
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
  ],
  responsive: 'on'
}

const bgImagePros ={
  label : "Background Image",
  value:"",
  tab:"",
  tabOpen: true
}

const bgImageHover ={
  label : "Background Image",
  value:"",
  tab:"",
  tabOpen: true
}


// /coffee.jpg

export default function BackgroundAll({props, change}:settingFieldProps) {

  const [tabOpen,setTabOpen] = useState(false)
  const [bgSizeProps, setBgSizeProps] = useState(bgSize)
  const [bgRepeatProps, setBgRepeatProps] = useState(bgRepeat)
  const [bgHoverImage,setBgHoverImage] = useState(bgImageHover)
  const [bgType, setBgType] = useState({})
  const [pseudoProps,setPseudoProps] = useState(pseudo)
  const [colorProps,setColorProps] = useState(colorpros)
  const [bgImageProps,setBgImageProps] = useState(bgImagePros)
  const [bgPositionProps,setBgPositionProps] = useState(bgPosition)
  const [bgAttachmentProps,setBgAttachmentProps] = useState(bgAttachment)


  const selectImage = pseudoProps?.value == "hover" ? bgHoverImage : bgImageProps; 

 
  useEffect(()=>{
    
    const allValues = JSON.parse(props?.value)
    // console.log(allValues); 

    if(allValues.backgroundColor  && allValues.backgroundColor !== ""){

      setBgType('color')
    }else if(allValues.backgroundImage && allValues.backgroundImage !== ""){
      setBgType('image')
    }else if(allValues.background && allValues.background !== ""){
      setBgType('gradient')
    }else{
      setBgType("")
    }

    

  }, [props?.value])

  const handleTypeChange = (value:any)=>{
    const fullValue = JSON.parse(value);
    const typebg = fullValue.value
    setBgType(typebg)

  }

  const handleColorValue = (value:string)=>{ 
    console.log(value);
    setColorProps((prev:any)=>({
        ...prev,
        value:value
    }))
    console.log(colorProps)
  }

  const handleBgRepeat = (value:any) =>{
    // console.log(value);
    setBgRepeatProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  const handleBgSize = (value:any) =>{
    // console.log(value);
    setBgSizeProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }
 const handleBgAttachment = (value:any) =>{
  // console.log(value);
  setBgAttachmentProps((prev:any)=>({
      ...prev,
      value:value
  }))
}

  const handleBgPosition = (value:any) =>{
    // console.log(value);
    setBgPositionProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  // const handleBgImageValue = (value:string)=>{ 
  //   // console.log(value);
  //   const imgValue = {...bgImageProps}

  //   imgValue.value = value;

  //   setBgImageProps(imgValue);

  // }


  const handleSelectImage = (value:string)=>{
    // console.log(value);
    if(pseudoProps?.value == "hover"){
      setBgHoverImage((prev:any)=>({
        ...prev,
        value:value
      }))
    }else{
      setBgImageProps((prev:any)=>({
        ...prev,
        value:value
      }))
    }
  }

  useEffect(()=>{
    let fullValue : {[key: string]: any} = {
      backgroundValues : {
      'background-color': '',
      'background-image': '',
      'background-repeat': '',
      'background-size': '',
      'background-position': '',
      'background-attachment': '',
      'background': '',
      'background-hover': ''

      },
      
       status : props?.currentStatus,
       responsive : props?.responsive || 'on',

    };
    

    if(bgType == 'color' ){
      
      fullValue['background-color'] = JSON.parse(colorProps?.value).value
      fullValue.responsive = JSON.parse(colorProps?.value).responsive
      
    }else if(bgType == 'image'){
      
    }



    


    change?.(JSON.stringify(fullValue))

  }, [colorProps?.value])

  const handlePseudoValue = (value:any) =>{

     setPseudoProps((prev:any)=>({
        ...prev,
        value:value
    }))

  }

  return (
    <>

    <SelectField props={props} change={(value:any)=>handleTypeChange(value)}></SelectField>
    
  {props?.tabOpen && bgType === 'color' &&  (
  <>
    

      {
       pseudoProps?.value == "normal" || pseudoProps?.value == "hover" ?
       (<ColorField props={colorProps} change={(value:any)=>handleColorValue(value)}/>):
       ''
      }
    
  </>
)}

    
    {props?.tabOpen && bgType == 'image' &&  (
      <>
      <PseudoStatus props={pseudoProps} change={(value:any)=>handlePseudoValue(value)}/>
      {pseudoProps?.value == "normal" || pseudoProps?.value == "hover" ? (<>
            <Image props={selectImage} change={(value:any)=>handleSelectImage(value)} />
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
      </>) : ''}
      </>
    )}



      {
       props?.tabOpen && bgType == "gradient" && ( <>
      <PseudoStatus props={pseudoProps} change={(value:any)=>handlePseudoValue(value)}/>
      
       { pseudoProps?.value == "normal" || pseudoProps?.value == "hover" ? <Gradient /> :'' }
       </>         
      )
      }

    
     {
      props?.tabOpen && bgType == "video" && (
      <>
      <Video />
      </>
      )
     }


    </>
  )

}