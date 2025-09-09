'use client';


import { iconMap } from '@/lib/maps/iconMap';
import React from 'react'

interface DynamicIconsProps{
  name?: string;
  classes?: string;
  styles?: React.CSSProperties
}

function DynamicIcons({name= 'text', classes= '', styles}:DynamicIconsProps) {

  const Icon = iconMap[name] || iconMap['text']; 

  return (
    <Icon className={classes} style={styles} />
  )
}

export default DynamicIcons