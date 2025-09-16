"use client";

import React, { useEffect, useState } from "react";
import SelectField from "./selectField";
import { settingFieldProps } from "@/types/settingsSchema";
import TextField from "./TextField";
import NumberField from "@/components/settingFields/numberField";



const TDely = {
  label: "Transition Delay",
  labelId: "transition-delay",
  value: "",
  tabOpen: true,
};

const TDuration = {
  label: "Transition Duration",
  labelId: "transition-duration",
  value: "",
  tabOpen: true,
};

const TEffects = {
  label: "Timming Effects",
  labelId: "timming-effects",
  value: "",
  options: [
    { label: "Ease", value: "ease" },
    { label: "Linear", value: "linear" },
    { label: "Ease in", value: "ease-in" },
    { label: "ease out", value: "ease-out" },
    { label: "Ease in out", value: "ease-in-out" },
    { label: "Step start", value: "step-start" },
    { label: "Step end", value: "step-end" },
  ],
  tabOpen: true,
};

const customField = {
  label: "Custom Value",
  labelId: "custom-value",
  value: "",
  tabOpen: true,
};
export default function Transition({ props, change }: settingFieldProps) {
  // console.log(props);
  const [transition, setTransition] = useState(props);
  // console.log(transition);
  const [transitionDelay, setTransitionDelay] = useState(TDely);
  const [transitionDuration, setTransitionDuration] = useState(TDuration);
  const [TimmingEffect, setTimmingEffect] = useState(TEffects);
  const [custom, setCustom] = useState(customField);
  const [sendTransition, setSendTransition] = useState(0);
  const [transitionFullVal, setTransitionFullVal] = useState<{
    'transition-property': string,
    'transition-delay': string,
    'transition-duration': string,
    'transition-timing-function': string
  }>({
    'transition-property': '',
    'transition-delay': '',
    'transition-duration': '',
    'transition-timing-function': ''
  })


  useEffect(()=>{
    
    

    if(props?.value){
      console.log('hello')
      const parseValue = JSON.parse(props?.value);

      if(parseValue['transition-property'] == ''){
        setTransitionFullVal(prev=> ({...prev, 'transition-property': '' }))
        setTransition({...props, value: ''})
      }else if(findTransition(parseValue['transition-property']) ){
        setTransitionFullVal(prev=> ({...prev, 'transition-property': parseValue['transition-property'] }))
        setTransition({...props, value: parseValue['transition-property']})
      }else{
        setTransitionFullVal(prev=> ({...prev, 'transition-property': parseValue['transition-property'] }))
        setTransition({...props, value: 'custom'})
        setCustom(prev=> ({...prev, value: parseValue['transition-property']}))
      }



      // setTransition({...props, val})

    }else{
      setTransition({...props, value: ''})
    }
    

  }, [props?.value, props])


  useEffect(()=>{
    if(sendTransition == 0) return
    
    const fullValue = {
      status : props?.currentStatus,
      responsive : props?.responsive || 'on',
      value : transitionFullVal
    }

    change?.(JSON.stringify(fullValue))

  }, [sendTransition])

  const findTransition = (property:string)=>{
    const isTransFound = props?.options.some((trans:any)=>trans.value == property)

    return isTransFound;
  }


  const handleTransitionChange = (value: any) => {
    // console.log(value);

    const transVal = JSON.parse(value).value
    setTransition((prev: any) => ({ ...prev, value: transVal }));
    if(transVal !== 'custom'){
      setTransitionFullVal(prev=> ({...prev, 'transition-property': transVal }))
      setSendTransition(prev=> prev + 1)

    }

    
  };

  const handleTransitionDelay = (value: any) => {
    // console.log(value)
    setTransitionFullVal(prev=> ({...prev, 'transition-delay': JSON.parse(value).value + 's' }))
    setTransitionDelay((prev: any) => ({ ...prev, value: JSON.parse(value).value }));
  };

  const handleTransitionDuration = (value: any) => {
    setTransitionFullVal(prev=> ({...prev, 'transition-duration': JSON.parse(value).value + 's' }))
    setTransitionDuration((prev: any) => ({ ...prev, value: JSON.parse(value).value })); 
  };

  const handleTimmingEffects = (value: any) => {
    setTransitionFullVal(prev=> ({...prev, 'transition-timing-function': JSON.parse(value).value }))
    
    setTimmingEffect((prev: any) => ({ ...prev, value: JSON.parse(value).value }));
  };

  const handleCustumValue = (value: any) => {
    setCustom((prev: any) => ({ ...prev, value: value }));
  };

  return (
    <React.Fragment key="id">
      <SelectField
        props={transition}
        change={(value: any) => handleTransitionChange(value)}
      />
      {props?.tabOpen && transition?.value !== "" && (
        <>
          {transition?.value == "custom" && (
            <>
              <TextField
                props={custom}
                change={(value: any) => handleCustumValue(value)}
              />
            </>
          )}
          <NumberField
            props={transitionDelay}
            change={(value: any) => handleTransitionDelay(value)}
          />
          <NumberField
            props={transitionDuration}
            change={(value: any) => handleTransitionDuration(value)}
          />
          <SelectField
            props={TimmingEffect}
            change={(value: any) => handleTimmingEffects(value)}
          />
        </>
      )}
    </React.Fragment>
  );
}
