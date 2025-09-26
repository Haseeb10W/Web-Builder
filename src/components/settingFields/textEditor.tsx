'use client'

import { settingFieldProps } from '@/types/settingsSchema';
import JoditEditor from 'jodit-react';
import React, { useEffect, useMemo, useRef } from 'react'
import ResponsiveComponents from './ResponsiveComponents';




type JoditConfig = React.ComponentProps<typeof JoditEditor>['config'];


export default function TextEditor({props, change}: settingFieldProps ) {
  const editorRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout |null>(null);


  const config: JoditConfig = useMemo(()=>({
    readonly : false,
    placeholder : props?.placeholder || 'Type your text here...',
    height: 100,
    toolbarButtonSize: 'xsmall',
    toolbarAdaptive: false,
    buttons: [
      'source','|','bold','italic','underline','|',
      'ul','ol','align','|',
      'font','fontsize','brush','paragraph','|',
      '|','link',
      
    ],
    


    
  }), [props?.placeholder])

  const handleChange = (content: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      let fullValue = {
        status: props?.currentStatus || 'normal',
        responsive: props?.responsive || 'on',
        value: content
      };
      
      change?.(JSON.stringify(fullValue));
    }, 1000);
  };

  

  return (
    
    <div className={`flex flex-col gap-2 mt-2`}>
      <div className='flex gap-x-1.5'>
      {
        props?.label != '' && (
          <label htmlFor={props?.labelId} className={`text-sm text-gray-600`}>{props?.label}</label>
        )
      }
      { props?.responsive == 'on' && ( <ResponsiveComponents /> )   }
      </div>
      <JoditEditor
      ref={editorRef}
      value={props?.value}
      config={config}
      onChange={(content) => handleChange(content)}
      
      
      />

      
        

      
      

    </div>
    
  )
}
