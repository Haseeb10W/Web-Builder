import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import SelectField from './selectField'
import SizeField from './sizeField';
import RangeField from './RangeField';
import ColorField from './colorField';

// const boxShadowOptions = {  
//         options: [
//           {label: 'None', value: 'none'},
//           {label: 'Offset', value: 'offset'},
//           {label: 'Inset', value: 'inset'},
//         ],
//         tabOpen: true,
// }

const offsetX = {
        label: "Horizontal Offset", 
        labelId: "horizontal-offset",
        unitOptions: [
          {name: "pixels", value: "px"},
        ],
        for : '',
        tab: '',
        tabOpen: true,
        value:'',
        optionNotShow : true,
        responsive: 'off'
}

const offsetY = {
        label: "Vertical Offset", 
        labelId: "vertical-offset",
        unitOptions: [
          {name: "pixels", value: "px"},
        ],
        for : '',
        tab: '',
        tabOpen: true,
        optionNotShow : true,
        value:'',
        responsive: 'off'
}

const blr = {
  label: "Blur",
  tab: "",
  tabOpen: true,
  value: '',
  minVal: 0,
  maxVal: 999,
  responsive: 'off'
}

const spd = {
  label: "Spread",
  tab: "",
  tabOpen: true,
  value: '',
  minVal: 0,
  maxVal: 999,
  responsive: 'off'
}

const colorValue = {
        label: "Color", 
        // labelId: "bgcolor-text",
        value: '',
        tab: '',
        tabOpen: true,
        // currentStatus : 'normal',
        // statuses : ['normal', 'hover'],
        responsive: 'off',
       
}


