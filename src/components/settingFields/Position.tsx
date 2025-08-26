"use client"
import React, { useState } from 'react'
import SelectField from './selectField'
import { settingFieldProps } from '@/types/settingsSchema';

 

export default function Position({props,change}: settingFieldProps ) {

    const handleDirection = () =>{
        
    }


  return (
    <>
    <SelectField props={props} change={(value:any)=>handleDirection(value)}></SelectField> 
    </>
  )
}
