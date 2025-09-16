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
      value: '',
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
     value: '',
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

            const applyValue = props?.value;

            if(applyValue.includes('rotate') || applyValue.includes('translate') || applyValue.includes('scale') ){
                setTransform({...props, value: "on"})
                setTransformValue(prev=> ({...prev, transformVal : "on"}))

                if(applyValue.includes('rotate')){
                    const rotValue = applyValue.split('rotate(')[1].split('deg)')[0]
                    setTransformValue(prev=> ({...prev, rotateVal : rotValue}))
                    setRotate({...rotat, value: rotValue})
                }

                if(applyValue.includes('translate')){
                    const transValue = applyValue.split('translate(')[1].split(')')[0]
                    const simpleVal = convertCommaToStrVal(transValue)
                    setTransformValue(prev=> ({...prev, translateVal : transValue}))
                    setTranslate({...translat, value: simpleVal})
                }
                
                if(applyValue.includes('scale')){
                    const scaleValue = applyValue.split('scale(')[1].split(')')[0]
                    
                    setTransformValue(prev=> ({...prev, scaleVal : scaleValue}))
                    const simpleVal = convertCommaToStrVal(scaleValue)
                    // console.log(simpleVal)
                    setScale({...scal, value: simpleVal})
               
                }

            }else{
                setTransform({...props, value: "off"})
                setTransformValue({rotateVal: '',translateVal: '',scaleVal: '', transformVal: 'off'})
                setRotate(rotat)
                setTranslate(translat)
                setScale(scal)
               

            }
            
            
        }else{
            setTransform({...props, value: 'off'})
            setTransformValue({rotateVal: '',translateVal: '',scaleVal: '', transformVal: 'off'})
            setRotate(rotat)
            setTranslate(translat)
            setScale(scal)
        }

        

    }, [props?.value, props])



    useEffect(()=>{

        if(sentTransform > 0 ){


            let transformValueNow = ``;
            if(transformValue.transformVal == "on"){

                if( transformValue.rotateVal && transformValue.rotateVal !== ''){
                    transformValueNow +=  `rotate(${transformValue.rotateVal}deg)`
                }
                if( transformValue.translateVal && transformValue.translateVal !== ''){
                    const transVal = convertCommaToStrVal(transformValue.translateVal)
                    transformValueNow +=  `translate(${transformValue.translateVal})`
                }

                if( transformValue.scaleVal && transformValue.scaleVal !== ''){
                    
                    transformValueNow +=  `scale(${transformValue.scaleVal})`
                }

                // if(transformValue.translateVal && t)
                
            }


            const fullSentValue = {
                status : props?.currentStatus,
                responsive : props?.responsive || 'on',
                value : transformValueNow
            }


            change?.(JSON.stringify(fullSentValue))
            



        }

    },[sentTransform])


    const handleTransformChange = (value:any) =>{
        

        setTransformValue(prev=> ({...prev, transformVal : JSON.parse(value).value}))
        
        
        setTransform(prev=> ({...prev, value: JSON.parse(value).value}))

        if(JSON.parse(value).value == 'off'){
            setSentTransform(prev=> prev + 1)
        }
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
