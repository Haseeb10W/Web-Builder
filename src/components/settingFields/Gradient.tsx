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
      value: 'conic'
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

const ColorOne = {
  label:"Color1",
  tab:"",
  tabOpen: true,
  value:""
}
const ColorTwo = {
  label:"Color2",
  tab:"",
  tabOpen: true,
  value:""
}


const ColorThree = {
  label:"Color3",
  tab:"",
  tabOpen: true,
  value:""
}

const degree = {
  label: "Angle",
  tab: "",
  tabOpen: true,
  value: '',
  minVal: 0,
  maxVal: 360
}

const RadialSize = {
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

const RadialPostion = {
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
      const [colorOneProps, setColorOneProps] = useState(ColorOne)
      const [colorTwoProps, setColorTwoProps] = useState(ColorTwo)
      const [colorThreeProps, setColorThreeProps] = useState(ColorThree)
      const [bgDirectionProps, setBgDirectionProps] = useState(direction)
      const [bgPositionProps, setBgPositionProps] = useState(dPosition)
      const [degreeProps, setDegreeProps] = useState(degree)
      const [SizeRadialProps, setSizeRadialProps] = useState(RadialSize)
      const [shapeProps, setShapeProps] = useState(shape)
      const [radialPostionProps, setRadialPostionProps] = useState(RadialPostion)
      const [conicAngle,setConicAngle] = useState(degree)
      const [gradientStyle, setGradientStyle] = useState('');
      const [sendGradient, setSendGradient] = useState(0);
      const [gradientValueFull, setGradientValueFull] = useState<{
        type: string,
        direction: string,
        colorOne:string, 
        colorTwo:string, 
        colorThree : string
        position: string, 
        directionDegree: string, 
        conicAngle: string,
        radialSize: string,
        shape: string,
        radialPostion: string
    
        }>({type: 'linear', direction: '', colorOne:'', colorTwo:'',colorThree: '', position: '', directionDegree: '', conicAngle: '', radialSize: '', shape: '', radialPostion: '' })


        useEffect(()=>{

          if(props?.value){

            const gradientValue = props?.value;

            const gradientType = gradientValue.split('-gradient(')[0];
            const gradientInner = gradientValue.split('-gradient(')[1].replace(/[)]/g, '').trim().split(',')[0]
            let regex =  /rgba\(.*?\)/g 
            let rgbaValues = gradientValue?.split('-gradient(')[1].match(regex)
            // console.log(rgbaValues);
            let gradientLinerDirection = '';
            let linearDirectionDegree  = '';
            let linearPosition = '';
            let radialSize = '';
            let conicAngle = '';
            let radialShape = '';
            let radialPosition = '';
            let colorOne = '';
            let colorTwo = '';
            let colorThree = '';


            if(rgbaValues && rgbaValues.length >= 1 ){

            if(gradientType == 'linear' || gradientType == 'radial'){
              
              if( rgbaValues.length >= 2){
                colorOne = rgbaValues[rgbaValues?.length - 2]
                colorTwo = rgbaValues[rgbaValues?.length - 1]

              }else{
                colorOne = rgbaValues[rgbaValues?.length - 1]
              }
              

            }else if(gradientType == 'conic'){
              if(rgbaValues.length >=3){
              colorOne = rgbaValues[rgbaValues?.length - 3]
              colorTwo = rgbaValues[rgbaValues?.length - 2]
              colorThree = rgbaValues[rgbaValues?.length - 1]
              }else if(rgbaValues.length >=2){
                colorOne = rgbaValues[rgbaValues?.length - 2]
                colorTwo = rgbaValues[rgbaValues?.length - 1]

                }else{
                  colorOne = rgbaValues[rgbaValues?.length - 1]
                }
              
            }

            }
            
            
            if(gradientType == 'linear'){
               linearDirectionDegree = gradientValue.split('-gradient(')[1].split('deg')[0]
              //  console.log("linearDirection", linearDirectionDegree)
              if(linearDirectionDegree.includes('to')){
                gradientLinerDirection = ""
                linearPosition = gradientInner.trim()
                
                
              }else{
                gradientLinerDirection = "degree"
                
                

              }
            }else if( gradientType == 'radial'){

              if(gradientInner.includes('circle')){
                radialShape = 'circle'
              }else {
                radialShape = 'ellipse'
              }

              if(gradientInner.includes('at')){
                radialSize = gradientInner.split(radialShape)[1].trim().split('at')[0].trim()
                radialPosition = `at ` + gradientInner.split('at')[1].trim()

              }else{
                radialSize = gradientInner.split(radialShape)[1].trim()
                radialPosition = ''
              }


            }else if(gradientType === 'conic'){

              conicAngle = gradientValue.split('conic-gradient(from ')[1].split('deg')[0] || ''
            }

            setGradientValueFull({
              type: gradientType,
              direction: gradientLinerDirection,
              colorOne: colorOne, 
              colorTwo: colorTwo, 
              colorThree: colorThree,
              position: linearPosition, 
              directionDegree: linearDirectionDegree, 
              conicAngle: conicAngle,
              radialSize: radialSize,
              shape: radialShape,
              radialPostion: radialPosition

            })

            setBgGradientProps({...bgGradient, value: gradientType})
            setBgDirectionProps({...direction, value: gradientLinerDirection || ""})
            setColorOneProps({...ColorOne, value: colorOne })
            setColorTwoProps({...ColorTwo, value: colorTwo })
            setBgPositionProps({...dPosition, value: linearPosition })
            setDegreeProps({...degree, value: linearDirectionDegree })
            setConicAngle({...degree, value: conicAngle })
            setSizeRadialProps({...RadialSize, value: radialSize})
            setShapeProps({...shape, value: radialShape})
            setRadialPostionProps({...RadialPostion, value: radialPosition})
            setColorThreeProps({...ColorThree, value: colorThree  })



          }else{
            setGradientValueFull({
              type: 'linear',
              direction: '',
              colorOne: '', 
              colorTwo: '', 
              colorThree: '',
              position: '', 
              directionDegree: '', 
              conicAngle: '',
              radialSize: '',
              shape: '',
              radialPostion: ''

            })
            setBgGradientProps(bgGradient)
            setBgDirectionProps(direction)
            setColorOneProps(ColorOne)
            setColorTwoProps(ColorTwo )
            setBgPositionProps(dPosition)
            setDegreeProps(degree)
            setConicAngle(degree)
            setSizeRadialProps(RadialSize)
            setShapeProps(shape)
            setRadialPostionProps(RadialPostion)
            setColorThreeProps(ColorThree)
          }

          





        }, [props?.value])









   const updateGradientStyle = () =>{

    let gradientStyleString = ``;

   


    if (gradientValueFull.type === "linear") {


          if (gradientValueFull.direction === "degree") {
              gradientStyleString = `linear-gradient(${gradientValueFull.directionDegree}deg, ${gradientValueFull.colorOne}, ${gradientValueFull.colorTwo})`;
                
          } else {
              gradientStyleString = `linear-gradient(${gradientValueFull.position || "to right"}, ${gradientValueFull.colorOne}, ${gradientValueFull.colorTwo})`;
                
          }
    }

    if (gradientValueFull.type === "radial" ) {
         gradientStyleString = `radial-gradient(${gradientValueFull.shape || "ellipse"} ${gradientValueFull.radialSize || ""} ${gradientValueFull.radialPostion || ""}, ${gradientValueFull.colorOne}, ${gradientValueFull.colorTwo})`;
 
    }

    if (gradientValueFull.type === "conic" ) {
      gradientStyleString = `conic-gradient(from ${gradientValueFull.conicAngle}deg, ${gradientValueFull.colorOne}, ${gradientValueFull.colorTwo}, ${gradientValueFull.colorThree})`;

    }


    return gradientStyleString
   }

   useEffect(()=>{

      if(sendGradient ==  0 ) return ;

      const gradientValue  = updateGradientStyle();
      // console.log(gradientValue)
      // setGradientStyle(gradientValue)

      const sentValue = {
        status : props?.cuttentStatus || 'normal',
        value : gradientValue,
        responsive : props?.responsive || 'on'
      }
      change?.(JSON.stringify(sentValue))





   },[sendGradient])




  //  const makeGradientValue


    const handleGradient = (value:any) =>{
        // console.log(value);
        const gradientType = JSON.parse(value).value ;

        setGradientValueFull(prev=> ({...prev, type: gradientType }))
        setSendGradient(prev => prev + 1 )
        // setBgGradientProps((prev:any)=>({
        //     ...prev,
        //     value:gradientType
        // }))
        
    }
   
    const handleDirection = (value:any) =>{
      // console.log(value)
      const directionValue = JSON.parse(value).value ;
      setGradientValueFull(prev=> ({...prev, direction: directionValue }))
      // setSendGradient(prev => prev + 1 )

      setBgDirectionProps((prev:any)=>({
          ...prev,
          value:directionValue
      }))

    }


    const handleColorOne = (value:any) =>{
      const color1Value = JSON.parse(value).value ;
      setGradientValueFull(prev=> ({...prev, colorOne: color1Value }))
      setSendGradient(prev => prev + 1 )

      // setColorOneProps((prev:any)=>({
      //     ...prev,
      //     value:color1Value
      // }))
    }

   const handleColorTwo = (value:any) =>{
    const color2Value = JSON.parse(value).value ;
      setGradientValueFull(prev=> ({...prev, colorTwo: color2Value }))
      setSendGradient(prev => prev + 1 )

      // setColorTwoProps((prev:any)=>({
      //     ...prev,
      //     value:color2Value
      // }))
   }

   const handleColorThree = (value:any)=>{
    const color3Value = JSON.parse(value).value ;
      setGradientValueFull(prev=> ({...prev, colorThree: color3Value }))
      setSendGradient(prev => prev + 1 )
   }
  
   const handlePosition = (value:any) =>{
    const positionValue = JSON.parse(value).value ;
      setGradientValueFull(prev=> ({...prev,position: positionValue}))
      setSendGradient(prev => prev + 1 )

    // setBgPositionProps((prev:any)=>({
    //     ...prev,
    //     value:positionValue
    // }))
   }

   const handleDegree = (value:any) =>{
    // console.log(value)
    const degreeValue = JSON.parse(value).value ;
      setGradientValueFull(prev=> ({...prev, directionDegree: degreeValue }))
      setSendGradient(prev => prev + 1 )

    
      // setDegreeProps((prev:any)=>({
      //     ...prev,
      //     value:degreeValue
      // }))
  }

  // For Radial
  const handleRadialSize = (value:any) =>{
    // console.log(value)
    const radSizeValue = JSON.parse(value).value ;
    setGradientValueFull(prev=> ({...prev, radialSize: radSizeValue }))
    setSendGradient(prev => prev + 1 )

    // setSizeRadialProps((prev:any)=>({
    //     ...prev,
    //     value:radSizeValue
    // }))
  }

  const handleRadialShape = (value:any) =>{
    // console.log(value)
    const radShapeValue = JSON.parse(value).value ;
    setGradientValueFull(prev=> ({...prev, shape: radShapeValue }))
    setSendGradient(prev => prev + 1 )

    // setShapeProps((prev:any)=>({
    //     ...prev,
    //     value:radShapeValue
    // }))
  }

  const handleRadialPosition = (value:any) =>{
    // console.log(value)
    const radPositionValue = JSON.parse(value).value ;
    setGradientValueFull(prev=> ({...prev, radialPostion: radPositionValue }))
    setSendGradient(prev => prev + 1 )
    
    // setRadialPostionProps((prev:any)=>({
    //     ...prev,
    //     value:radPositionValue
    // }))
  }

  const handleConicAngle = (value:any) =>{
    const conAngleValue = JSON.parse(value).value ;
    setGradientValueFull(prev=> ({...prev, conicAngle: conAngleValue }))
    setSendGradient(prev => prev + 1 )

    // setConicAngle((prev:any)=>({
    //     ...prev,
    //     value:conAngleValue
    // }))
  }



  return (
    <>
    <div>
    <h3 className="text-sm text-gray-600">{props?.label}</h3>
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
      bgGradientProps?.value === 'conic' && (
        <>
          <RangeField props={conicAngle} change={(value:any)=>handleConicAngle(value)}/>
        </>
      )
    }
    <ColorField  props={colorOneProps} change={(value:any)=>handleColorOne(value)}/>
    <ColorField  props={colorTwoProps} change={(value:any)=>handleColorTwo(value)}/>
    {
      bgGradientProps?.value === 'conic' && (
        <ColorField  props={colorThreeProps} change={(value:any)=>handleColorThree(value)}/>
      )
    }
    </>
  )
}
