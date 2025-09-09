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
  tabOpen: true, 
  responsive : 'on'
}


const bggradientProps ={
  label : "Background Image",
  value:"",
  tab:"",
  tabOpen: true, 
  responsive : 'on'
}



// /coffee.jpg

export default function BackgroundAll({props, change}:settingFieldProps) {

  const [tabOpen,setTabOpen] = useState(false)
  const [bgSizeProps, setBgSizeProps] = useState(bgSize)
  const [bgRepeatProps, setBgRepeatProps] = useState(bgRepeat)
  // const [bgHoverImage,setBgHoverImage] = useState(bgImageHover)
  const [bgType, setBgType] = useState<{[key: string]: any } | undefined>(undefined)
  const [colorProps,setColorProps] = useState<{[key: string]: any } | undefined>(colorpros)
  const [bgImageProps,setBgImageProps] = useState(bgImagePros)
  const [bgPositionProps,setBgPositionProps] = useState(bgPosition)
  const [bgAttachmentProps,setBgAttachmentProps] = useState(bgAttachment)
  




  // const selectImage = pseudoProps?.value == "hover" ? bgHoverImage : bgImageProps; 
  


 
 
  useEffect(()=>{
    
    if(props ){
       setBgType({...props, value: ''})

      if(props.value){

      

    const allValues = JSON.parse(props?.value)
    // console.log(allValues); 
    
    if(allValues.backgroundColor  && allValues.backgroundColor !== ""){
      // console.log('background run')
      
      setAllBackground(allValues, 'color')
    }else if(allValues.backgroundImage && allValues.backgroundImage !== ""){
      setAllBackground(allValues, 'image')
      
    }else if(allValues.background && allValues.background !== ""){
      setAllBackground(allValues, 'gradient')
      
      
    }

    }
  }

  }, [props, props?.value])

  const setAllBackground = (allValues:any, bgType:string)=>{
      setBgType( {...props , value : bgType})
      setColorProps({...colorpros, value: allValues.backgroundColor })
      setBgImageProps({...bgImagePros, value: allValues.backgroundImage })
      setBgRepeatProps({...bgRepeatProps, value: allValues.backgroundRepeat})
      setBgSizeProps({...bgSizeProps, value: allValues.backgroundSize})
      setBgPositionProps({...bgPositionProps, value: allValues.backgroundPosition})
      setBgAttachmentProps({...bgAttachmentProps, value: allValues.backgroundAttachment})
      // setBgAttachmentProps({...bgAttachmentProps, value: allValues.backgroundAttachment})
  }

  const handleTypeChange = (value:any)=>{
    const fullValue = JSON.parse(value);
    const typebg = fullValue.value
    setBgType(prev=> ({
      ...prev, value: typebg
    }))

    if(typebg == ''){

      const fullValue = {
      backgroundValues : {
      'background-color': '',
      'background-image': '',
      'background-repeat': '',
      'background-size': '',
      'background-position':  '',
      'background-attachment':  '',
      'background': '',
      

      },
       status : props?.currentStatus,
       responsive :  'on',


      }
      change?.(JSON.stringify(fullValue))

    }

    



  }

  const handleColorValue = (value:string)=>{ 
    // console.log(value);

    if(bgType?.value == 'color'){

      // console.log(value)

      const colorValue = JSON.parse(value).value
      // console.log(colorValue)
      const responsivness = JSON.parse(value).responsive


      const fullValue = {
      backgroundValues : {
      'background-color': colorValue,
      'background-image': '',
      'background-repeat': '',
      'background-size': '',
      'background-position': '',
      'background-attachment': '',
      'background': '',
      'background-hover': ''

      },
       status : props?.currentStatus,
       responsive : responsivness || 'on',


      }
      change?.(JSON.stringify(fullValue))

    }
  
  }

  const handleBgRepeat = (value:any) =>{
    
    if(bgType?.value == 'image'){

      // console.log(value)

      const repeatValue = JSON.parse(value).value
      // console.log(colorValue)
      const responsivness = JSON.parse(value).responsive


      const fullValue = {
      backgroundValues : {
      'background-color': '',
      'background-image': bgImageProps.value ,
      'background-repeat': repeatValue ,
      'background-size': bgSizeProps.value || '',
      'background-position': bgPositionProps.value || '',
      'background-attachment': bgAttachmentProps.value || '',
      'background': '',
      

      },
       status : props?.currentStatus,
       responsive : responsivness || 'on',


      }
      change?.(JSON.stringify(fullValue))

    }

  }

  const handleBgSize = (value:any) =>{
    // console.log(value);
     if(bgType?.value == 'image'){


      const sizeValue = JSON.parse(value).value
      // console.log(colorValue)
      const responsivness = JSON.parse(value).responsive


      const fullValue = {
      backgroundValues : {
      'background-color': '',
      'background-image': bgImageProps.value ,
      'background-repeat': bgRepeatProps.value ,
      'background-size': sizeValue ,
      'background-position': bgPositionProps.value || '',
      'background-attachment': bgAttachmentProps.value || '',
      'background': '',
      

      },
       status : props?.currentStatus,
       responsive : responsivness || 'on',


      }
      change?.(JSON.stringify(fullValue))

    }
  }
 const handleBgAttachment = (value:any) =>{
  
  if(bgType?.value == 'image'){


      const attachmentValue = JSON.parse(value).value
      // console.log(colorValue)
      const responsivness = JSON.parse(value).responsive


      const fullValue = {
      backgroundValues : {
      'background-color': '',
      'background-image': bgImageProps.value ,
      'background-repeat': bgRepeatProps.value ,
      'background-size': bgSizeProps.value || '' ,
      'background-position': bgPositionProps.value || '',
      'background-attachment': attachmentValue || '',
      'background': '',
      

      },
       status : props?.currentStatus,
       responsive : responsivness || 'on',


      }
      change?.(JSON.stringify(fullValue))

    }
}

  const handleBgPosition = (value:any) =>{
    if(bgType?.value == 'image'){


      const positionValue = JSON.parse(value).value
      // console.log(colorValue)
      const responsivness = JSON.parse(value).responsive


      const fullValue = {
      backgroundValues : {
      'background-color': '',
      'background-image': bgImageProps.value ,
      'background-repeat': bgRepeatProps.value ,
      'background-size': bgSizeProps.value || '' ,
      'background-position': positionValue || '',
      'background-attachment': bgAttachmentProps.value || '',
      'background': '',
      

      },
       status : props?.currentStatus,
       responsive : responsivness || 'on',


      }
      change?.(JSON.stringify(fullValue))

    }
  }

  const handleBgImageValue = (value:string)=>{ 
    // console.log(value);
    if(bgType?.value == 'image'){

      // console.log(value)

      const imageValue = JSON.parse(value).value
      // console.log(colorValue)
      const responsivness = JSON.parse(value).responsive


      const fullValue = {
      backgroundValues : {
      'background-color': '',
      'background-image': imageValue,
      'background-repeat': bgRepeatProps.value || '',
      'background-size': bgSizeProps.value || '',
      'background-position': bgPositionProps.value || '',
      'background-attachment': bgAttachmentProps.value || '',
      'background': '',
      

      },
       status : props?.currentStatus,
       responsive : responsivness || 'on',


      }
      change?.(JSON.stringify(fullValue))

    }

  }






 

  return (
    <>

    <SelectField props={bgType} change={(value:any)=>handleTypeChange(value)}></SelectField>
    
  {props?.tabOpen && bgType?.value === 'color' &&  (
  <>
      <ColorField props={colorProps} change={(value:any)=>handleColorValue(value)}/>

    
  </>
)}

    
    {props?.tabOpen && bgType?.value == 'image' &&  (
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
       props?.tabOpen && bgType?.value == "gradient" && (  <Gradient />  
            
      )
      }

    
     {
      props?.tabOpen && bgType?.value == "video" && (
      <>
      <Video />
      </>
      )
     }


    </>
  )

}