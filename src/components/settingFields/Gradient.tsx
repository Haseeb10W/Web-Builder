"use client"
import React, { useEffect, useState } from 'react'
import SelectField from './selectField';
import IconField from './IconField';
import { title } from 'process';
import ColorField from './colorField';
import RangeField from './RangeField';
import { settingFieldProps } from '@/types/settingsSchema';
const bgGradient = {
  label : "Gradient type",
  value: "linear",
  tabOpen: true,
  tab: "",
  defaultNot: true,
  options: [
    {
      label: 'Linear',
      value: 'linear'
    },
    {
      label: 'Radial',
      value: 'radial'
    },
    {
      label: 'Conic',
      value: 'Conic'
    }
  ],
  responsive:'on'
}


const direction = {
  label: "Direction",
  value: "",
  tabOpen: true,
  tab: "",
  options: [
    {
      label: 'Degree',
      value: 'degree'
    },
  ],
  responsive:'on'
}

const dPosition = {
  label:"Position",
  tab:"",
  value:"",
    data :[
    {
      name: 'rdirection',
      value: 'to right',
      title:'to right'
    },
    {
      name: 'ddirection',
      value: 'to bottom',
      title:'to bottom'
    },
    {
      name: 'ldirection',
      value: 'to left',
      title:'to left'
    },
    {
      name: 'tdirection',
      value: 'to top',
      title:'to top'
    }
  ],
  tabOpen: true
}

const colorOne = {
  label:"Color1",
  tab:"",
  tabOpen: true,
  value:""
}
const colorTwo = {
  label:"Color2",
  tab:"",
  tabOpen: true,
  value:""
}

const degree = {
  label: "Angle",
  tab: "",
  tabOpen: true,
  value: 0,
  minVal: 0,
  maxVal: 360
}

const radialSize = {
  label: "Radial Size",
  tab: "",
  value:"",
  tabOpen: true,
  options: [
    {
      label:'Close Side',
      value:'closest-side'
    },
    {
      label:'Far Side',
      value:'farthest-side'
    },
    {
      label:'Close Corner',
      value:'closest-corner'
    },
    {
      label:'Far Corner',
      value:'farthest-corner'
    }
]
}

const shape = {
  label: "Shape",
  tab: "",
  value:"",
  tabOpen: true,
  options: [
    {
      label:'Circle',
      value:'circle'
    },
    {
      label:'Ellipse',
      value:'ellipse'
    }
  ]
}

