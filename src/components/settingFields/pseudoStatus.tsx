"use client";

import { settingFieldProps } from "@/types/settingsSchema";
import React, { useEffect, useState } from "react";

export default function PseudoStatus({ props, change }: settingFieldProps) {

 


  return (
    <>
    {props?.tabOpen && (
      <div className="mt-2 w-full content-center">

        <div className="tabs flex w-full">
          <ul className="flex bg-gray-300/60 mx-auto p-1 rounded-2xl">
          {
            props?.statusOptions.map((option:any, index:number)=>(
              <li className={`inline-block text-sm py-1 px-3 text-center cursor-pointer hover:bg-white ${props?.value == option.value && 'bg-white'}  ${index === 0 && 'rounded-l-2xl'} ${index === props?.statusOptions.length - 1 && 'rounded-r-2xl'}`} key={index} onClick={()=>change?.(option.value)} title={option.name}
              
              >
                {option.name}

              </li>

            )

            )
          }
          </ul>


        </div>
        

      </div>
      
    )
    }
    </>
  );
}
