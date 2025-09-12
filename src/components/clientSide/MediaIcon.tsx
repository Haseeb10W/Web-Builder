import { iconMap } from '@/lib/maps/iconMap';
import React from 'react'
import DynamicIcons from '../DynamicIcons';

export default function MediaIcon() {
  const icon = iconMap;
  console.log("icon", icon)
  return (
    <>
    <div className="grid grid-cols-20 px-5">
         {Object.keys(icon).map((key) => {
           return (
             <DynamicIcons key={key} name={key} classes="w-5 h-5 m-2" />
           );
         })}
    </div>
    </>
  )
}
