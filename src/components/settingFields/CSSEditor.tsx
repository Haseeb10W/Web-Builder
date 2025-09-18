'use client';

import React, { useRef, useState } from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { settingFieldProps } from '@/types/settingsSchema';
import ResponsiveComponents from './ResponsiveComponents';





export default function CssEditor({ props, change }:settingFieldProps) {
  
  const textTimeoutRef = useRef<any | null>(null)

  


  const handleTextEditorChange = (newCSS:any)=>{
    
    if(textTimeoutRef.current){
      clearTimeout(textTimeoutRef.current)
    }

    textTimeoutRef.current = setTimeout(()=>{

      // const fullValue = {
      //   status : props?.currentStatus ,
      //   responsive : props?.responsive || 'on',
      //   value : newCSS
      // }
    
      change?.(newCSS)

    }, 2000)
    
  }

  


  return (

    props?.tabOpen && (

      <div className={` mt-3 `}>
            <div className='flex gap-x-1.5 mb-2 '>
            {
              props?.label != '' && (
                <h3  className={`text-sm text-gray-600`}>{props?.label}</h3>
              )
            }
            {
            props?.responsive == 'on' && (
            <ResponsiveComponents />
              )
            }
            </div>
      
      
      

       
       <div className={`border scroll-bar border-gray-300 overflow-y-auto overflow-x-hidden rounded-sm `} style={{
        resize: 'vertical',
        minHeight: '150px',
        height: '150px'

       }}>

      <CodeMirror
        value={props?.value}
        
        height="100%"
        extensions={[
            css(),
      
          EditorView.lineWrapping
    ]}
        onChange={handleTextEditorChange}
        
        
      />
     
    </div>

  </div>

    )
    
  );
}