export default function BoxShadow({props, change}:settingFieldProps) {
  const [boxShadowValue, setBoxShadowValue] = useState<{[key:string]:any}>(
    {...props, defaultNot : true, 
      options: [
          {label: 'None', value: 'none'},
          {label: 'Offset', value: 'offset'},
          {label: 'Inset', value: 'inset'},
        ],
        tabOpen: true,
        value : 'none'
    }
  );
  
  const [offsetXValue, setOffsetXValue] = useState(offsetX);
  const [offsetYValue, setOffsetYValue] = useState(offsetY);
  const [blurValue, setBlurValue] = useState(blr);
  const [spreadValue, setSpreadValue] = useState(spd);
  const [colorValueState, setColorValueState] = useState(colorValue);
  const [sentShadow, setSentShadow]  = useState(0)
  const [boxShadowAll, setBoxShadowAll] = useState<{
    shadowType: string, 
    offsetX: string,
    offsetY: string,
    blurRadius: string,
    spreadRadius: string,
    color: string
  }>({ shadowType: 'none',  offsetX: '', offsetY: '', blurRadius:'', spreadRadius: '', color: '' })


  useEffect(()=>{

    if(props?.value){
      // console.log(props?.value)
      const valueShadow = props?.value

      const rgbaFind = valueShadow.match(/rgba\(.*?\)/g) || ''
      
  
      const pixelValuesFind = valueShadow && valueShadow.match(/-?\d+px/g) || ''
      // console.log(pixelValuesFind)

      
      setBoxShadowAll({
        shadowType: valueShadow.includes('inset') ? 'inset' : 'offset', 
        offsetX: pixelValuesFind[0].trim(),
        offsetY: pixelValuesFind[1].trim(),
        blurRadius: pixelValuesFind[2].replace(/[px]/g, '').trim(),
        spreadRadius: pixelValuesFind[3].replace(/[px]/g, '').trim(),
        color: rgbaFind ? rgbaFind[0] : ''
      })

      setBoxShadowValue(prev=> ({...prev, value: valueShadow.includes('inset')? 'inset': 'offset'}))
      setOffsetXValue(prev=> ({...prev, value: pixelValuesFind[0].trim()}))
      setOffsetYValue(prev=> ({...prev, value: pixelValuesFind[1].trim()}))
      setBlurValue(prev=> ({...prev, value: pixelValuesFind[2].replace(/[px]/g, '').trim()}))
      setSpreadValue(prev=> ({...prev, value: pixelValuesFind[3].replace(/[px]/g, '').trim()}))
      setColorValueState(prev=> ({...prev, value: rgbaFind ? rgbaFind[0] : ''}))


    }else{

      setBoxShadowAll({
        shadowType:  'none', 
        offsetX: '',
        offsetY: '',
        blurRadius: '',
        spreadRadius: '',
        color:  ''
      })

      setBoxShadowValue(prev=> ({...prev, value: 'none'}))
      setOffsetXValue(prev=> ({...prev, value: ''}))
      setOffsetYValue(prev=> ({...prev, value: ''}))
      setBlurValue(prev=> ({...prev, value: ''}))
      setSpreadValue(prev=> ({...prev, value: ''}))
      setColorValueState(prev=> ({...prev, value: ''}))

    }
   
    






  }, [props, props?.value])


  


  useEffect(()=>{

    if(sentShadow > 0 ){
      
      let shadowValueNew = '';

      if(boxShadowAll.shadowType !== 'none'){
        shadowValueNew = `${boxShadowAll.shadowType =='inset' ? 'inset' : ''} ${boxShadowAll.offsetX || '0px'} ${boxShadowAll.offsetY || '0px'} ${boxShadowAll.blurRadius ? (boxShadowAll.blurRadius + 'px' ): "0px" } ${boxShadowAll.spreadRadius ? (boxShadowAll.spreadRadius +'px') : '0px' } ${boxShadowAll.color}`
      }

      const fullValue = {
        status : props?.currentStatus,
        responsive: props?.responsive || 'on',
        value : shadowValueNew
        
      }
      // console.log(JSON.stringify(fullValue))
      
      change?.(JSON.stringify(fullValue))


    }

  }, [sentShadow])



  const handleColorValue = (value:any)=>{
    // console.log(value)
    const colorVal = JSON.parse(value).value
        
    setBoxShadowAll(prev=> ({...prev, color : colorVal }))
    setSentShadow(prev => prev + 1)

    // setColorValueState((prev:any)=>({...prev, value:JSON.parse(value).value}))
    
  }

  const handleOffsetYChange = (value:any)=>{
    const offsetYVal = JSON.parse(value).value
    setBoxShadowAll(prev=> ({...prev, offsetY : offsetYVal }))
    setSentShadow(prev => prev + 1)

    // setOffsetYValue((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  const handleBoxShadowChange = (value:any)=>{
    const shadowTypeVal = JSON.parse(value).value
    setBoxShadowAll(prev=> ({...prev, shadowType : shadowTypeVal }))
    setSentShadow(prev => prev + 1)

    // setBoxShadowValue((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  const handleOffsetXChange = (value:any)=>{
    const offsetXVal = JSON.parse(value).value
    setBoxShadowAll(prev=> ({...prev, offsetX : offsetXVal }))
    setSentShadow(prev => prev + 1)

  }

  const handleBlurValue = (value:any)=>{
    const blurVal = JSON.parse(value).value
    // console.log(spreadVal)
    setBoxShadowAll(prev=> ({...prev, blurRadius : blurVal }))
    setSentShadow(prev => prev + 1)

  }
  const handleSpreadValue = (value:any)=>{
    const spreadVal = JSON.parse(value).value
    // console.log(spreadVal)
    setBoxShadowAll(prev=> ({...prev, spreadRadius : spreadVal }))
    setSentShadow(prev => prev + 1)

  }
  return (
    <>
     {
      props?.tabOpen &&  (
        <>
      <SelectField props={boxShadowValue} change={(value:any)=>handleBoxShadowChange(value)}/>
        {
          ( boxShadowAll.shadowType !== 'none') && 
          (
            <>
            <SizeField props={offsetXValue} change={(value:any)=>handleOffsetXChange(value)}/>
            <SizeField props={offsetYValue} change={(value:any)=>handleOffsetYChange(value)}/>
            <RangeField props={blurValue} change={(value:any)=>handleBlurValue(value)}/>
            <RangeField props={spreadValue} change={(value:any)=>handleSpreadValue(value)}/>
            <ColorField props={colorValueState} change={(value:any)=>handleColorValue(value)}/>
            </>
          )
        }
    </>
      )
     }
    </>
  )
}
