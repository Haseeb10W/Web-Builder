import { settingFieldProps } from '@/types/settingsSchema'
import React, { useState } from 'react'
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
        value:'',
        responsive: 'off'
}

const blr = {
  label: "Blur",
  tab: "",
  tabOpen: true,
  value: 0,
  minVal: 0,
  maxVal: 999,
  responsive: 'off'
}

const spd = {
  label: "Spread",
  tab: "",
  tabOpen: true,
  value: 0,
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
  const [boxShadowValue, setBoxShadowValue] = useState({
        ...props,
          options: [
          {label: 'None', value: 'none'},
          {label: 'Offset', value: 'offset'},
          {label: 'Inset', value: 'inset'},
        ],
        tabOpen: true,
  });
  console.log("boxShadowValue",boxShadowValue)
  const [offsetXValue, setOffsetXValue] = useState(offsetX);
  const [offsetYValue, setOffsetYValue] = useState(offsetY);
  const [blurValue, setBlurValue] = useState(blr);
  const [spreadValue, setSpreadValue] = useState(spd);
  const [colorValueState, setColorValueState] = useState(colorValue);

  const handleColorValue = (value:any)=>{
    setColorValueState((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }

  const handleOffsetYChange = (value:any)=>{
    setOffsetYValue((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  const handleBoxShadowChange = (value:any)=>{
    setBoxShadowValue((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  const handleOffsetXChange = (value:any)=>{
    setOffsetXValue((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  const handleBlurValue = (value:any)=>{
    setBlurValue((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  const handleSpreadValue = (value:any)=>{
    setSpreadValue((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  return (
    <>
     {
      props?.tabOpen &&  (
        <>
      <SelectField props={boxShadowValue} change={(value:any)=>handleBoxShadowChange(value)}/>
        {
          (boxShadowValue.value == 'offset' || boxShadowValue.value == "inset") && (
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
