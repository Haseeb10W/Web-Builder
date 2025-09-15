"use client";

import React, { useState } from "react";
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

const custumFeild = {
  label: "Custum Value",
  labelId: "custum-value",
  value: "",
  tabOpen: true,
};
export default function Transition({ props, change }: settingFieldProps) {
  // console.log(props);
  const [transition, setTransition] = useState("");
  // console.log(transition);
  const [transitionDelay, setTransitionDelay] = useState(TDely);
  const [transitionDuration, setTransitionDurstion] = useState(TDuration);
  const [TimmingEffect, setTimmingEffect] = useState(TEffects);
  const [custom, setCustom] = useState(custumFeild);

  const handleTransitionChange = (value: any) => {
    console.log(value);
    setTransition(value);
  };

  const handleTransitionDelay = (value: any) => {
    setTransitionDelay((prev: any) => ({ ...prev, value: value }));
  };

  const handleTransitionDuration = (value: any) => {
    setTransitionDurstion((prev: any) => ({ ...prev, value: value }));
  };

  const handleTimmingEffects = (value: any) => {
    setTimmingEffect((prev: any) => ({ ...prev, value: value }));
  };

  const handleCustumValue = (value: any) => {
    setCustom((prev: any) => ({ ...prev, value: value }));
  };

  return (
    <React.Fragment key="id">
      <SelectField
        props={props}
        change={(value: any) => handleTransitionChange(value)}
      />
      {props?.tabOpen && transition !== "" && (
        <>
          {transition == "custom" && (
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
