"use client"
import { settingFieldProps } from '@/types/settingsSchema'
import React, { useEffect, useState } from 'react'
import SelectField from './selectField'
import IconField from './IconField';
import RangeField from './RangeField';
import SizeField from './sizeField';


const horizentalOrientation = {
        label: "Horizental Orientation", 
        labelId: "horizental-orientation",
        defaultNot: true,
        value:"left",
        options: [
          {label: 'Left', value: 'left'},
          {label: 'Right', value: 'right'},
        ],
        responsive:'on',
        for :'directionChange',
        tab: '',
        tabOpen: true
}

const horiOffset = {
        label: "Horizental Offset", 
        labelId: "horizental-offset",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
        ],
        for : 'widthSizeChange',
        tab: 'layout',
        tabOpen: true,
        responsive:'on',
        value: '',
        // statuses : ['normal']
  }

const verticalOrientation = {
        label: "Vertical Orientation", 
        labelId: "vertical-orientation",
        defaultNot: true,
        value:"top",
        options: [
          {label: 'Top', value: 'top'},
          {label: 'Bottom', value: 'bottom'},
        ],
        responsive:'on',
        for :'directionChange',
        tab: '',
        tabOpen: true
  }

  const vertiOffset = {
        label: "Vertical Offset", 
        labelId: "vertical-offset",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
        ],
        for : 'widthSizeChange',
        tab: 'layout',
        tabOpen: true,
        value: '',
        responsive:'on',
       
  }

export default function Position({props,change}: settingFieldProps ) {
  const [horizental,setHorizental] = useState(horizentalOrientation);
  const [vertical,setVertical] = useState(verticalOrientation);
  const [hOffset,sethOffset] = useState(horiOffset);
   const [vOffset,setvOffset] = useState(vertiOffset);
   const [pseudo,setPseudo] = useState('')
  const [positionProps,setPositionProps] = useState<{[key:string]: any}>({});
  const [sentPositionValue , setSentPositionValue] = useState(0);
  const [positionValue, setPositionValue] = useState<{position:string, top: string, bottom: string, left: string, right: string }>({position:'', top: '', bottom: '', left: '', right: '' });


  useEffect(()=>{


    if(props?.value){
      // console.log(props?.value)
      const parsed = JSON.parse(props?.value)
      setPositionProps({...props, value: parsed.position })
      setPositionValue((prev:any)=>({...prev, 
        position: parsed.position, 
        top: parsed.top,
        bottom: parsed.bottom,
        left: parsed.left,
        right: parsed.right
      
      }))

      if(parsed.top && parsed.top !== ''){
        setVertical({...verticalOrientation, value: 'top'})
        setvOffset({...vertiOffset, value: parsed.top})
      }else if(parsed.bottom && parsed.bottom !== ''){
        setVertical({...verticalOrientation, value: 'bottom'})
        setvOffset({...vertiOffset, value: parsed.bottom})
      }else{
        setVertical({...verticalOrientation, value: 'top'})
        setvOffset({...vertiOffset, value: ''})
      }


      if(parsed.left && parsed.left !== ''){
        setHorizental({...horizentalOrientation, value: 'left'})
        sethOffset({...horiOffset, value: parsed.left})
      }else if(parsed.right && parsed.right !== ''){
        setHorizental({...horizentalOrientation, value: 'right'})
        sethOffset({...horiOffset, value: parsed.right})
      }else{
        setHorizental({...horizentalOrientation, value: 'left'})
        sethOffset({...horiOffset, value: ''})
      }

      
      

    }else{
      setPositionProps({...props, value: '' })
    }


  }, [ props?.value, props])


  useEffect(()=>{

    if(sentPositionValue == 0) return
    let positionGroup = {
      position : '',
      top: '',
      bottom: '',
      left: '',
      right: ''
    }

    if( positionValue.position === 'relative' ){
      positionGroup.position = 'relative' 
    }else if(positionValue.position === 'fixed' || positionValue.position === 'sticky' || positionValue.position === 'absolute' ){
      positionGroup = {
      position : positionValue.position,
      top: positionValue.top,
      bottom: positionValue.bottom,
      left: positionValue.left,
      right: positionValue.right
      }
    }

    const fullValue = {
      status : props?.currentStatus,
      responsive : props?.responsive,
      value : positionGroup
    }

    change?.(JSON.stringify(fullValue))



  }, [sentPositionValue])



  const handlePositionChange = (value:any) =>{

        const positionValue = JSON.parse(value).value
        setPositionValue(prev=> ({...prev, position: positionValue}))
        setSentPositionValue(prev=> prev + 1)
        // setPosition(value)
    }
    

  const handleHorizentalChange = (value:any) =>{

    setHorizental((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }
  
  const handleVerticalChange = (value:any) =>{
    setVertical((prev:any)=>({...prev, value:JSON.parse(value).value}))
  }

  const handleHOffset = (value:string)=>{
    const hValue =  horizental.value

    if( hValue === 'left' ){
      setPositionValue((prev:any)=>({...prev, left:JSON.parse(value).value, right: ''}))
    }else if(hValue === 'right'){
      setPositionValue((prev:any)=>({...prev, right:JSON.parse(value).value, left: ''}))
    }
    
    setSentPositionValue(prev=> prev + 1)
    // sethOffset((prev:any)=>({...prev,
    //   value:value
    // }))
  }
  
  const handleVOffset = (value:string)=>{
    const vValue =  vertical.value

    if( vValue === 'top' ){
      setPositionValue((prev:any)=>({...prev, top:JSON.parse(value).value, bottom: ''}))
    }else if(vValue === 'bottom'){
      setPositionValue((prev:any)=>({...prev, bottom:JSON.parse(value).value, top: ''}))
    }
    
    setSentPositionValue(prev=> prev + 1)

  //  setvOffset((prev:any)=>({...prev,
  //     value:value
  //   }))
  }


  // const handlePseudoChange = (value:any) =>{
  //      setPseudo(value)
  // }


  return (
    <>
     
     <SelectField props={positionProps} change={(value:any)=>handlePositionChange(value)}/>
      { props?.tabOpen && (
           positionProps.value === "absolute" || positionProps.value === "sticky" || positionProps.value === "fixed" ? (
        <>
         <SelectField props={horizental} change={(value:any)=>handleHorizentalChange(value)}/>
         <SizeField props={hOffset} change={(value:any)=>handleHOffset(value)}/>
         <SelectField props={vertical} change={(value:any)=>handleVerticalChange(value)}/>
         <SizeField props={vOffset} change={(value:any)=>handleVOffset(value)}/>
        </>
      ): null)
      }
    </>
  )
}
