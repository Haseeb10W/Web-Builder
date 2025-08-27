'use client'

import { settingTypes, useSettingType } from '@/contexts/settingsType';
import { settingFunctionMap } from '@/lib/maps/settingMaps';
import { editSchema } from '@/types/editSchema'
import React, { useCallback, useEffect, useState } from 'react'
import SettingFields from './SettingFields';
import {  handleSettingChangeArgs } from '@/types/settingsSchema';
import { findBlockOverall } from '@/lib/builder/blockHandlers';
import { appliedSettings } from '@/lib/builder/settingsApplied';

interface BlockSettingProps {
  data: editSchema | undefined ;
  updateData: ((data: editSchema) => void) | undefined;
  // settingsType : settingTypes | undefined;
  // settingsReleted :  { id: string; title: string; } | undefined;

}



type tabType = 'content' | 'styles' | 'settings' | null


function BlockSettings({data, updateData}:BlockSettingProps) {

  const {settingType} = useSettingType()
  const [tabOpened, setTabOpen] = useState<tabType | string | any>('content')
  const [settingsData, setSettingsData] = useState<{[key:string]:any[]}>({})


  const handleTabOpen = (value:tabType)=>{
    setTabOpen(value)
    
  }




  const tabs = [
    {label: 'Content', value: 'content', click :()=> handleTabOpen('content')},
    {label: 'Styles',value: 'styles', click :()=> handleTabOpen('styles')},
    {label: 'Settings',value: 'settings', click:()=> handleTabOpen('settings')}
  ]


  

  useEffect(()=>{

    if(settingType){
      // console.log(settingType.title);
       const settings = settingFunctionMap[settingType.type ](settingType, data )  
       setSettingsData(settings)

    }

    



  },[tabOpened, settingType] )


  const handleFieldChange:handleSettingChangeArgs=useCallback((value, id , type, applied, data, updateData, setSettingsData, settingsData )=>{
    
    // console.log(value)

    const InputTextType = ['textarea' , 'texts']
    const customTextType = ['texteditor', 'textAlign', 'spacing', 'colors', 'size', 'iconField', 'fontFamily', 'select']

    const isInputTextType = InputTextType.includes(type as string)
    const isCustomTextType = customTextType.includes(type as string)

    
     if (type === 'heading') {
        setSettingsData && setSettingsData(prevSettingsData => {
            const newSettings = { ...prevSettingsData };
            const updatedFields = newSettings[tabOpened]?.map((item) => {
                // If it's the heading we clicked, update its tabOpen state
                if (item.field === 'heading' && item.props?.for === applied) {
                    return {
                        ...item,
                        props: {
                            ...item.props,
                            tabOpen: value
                        }
                    };
                }
                
              
                if (item.props?.tab === applied) {
                    return {
                        ...item,
                        props: {
                            ...item.props,
                            tabOpen: value
                        }
                    };
                }

                return item;
            });

            if (updatedFields) {
                newSettings[tabOpened] = updatedFields;
            }
            return newSettings;
        });
        return;
    }
    

    let fieldValue: string | number; 


    if(isCustomTextType){
      fieldValue = value as string
      // console.log('customText')

    }else if(isInputTextType ){
      const target = (value as unknown as  React.ChangeEvent<HTMLInputElement>)?.target;
      fieldValue = target?.value || ''
    }else{
      fieldValue =  ''
    }

    
   
      // const target = value?.target as HTMLInputElement;
      
      const settings = {...settingsData}
      
      const settingField = settings[tabOpened]?.find((item)=>{
        return item?.field == type && item?.props?.labelId == id
      })
      
      

      if(settingField && setSettingsData && data && updateData && settingType){
        settingField.props.value = fieldValue

        const newData = {...data}
        const foundBlock = findBlockOverall(newData, settingType?.id)
        // console.log(foundBlock)
        // console.log(settingType?.id)

       
          appliedSettings(applied, foundBlock, fieldValue)
          setSettingsData({...settings})
          updateData(newData)

        
        
    
        
        
      }


    


  }, [settingsData, tabOpened, data, updateData, setSettingsData, settingType])




  return (
    <div className={` h-full w-full overflow-hidden border-t border-gray-300`}>
      <div className={` px-2 tabs h-8`}>
        <ul className={`flex  mx-3 my-2 bg-gray-300 rounded-3xl p-1`}>
        {
          tabs.map((item, index)=> (
            <li key={index} onClick={item.click}  className={`text-sm  w-2/6 text-center py-1 px-2 cursor-pointer hover:bg-white [&:nth-child(1)]:rounded-l-3xl  [&:nth-child(3)]:rounded-r-3xl [&:nth-child(2)]:rounded-0 ${item.value == tabOpened ? 'bg-white': ''}  `} >{item.label}</li>
            
          ))

        }
        </ul>
        

        
      </div>

      <div className="content-settings scroll-bar-md overflow-y-auto w-full px-3 pb-3 mt-2" style={{height: "calc(100% - 95px)"}}>
        {
          settingsData  && tabOpened && settingsData[tabOpened]?.map((item, index)=>(
            <SettingFields 
            key={index} 
            name={item.field} 
            props={item.props} 
            change={(value: string | Event) => handleFieldChange(value ,item?.props?.labelId, item?.field, item?.props?.for , data, updateData , setSettingsData, settingsData )} ></SettingFields>
          ))
        }




      </div>




    </div>
  )
}

export default BlockSettings