'use client';


import React, { useState } from 'react';
import { iconMap } from '@/lib/iconMap';
import DynamicIcons from '../DynamicIcons';
import { useSideToggle } from '@/contexts/toggleSide';
import DraggableElement from './DraggableElements';



export default function BuilderSideBar() {
  const [activeTab, setActiveTab] = useState('elements');
  const {toggleSide} = useSideToggle();

  const handleComponentTabs  = (tab : string) =>{
    setActiveTab(tab);
  }

  const elementsData = [
    {
      value : 'layout',
      label : 'Layout',
      elements : [
        {type: 'flex', label: 'FlexBox' , icon: 'flex'},
        // {type: 'grid', label: 'Grid' , icon: 'grid'},
      ]
    },
    {
      value : 'basic-elements',
      label : 'Basic Elements',
      elements : [
        {type: 'heading', label: 'Heading' , icon: 'heading'},
        {type: 'text', label: 'Text' , icon: 'text'},
        {type: 'image', label: 'Image' , icon: 'image'},
        // {type: 'button', label: 'Button' , icon: 'button'},
      ]
    }

  ]

  const toogleElementsData = [
    {value: 'layout', toogle: true},
    {value: 'basic-elements', toogle: true},
  ]
  const [toggleElements, setToggleElements] = useState(toogleElementsData);

  const checkToggleStatus = (value: string) => {
    const toggle = toggleElements.find(item => item.value === value);
    return toggle ? toggle.toogle : false;
  }

  const handleToggleElements = (value: string) => {
    setToggleElements(prevState => 
      prevState.map(item => 
        item.value === value ? { ...item, toogle: !item.toogle } : item
      )
    );
  };

  return (
    <>
    
    <div className={`w-full h-full pb-5  bg-white`}>
      
      
      <div className={`flex justify-center px-2 py-2 h-1/12 `}>
        <h3 className="text-xl">Components</h3>
        
      </div>
      {
        !toggleSide && (
      <div className={`my-2 h-11/12`}>
        <div className="tabs flex justify-center text-center p-1 px-2 mx-2 bg-gray-200 rounded-lg" >
          <li className={`text-sm w-3/6 py-2 rounded-l-lg cursor-pointer ${activeTab == 'elements' && 'bg-white'} ` } onClick={()=>handleComponentTabs('elements')}>Elements</li>
          <li className={`text-sm w-3/6 rounded-r-lg py-2 cursor-pointer ${activeTab == 'templates' && 'bg-white'}`} onClick={()=>handleComponentTabs('templates')}>Templates</li>
        </div>
        {
          activeTab == 'elements' && (
            <div className="flex flex-col mt-2 px-4 h-[calc(100%-40px)]  overflow-y-auto">
              
              <ul className=''>
                {
                  elementsData.map((category, index) => (
                    <li key={index} className="  ">
                      <div className={`flex justify-between items-center cursor-pointer pt-2 `} onClick={() => {handleToggleElements(category.value)}  }>
                        <h4 className="text-sm font-semibold my-2">{category.label}</h4>
                        <DynamicIcons name={checkToggleStatus(category.value)? 'downarrow': 'uparrow'} classes= "w-4 h-4" />
                      </div>
                      {checkToggleStatus(category.value) &&
                      <ul className="flex flex-wrap gap-4 mt-2">
                        {
                          
                          category.elements.map((element, idx) => (
                            < DraggableElement key={idx} element={element} index={idx} />
                            
                          ))
                        }
                      </ul>
                    }
                    </li>

                  ))
                }

              </ul>
              
            </div>
          ) 
        }
      </div>
      
      ) }
    </div>
    </>
  )
}
