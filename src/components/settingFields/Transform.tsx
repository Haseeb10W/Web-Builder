"use client"
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import SelectField from './selectField'
import HalfSpace from './HalfSpace'
import RangeField from './RangeField'
import { convertCommaToStrVal, convertStrToCommaVal } from '@/lib/stringFunctions'

const translat = {
      label: "Translate",
      for : '',
      tab: '',
      unitOption:[
       {name: "pixels", value: "px"},
       {name: "percet", value: "%"},
      ],
      unitValue:'px',
      showUnit:true,
      selectUnit:true,
      tabOpen: true  
}

const rotat = {
      label: "Rotate (deg)",
      minVal: -360,
      maxVal: 360,
      value: '',
      tabOpen: true  

}

const scal = {
     label: "Scale",
      unitValue:'',
      showUnit:false,
      selectUnit:false,
        tabOpen: true  
}

export default function Transform({props, change}: settingFieldProps) {
    //  console.log(props)
    const [transform, setTransform] = useState<{[key:string]: any}>({...props, value: ''})
    const [translate, setTranslate] = useState(translat)
    const [rotate, setRotate] = useState(rotat)
    const [scale, setScale] = useState(scal);
    const [sentTransform, setSentTransform] = useState(0)
    const [transformValue, setTransformValue] = useState<{
        rotateVal: string,
        translateVal: string,
        scaleVal: string,
        transformVal: "on" | 'off'
    }>({
        rotateVal: '',
        translateVal: '',
        scaleVal: '',
        transformVal: 'off'
    })


    useEffect(()=>{
        

        if(props?.value){
            setTransform({...props, value: props?.value})
        }else{
            setTransform({...props, value: ''})
        }

        

    }, [props?.value, props])



    useEffect(()=>{

        if(sentTransform > 0 ){


            let transformValueNow = ``;
            if(transformValue.transformVal == "on"){

                if( transformValue.rotateVal && transformValue.rotateVal !== ''){
                    transformValueNow +=  `rotate(${transformValue.rotateVal}deg)`

                }

                // if(transformValue.translateVal && t)
                
            }
            










        }

    },[sentTransform])


    const handleTransformChange = (value:any) =>{
        

        setTransformValue(prev=> ({...prev, transformVal : JSON.parse(value).value}))
        setSentTransform(prev=> prev + 1)
        
        // setTransform(prev=> ({...prev, value: JSON.parse(value).value}))
    }

    const handleTranslateChange = (value:any) =>{

        const transVal = JSON.parse(value).value
        const commaVal = convertStrToCommaVal(transVal)
        

        setTransformValue(prev=> ({...prev, translateVal : commaVal}))
        setSentTransform(prev=> prev + 1)
        // console.log(JSON.parse(value).value)

    //  setTranslate((prev:any)=>({...prev,
    //     value: JSON.parse(value).value
    //  }))
    }
     
    const handlRotateChange = (value:any) =>{
        setTransformValue(prev=> ({...prev, rotateVal : JSON.parse(value).value}))
        setSentTransform(prev=> prev + 1)

    //    setRotate((prev:any)=>({...prev,
    //     value: JSON.parse(value).value
    //    }))
    }

    const handleScaleChange = (value:any) =>{
        const sclVal = JSON.parse(value).value
        const commaVal = convertStrToCommaVal(sclVal)

        setTransformValue(prev=> ({...prev, scaleVal : commaVal}))
        setSentTransform(prev=> prev + 1)
        // console.log(JSON.parse(value).value)

        // setScale((prev:any)=>({...prev,
        //     value: JSON.parse(value).value
        // }))
    }

  return (
    <>
       <SelectField props={transform} change={(value:any)=>handleTransformChange(value)}/>
        {props?.tabOpen && transformValue.transformVal == "on" && (
            <>
            <HalfSpace props={translate} change={(value:any)=>handleTranslateChange(value)}/>
            <RangeField props={rotate} change={(value:any)=>handlRotateChange(value)} />
            
            <HalfSpace props={scale} change={(value:any)=>handleScaleChange(value)}/>
            </>
        )}
      
    </>
  )
}
