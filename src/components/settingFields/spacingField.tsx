'use client'

import DynamicIcons from '@/components/DynamicIcons'
import useDocumentClick from '@/hooks/useDocumentClick'
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useCallback, useEffect, useState } from 'react'
import ResponsiveComponents from './ResponsiveComponents'

export default function SpacingField({props, change}:settingFieldProps) {

  const [fullValue, seFullValue] = useState('')
  const [spaceValues, setSpaceValues] = useState<{[key: string]: any}>({t:0 , r: 0, b: 0 , l: 0 });
  const [linkStatus, setLinkStatus] = useState({value: "all", fields: 1, width: "w-[97%]"})
  const [unit, setUnit] = useState<string>('px'); 
  const [unitOpen, setUnitOpen] = useState(false);
  

  useEffect(()=>{
    // console.log('good')
    if(props?.value){
      const values = props.value.split(' ');
      // console.log(values)
      const SanitizeValues = values.map((item:any)=>{
        const units = ['px', '%'];
        const unit = units.find((unit)=> item.includes(unit))
        // console.log(unit)
        const value = item.replace(unit, '')
        // console.log(value)
        return {value: value, unit: unit}

      })
      // console.log(SanitizeValues)
      setUnit(SanitizeValues[0].unit)
      const top = SanitizeValues[0].value;
      const right = SanitizeValues[1].value;
      const bottom = SanitizeValues[2].value;
      const left = SanitizeValues[3].value;
      
      if(top == right && right == bottom && bottom == left){
        setLinkStatus({value: 'all', fields: 1, width: "w-[97%]"})
        setSpaceValues({t: top, r: right, b: bottom, l: left})
      }else if(top == bottom && right == left){
        setLinkStatus({value: 'half', fields: 2, width: "w-[48%]"})
        setSpaceValues({t: top, r: right, b: bottom, l: left})
      }else{
        setLinkStatus({value: 'none', fields: 4, width: "w-[23%]"})
        setSpaceValues({t: top, r: right, b: bottom, l: left})
      }
    }
  },[props?.value ])

  const refUnit = useDocumentClick(()=>{
    setUnitOpen(false)
  })
  
  const spaceChains = [
    {name: "alllink", value: "all", fields: 1, title:"All Linked", width: "!w-[97%]" },
    {name: 'halflink', value: 'half',fields: 2,  title: "Top/Bottom and Left/Right Values", width: "w-[48%]"},
    {name: 'unlink', value: 'none',fields: 4, title: "All Unlinked", width: "w-[23%]"},
    
  ]


  const handleLinkChange = (value:string, field: number, width: string)=>{
    setLinkStatus({value: value, fields: field, width: width})
  }


  const spaceFields = [
    {name: "field1", value: 0 },
    {name: "field2", value: 0 },
    {name: "field3", value: 0 }, 
    {name: "field4", value: 0 },
  ]


  const unitRanges = [
    {name: "pixels", value: "px"},
    {name: "percet", value: "%"},
    
  ]

  function showFieldNames(index:number, field:string){
    
    const chain = linkStatus.value;

    let spaceField = ''; 

    switch(chain){
      case 'all':
        if(field == "field1"){
          spaceField = 'All (Top / Right / Bottom / Left) '
        }
        break
      case 'half':
        if(field == "field1"){
          spaceField = "Top / Bottom"
        }
        else if (field == "field2"){
          spaceField = "Left / Right"

        }
        break;
      case 'none':
        switch (field){
          case 'field1':
            spaceField = "Top"
            break;
          case 'field2':
            spaceField = "Right"
            break;
          case 'field3':
            spaceField = "Bottom"
            break;
          case 'field4':
            spaceField = "Left"
        }
        break;
    }

    return spaceField

  }

  const showValues = (index: number, field:string)=>{

    let fieldValue; 
    
    switch (linkStatus.value){
      case 'all':
        fieldValue = spaceValues.t
        break;
      case 'half':
        if(field == "field1"){
          fieldValue = spaceValues.t
        }else if(field == "field2"){
          fieldValue = spaceValues.r
        }
        break
      case 'none':
        switch (field){
          case 'field1':
            fieldValue = spaceValues.t
            break;
          case 'field2':
            fieldValue = spaceValues.r
            break;
          case 'field3':
            fieldValue = spaceValues.b
            break;
          case 'field4':
            fieldValue = spaceValues.l
        }
        break
        
    }
    return fieldValue

  }


  const handleSpaceValueChange = useCallback((e:React.ChangeEvent<HTMLInputElement> | null, field: string)=>{
   
    // console.log(e?.target.value)
    let newValue;

    if(!e?.target.value){
      newValue = ''
    }else{
      newValue = parseInt(e.target.value)
    }

    
    
    // newValue = parseInt(e.target.value)

    let updatedSpaceValues = { ...spaceValues };
    
    switch (linkStatus.value){
      case 'all':
        if(field == "field1"){
          updatedSpaceValues = ({ t: newValue, r: newValue, b: newValue, l: newValue})
        }
        
        break;
      case 'half':
        if(field == "field1"){
          updatedSpaceValues = ({...spaceValues, t: newValue, b: newValue})
          
        }else if(field == "field2"){
          updatedSpaceValues = ({...spaceValues, r: newValue, l: newValue})
        }
        break
      case 'none':
        switch (field){
          case 'field1':
            updatedSpaceValues = ({...spaceValues, t: newValue})
            
            break;
          case 'field2':
            updatedSpaceValues =({...spaceValues, r: newValue})
            
            break;
          case 'field3':
            updatedSpaceValues= ({...spaceValues, b: newValue})
            
            break;
          case 'field4':
            updatedSpaceValues = ({...spaceValues, l: newValue})
            
        }
        break
        
    }

    setSpaceValues( updatedSpaceValues)
    const fullSpace = `${updatedSpaceValues.t}${unit} ${updatedSpaceValues.r}${unit} ${updatedSpaceValues.b}${unit} ${updatedSpaceValues.l}${unit}`;


    seFullValue(fullSpace)
    


    

    

  }, [linkStatus, unit, spaceValues])


  return (
    <>
    {
      props?.tabOpen && (
    
    <div className={`flex flex-col gap-2 w-full mt-4 `}>
      <div className={`flex gap-2 justify-between `}>
        <div className='flex gap-x-1.5'>
      {
        props?.label != '' && (
          <> 
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
          </>
        )
      }
        <ResponsiveComponents/>
    </div>
        <div className="flex gap-1">
          {
            spaceChains.map((item,index)=> (
              <span key={index} className={`p-1   bg-gray-300/90 cursor-pointer group hover:bg-gray-600 rounded-sm ${linkStatus.value == item.value ? 'bg-gray-500': 'bg-gray-300/90'}`} title={item.title} onClick={()=> handleLinkChange(item.value, item.fields, item.width)}>
                <DynamicIcons name={item.name} classes={`w-3 h-3 group-hover:text-white  ${linkStatus.value == item.value ? 'text-white': 'text-black'}`}/>

              </span>
            ))

          }

        </div>
      </div>

          
          
      <div className="fields-unit w-full flex gap-1 ">
          <div className="fields flex gap-1 w-[85%]">

          {

             spaceFields.slice(0, linkStatus.fields).map((item, index)=>(
            <div className={`flex flex-col content-center ${linkStatus.width} `} key={index}>
              <span className={`!text-[0.7rem] mx-auto`}>{showFieldNames(index, item.name)} </span>
              <input type="number" onChange={(e)=> handleSpaceValueChange(e, item.name)} onBlur={()=>change?.(fullValue)} value={showValues(index , item.name)} className={`text-sm border border-gray-400 text-gray-700 outline-0 text-center rounded-sm appearance-none input-no-spinner `} />
            </div>
          ))

          }
        </div>
        <div ref={refUnit} className="range-unit relative w-[12%] h-6 rounded-sm cursor-pointer  mt-auto flex items-center justify-center text-center bg-gray-200" onClick={()=>setUnitOpen(!unitOpen)}>
          <span className={`!text-sm `}>{unit}</span>
          {
            unitOpen && (
              <ul className={`absolute top-[103%] left-0 w-full flex flex-col items-center bg-white border border-gray-300 z-999 `}>
              {
                unitRanges.map((item, index)=>(
                  <li key={index} onClick={()=>setUnit(item.value)} className={`hover:bg-gray-200 w-full text-sm p-1 ${item.value==unit && 'bg-gray-200' }`}>{item.value}</li>
                ))
              }
              </ul>
              
            )

          }
          
        </div>




      </div>


      
      

    </div>
      )
    }
    </>
  )
}
