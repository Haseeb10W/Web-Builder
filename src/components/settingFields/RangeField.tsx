"use client";

import { settingFieldProps } from "@/types/settingsSchema";
import React, { useEffect, useState } from "react";

export default function RangeField({ props, change }: settingFieldProps) {
  const [range, setRange] = useState(0);


  useEffect(()=>{
    setRange(Number(props?.value))
  },[props?.value])


  useEffect(() => {
    change?.(range);
  }, []);

  const changeRange = (value:number) =>{
   setRange(value)
   change?.(String(value))
  }



  return (
    <>
    {props?.tabOpen && (
      <div className="mt-2">
        {props?.label && (
          <h3  className="text-sm text-gray-600">{props?.label}</h3>
        )}
        <h3></h3>
        <div className="flex items-center mt-2 gap-2">
          <div className="w-[90%]">
            <input
              type="range"
              min={props?.minVal}
              max={props?.maxVal}
              className="w-[90%] h-2 appearance-none cursor-pointer"
              value={range}
              onChange={(e) => changeRange(Number(e.target.value))}
            />
          </div>
          <div>
            <input
              type="number"
              min={props?.maxVal}
              max={props?.maxVal}
              className="border border-gray-300 outline-none w-10 h-6 rounded-sm text-center text-[12px] input-no-spinner"
              value={range}
              onChange={(e) => changeRange(Math.min(props?.maxVal, Math.max(props?.minVal, Number(e.target.value))))
              }
            />
          </div>
        </div>
      </div>

    )}
      
    </>
  );
}
