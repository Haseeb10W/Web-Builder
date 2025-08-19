import { findBlockOverall } from "@/lib/builder/blockHandlers";
import { settingsSetArgs, settingsSetupSchema } from "@/types/settingsSchema";

const flexSettings:settingsSetupSchema = {
  content : [
    {
      field: "texteditor", 
      props : {
      label: "Text Editor", 
      labelId: "text-editor",
      placeholder: 'Add your Text here',
      value: '',
      for : 'textChange',
      type:'settingfield',
      
    }  
  },


  ],
  styles : [
    {
      field: "text", 
      props : {
      
      
    }  
  },
    
    
  ],
  settings: [
    {
      field: "text", 
      props : {
      
      
    }  
  },

  ]
  
}




export const flexSettingsSet:settingsSetArgs = (settingType, data)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId)

  if(findBlock){
    const settings = {...flexSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'flex' ){
      settings.content[0].props.value =  findBlock?.props?.text

    }

    // console.log(settings);
    return settings
    
  }


}