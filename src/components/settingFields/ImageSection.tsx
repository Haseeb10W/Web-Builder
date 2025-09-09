import React, { use, useEffect, useState } from 'react'
import Image from './Image'
import { settingFieldProps } from '@/types/settingsSchema'
import SelectField from './selectField';

const imageFit = {
  label: "Object Fit",
  value: "",
  tabOpen: true,
  tab: "",
  options: [
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
      value: 'fill'
    },
    {
      label: 'Scale-down',
      value: 'scale-down'
    }
  ],
  responsive: 'on'
}

const imgPositions = {
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

export default function ImageSection({props,change}: settingFieldProps) {
    const [imageData, setImageData] = useState<any>('');
    const [objFit, setObjFit] = useState(imageFit);
    const [imgPosition,setImgPosition] = useState(imgPositions);
    // console.log("fitData",objFit);
    // console.log("imageData",imageData);
    useEffect(() => {
      setImageData(props)
    }
    ,[])

    const handleSelectImage = (value: string) => {
        console.log("value",value);
        setImageData((prev:any)=> ({...prev, value:value}));

    };
  

    const handleFitImage = (value:string) => {
      console.log("value",value);
        setObjFit((prev:any)=> ({...prev, value:JSON.parse(value).value}));
    }


   const handleImgPosition = (value:string) => {
      console.log("value",value);
        setImgPosition((prev:any)=> ({...prev, value:JSON.parse(value).value}));
    }


  return (
    <>
    <Image props={imageData} change={(value:any)=>handleSelectImage(value)}/>
      {imageData?.value && (
        <>
      <SelectField props={objFit} change={(value:any)=>handleFitImage(value)}/>
      <SelectField props={imgPosition} change={(value:any)=>handleImgPosition(value)}/>
        </>
      )
      }
    </>
  )
}