const radialPostion = {
  label:"Position",
  tab:"",
  tabOpen:true,
  value:"",
  options:[
    {
      label:'Top',
      value:'at top'
    },
    {
      label:'Top Left',
      value:'at top left'
    },
    {
      label:'Top Center',
      value:'at top center'
    },
    {
      label:'Top Right',
      value:'at top right'
    },
    {
      label:'Center',
      value:'at center'
    },
    {
      label:'Center Center',
      value:'at center center'
    },
    {
      label:'Right',
      value:'at right'
    },
    {
      label:'Right Center',
      value:'at right center'
    },
    {
      label:'Left',
      value:'at left'
    },
    {
      label:'Left Center',
      value:'at left center'
    },
    {
      label:'Bottom',
      value:'at bottom'
    },
    {
      label:'Bottom Left',
      value:'at bottom left'
    },
     {
      label:'Bottom Right',
      value:'at bottom right'
    },
    {
      label:'Bottom Center',
      value:'at bottom center'
    },

  ]
}
export default function Gradient({props, change}:settingFieldProps) {
      const [bgGradientProps, setBgGradientProps] = useState(bgGradient)
      const [colorOneProps, setColorOneProps] = useState(colorOne)
      const [colorTwoProps, setColorTwoProps] = useState(colorTwo)
      const [bgDirectionProps, setBgDirectionProps] = useState(direction)
      const [bgPositionProps, setBgPositionProps] = useState(dPosition)
      const [degreeProps, setDegreeProps] = useState(degree)
      const [SizeRadialProps, setSizeRadialProps] = useState(radialSize)
      const [shapeProps, setShapeProps] = useState(shape)
      const [radialPostionProps, setRadialPostionProps] = useState(radialPostion)
      const [conicAngle,setConicAngle] = useState(degree)
      const [gradientStyle, setGradientStyle] = useState('');

// const gradientStyle:any = {};

   const updateGradientStyle = () =>{
    if (bgGradientProps.value === "linear" && colorOneProps.value && colorTwoProps.value) {
  if (bgDirectionProps.value === "degree") {
    const gradientString = `linear-gradient(${degreeProps.value}deg, ${colorOneProps.value}, ${colorTwoProps.value})`;
    setGradientStyle(gradientString);
  } else {
    const gradientString = `linear-gradient(${bgPositionProps.value || "to right"}, ${colorOneProps.value}, ${colorTwoProps.value})`;
    setGradientStyle(gradientString);
  }
}

if (bgGradientProps.value === "radial" && colorOneProps.value && colorTwoProps.value) {
 const gradientString = `radial-gradient(${shapeProps.value || "circle"} ${SizeRadialProps.value || ""} ${radialPostionProps?.value || ""}, ${colorOneProps.value}, ${colorTwoProps.value})`;
 setGradientStyle(gradientString);
}

if (bgGradientProps.value === "Conic" && colorOneProps.value && colorTwoProps.value) {
  const gradientString = `conic-gradient(from ${conicAngle.value}deg, ${colorOneProps.value}, ${colorTwoProps.value})`;
  setGradientStyle(gradientString);
}
   }

   useEffect(()=>{
      updateGradientStyle();
   },[bgGradientProps.value, colorOneProps.value, colorTwoProps.value, bgDirectionProps.value, bgPositionProps.value, degreeProps.value, SizeRadialProps.value, shapeProps.value, radialPostionProps.value, conicAngle.value])





    const handleGradient = (value:any) =>{
        console.log(value);
        setBgGradientProps((prev:any)=>({
            ...prev,
            value:value
        }))
        
    }
   
    const handleDirection = (value:any) =>{
      setBgDirectionProps((prev:any)=>({
          ...prev,
          value:value
      }))

    }


    const handleColorOne = (value:any) =>{
      setColorOneProps((prev:any)=>({
          ...prev,
          value:value
      }))
    }

   const handleColorTwo = (value:any) =>{
      setColorTwoProps((prev:any)=>({
          ...prev,
          value:value
      }))
   }
  
   const handlePosition = (value:any) =>{
    setBgPositionProps((prev:any)=>({
        ...prev,
        value:value
    }))
   }

   const handleDegree = (value:any) =>{
    
      setDegreeProps((prev:any)=>({
          ...prev,
          value:value
      }))
  }

  const handleRadialSize = (value:any) =>{
    setSizeRadialProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  const handleRadialShape = (value:any) =>{
    setShapeProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  const handleRadialPosition = (value:any) =>{
    setRadialPostionProps((prev:any)=>({
        ...prev,
        value:value
    }))
  }

  const handleConicAngle = (value:any) =>{
    setConicAngle((prev:any)=>({
        ...prev,
        value:value
    }))
  }
  return (
    <>
    <div>
    <h3 className="text-sm text-gray-600">props?.label</h3>
    <div className='w-full h-16 border border-gray-200 mt-2' style={{background: props?.value}}></div>
    </div>
    <SelectField props={bgGradientProps} change={(value:any)=>handleGradient(value)}></SelectField>
    {
      bgGradientProps?.value === 'linear' && (
      <>
      <SelectField props={bgDirectionProps} change={(value:any)=>handleDirection(value)}></SelectField>
    {
      bgDirectionProps?.value === "" && (
        <IconField props={bgPositionProps} change={(value:any)=>handlePosition(value)}/>
      )
    }
    {
      bgDirectionProps?.value === "degree" && (
      <>
        <RangeField props={degreeProps} change={(value:any)=>handleDegree(value)}/>
      </>
      )
    } 
      </>
      )
    }

    {
       bgGradientProps?.value === 'radial' && (
        <>
        <SelectField props={shapeProps} change={(value:any)=>handleRadialShape(value)}></SelectField>
        <SelectField props={SizeRadialProps} change={(value:any)=>handleRadialSize(value)}></SelectField>
        <SelectField props={radialPostionProps} change={(value:any)=>handleRadialPosition(value)}></SelectField>

        </>
       )
    }

    {
      bgGradientProps?.value === 'Conic' && (
        <>
          <RangeField props={conicAngle} change={(value:any)=>handleConicAngle(value)}/>
        </>
      )
    }
    <ColorField  props={colorOneProps} change={(value:any)=>handleColorOne(value)}/>
    <ColorField  props={colorTwoProps} change={(value:any)=>handleColorTwo(value)}/>
    </>
  )
}
