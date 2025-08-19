'use client';

import { fieldMap } from '@/lib/builder/fieldMap';
import React from 'react'



interface settingFieldsProps{
  name : string;
  props : {[key: string]: any};
  change: (value: string | Event) => void;



}

export default function SettingFields({name, props, change }: settingFieldsProps) {

  const Field = fieldMap[name] || fieldMap['texts']



  return (
    <Field  props={props}  change={change}>

    </Field>
  )
}
