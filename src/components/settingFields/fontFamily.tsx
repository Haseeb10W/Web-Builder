'use client';

import React, { useEffect, useState } from 'react'
import SelectField from './selectField';
import { settingFieldProps } from '@/types/settingsSchema';
import { customFonts, defaultFonts, googleFonts } from '@/lib/fontFamily/FontsData';
import ResponsiveComponents from './ResponsiveComponents';



export default function FontFamily({props, change}: settingFieldProps) {
  const [selectedFontClass, setSelectedFontClass] = useState('');
  const [propsFont, setpropsFont] = useState<any>(null);
  const [googleFontsData, setGoogleFontsData] = useState<any[]>([]);
  



  function makeClass(value:string){

    let font = value.trim()
    font = value.replace(/\s/g, '-');
    font = 'font' + '-' + font
    return font

  }

  const makeClassName = (value:string)=>{

    let className = value.trim();
    className = value.replace('font-', '').replace(/-/g, ' ');
    return className
  }

  


  useEffect(()=>{

    if(props){
      
    
    setGoogleFontsData(googleFonts)

    const googleFontFull = googleFonts.map(font=>{
      const fontFull = { 
        label: font,
        value: makeClass(font)
      
      }
      return fontFull

      
    })
    
    const defaultFontFull = defaultFonts.map(font=>{
      const fontFull = { 
        label: font,
        value: makeClass(font)
      
      }
      return fontFull

    })
    
    const allFonts = [...googleFontFull, ...defaultFontFull]
    // .sort((a,b)=> a.label.localeCompare(b.label))
    
    setpropsFont({...props, options:allFonts.sort((a,b)=> a.label.localeCompare(b.label))})
    // console.log(googleFontFull)
    const allFont = [...googleFonts, ...customFonts]
    // console.log(allFont)
    }

    if(props?.value){
      setSelectedFontClass(props?.value)
    }

  },[props])

  useEffect(()=>{
    

    const fontProp = {...propsFont}
    // console.log(fontProp)

  }, [propsFont])

  useEffect(()=>{

    

    const oldStyleTag = document.getElementById('dynamic-font-style');
        if (oldStyleTag) {
            oldStyleTag.remove();
        }

    const selectedFont =  makeClassName(selectedFontClass);

     if (googleFontsData.includes(selectedFont)) {
            // Create the <link> tag

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `https://fonts.googleapis.com/css?family=${selectedFont.replace(/\s/g, '+')}&display=swap`;

            // Check if the link already exists to prevent duplicates
            const existingLink = document.querySelector(`link[href*="family=${selectedFont.replace(/\s/g, '+')}"]`);
            if (!existingLink) {
                document.head.appendChild(link);
            }
        }

        const styleTag = document.createElement('style');
        styleTag.id = 'dynamic-font-style';
        styleTag.textContent = `
            .${selectedFontClass} {
                font-family: '${selectedFont}', sans-serif;
            }
        `;
        document.head.appendChild(styleTag);

        // console.log(selectedFont)


  }, [selectedFontClass])


  


  const handleFontChange = (value:any)=>{
    // console.log('hello')
    // console.log(value)
    setSelectedFontClass(value)
    change?.(value)
  }




  return (
    <>
    
    {
    
      props?.tabOpen && 
      <SelectField props={propsFont} change={(value:any)=>handleFontChange(value)} />

    }

    
    </>
    
  )
}
