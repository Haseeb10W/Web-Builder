import { settingTypes } from "@/contexts/settingsType"
import { editSchema } from "@/types/editSchema"
import { settingsSetArgs } from "@/types/settingsSchema"


export const PageSettings = {
  content : [
    {
      field: "textarea", props : {
      label: "Add you Text", 
      labelId: "text-para",
      placeholder: 'text',
      value: '',
      classes: '',
      tailwindClasses: '',
      styles : {},
    }  
  },


  ],
  
}




export const pageSettingsSet:settingsSetArgs = (settingType, data, setSettingsData)=> {



}