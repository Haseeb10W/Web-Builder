import React, { useState } from 'react'
import TextField from './TextField'
import { settingFieldProps } from '@/types/settingsSchema'
import SelectField from './selectField'
import { table } from 'console'
import { lang } from 'jodit/esm/core/constants'
import { placeholder } from 'jodit/esm/plugins/placeholder/placeholder'

// const linkTypes = {
//         defaultNot:true,
//         value:'off',
//         options: [
//           {label: 'Off', value: 'off'},
//           {label: 'On', value: 'on'},
//         ],
//         responsive: 'off',
//         for : '',
//         tab : '',
//         tabOpen: true,
// }

const linkTargets = {
        label: "Target",
        labelId: "link-target",
        placeholder:'https://example.com',
        tabOpen: true,
        value:''
}

export default function LinkField({props, change}:settingFieldProps) {

    const [linkType,setLinkType] = useState({...props,
         value: props?.value || 'off', 
         options: [
          {label: 'Off', value: 'off'},
          {label: 'On', value: 'on'},
        ],
        tabOpen: true,
    })
    // console.log("linkType",linkType)
    const [linkTarget,setLinkTarget] = useState(linkTargets)
    
    const handlelink = (value:any) =>{
       setLinkType((prev:any)=>({...prev, value:JSON.parse(value).value}))
    }
    
    const handleLinkTarget = (value:any) =>{
        setLinkTarget((prev:any)=>({...prev, value:value}))
    }

  return (
    <>
      {props?.tabOpen && (<> 
       <SelectField props={linkType} change={(value:any)=>handlelink(value)}/>
               { linkType?.value == 'on' && ( <TextField props={linkTarget} change={(value:any)=>handleLinkTarget(value)} /> ) }
      </>)}     
  
    </>
  )
}
