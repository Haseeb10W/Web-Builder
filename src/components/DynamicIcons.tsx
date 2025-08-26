'use client';


import { iconMap } from '@/lib/maps/iconMap';
import React from 'react'

function DynamicIcons({name= 'text', classes= ''}) {

  const Icon = iconMap[name] || iconMap['text']; 

  return (
    <Icon className={classes} />
  )
}

export default DynamicIcons