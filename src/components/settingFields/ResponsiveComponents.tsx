"use client"
import React, { useState } from "react";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import DynamicIcons from "../DynamicIcons";
import useDocumentClick from "@/hooks/useDocumentClick";
import { useSettingType } from "@/contexts/settingsType";

export default function ResponsiveComponents() {
  const {screenType, setScreenType} = useSettingType();
  const [open, setOpen] = useState(false);

  const responseRef = useDocumentClick(
    ()=>setOpen(false)
  )

  const icons = [

    {
      label:"desktop" ,  value:"desktop"
    },
    {
       label:"tablet" , value:"tablet"
    },
    {
       label:"mobile" , value:"mobile"
    }

  ];

  return (
    <div className="flex items-center space-x-2 relative -mt-2" ref={responseRef}>
      
      {/* Active button */}
      <span
        onClick={() => setOpen(!open)}
        className="py-0.5 px-1 bg-gray-200/90 hover:bg-gray-300/70 cursor-pointer shadow"
      >
        <DynamicIcons classes="w-[12px] h-[12px]" name={icons.find((icon) => icon.label === screenType)?.value}/>
      </span>

      {/* Popover */}
      {open && (
        <div className="absolute left-[100%]  top-1 flex  justify-center  rounded bg-white shadow z-9999">
          {icons.map((device,index) => (
            <span
              key={index}
              onClick={() => {
                setScreenType(device.value as "desktop" | "tablet" | "mobile");
                setOpen(false);
              }}
              className={`py-1 px-1 hover:bg-gray-200/90 ${device.value === screenType && "bg-gray-200/90"}`}
            >
              <DynamicIcons classes="w-[14px] h-[14px]" name={device.value}/>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
