'use client';


import React, { useState } from 'react';
import { iconMap } from '@/lib/maps/iconMap';
import DynamicIcons from '../DynamicIcons';
import { useSideToggle } from '@/contexts/toggleSide';
import DraggableElement from './DraggableElements';



export default function BuilderSideBar() {
  const [activeTab, setActiveTab] = useState('elements');
  const {toggleSide,setToggleSide} = useSideToggle();

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
        {type: 'button', label: 'Button' , icon: 'button'},
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

    const handleToggleChange = () =>{
    setToggleSide(!toggleSide);
  

  }

  return (
    <>
  <div className={`w-full h-full  min-[1000px]:pb-5 bg-white relative`}>
      
      
    <div className={`flex justify-center px-2 py-2 h-1/12 z-10`}>
        <h3 className="min-[1000px]:text-xl min-[1000px]:z-99 min-[1000px]:w-[80%] text-sm font-bold min-[1000px]:top-0 min-[1000px]:border-0 min-[1000px]:relative border border-gray-300 bg-white absolute -top-7 py-1 pb-2 px-3  text-center rounded-lg -z-2 " onClick={()=>{ window.innerWidth <= 1000 &&  handleToggleChange() }}>Components</h3>
        <span className={`cursor-pointer min-[1024px]:hidden  min-[1000px]:block hidden ml-auto`} onClick={handleToggleChange} ><DynamicIcons name='togglebtn' classes={`hover:text-gray-700`} /></span>
       
      </div>
      {
        !toggleSide && (
      <div className={`min-[1000px]:my-2 -mt-4 min-h-[165px] min-[1000px]:h-11/12 h-full w-full z-99`}>
        <div className="tabs flex  min-[1000px]:w-[90%] w-full  !m-auto text-center min-[1000px]:py-1 min-[1000px]:px-2  bg-gray-200 z-99 min-[1000px]:rounded-lg border border-gray-500/50 min-[1000px]:border-0" >
          <li className={`text-sm min-[1000px]:w-3/6  min-[1000px]:py-2 px-3 py-0.5 min-[1000px]:rounded-l-lg cursor-pointer ${activeTab == 'elements' && 'bg-white'} ` } onClick={()=>handleComponentTabs('elements')}>Elements</li>
          <li className={`text-sm min-[1000px]:w-3/6  min-[1000px]:rounded-r-lg min-[1000px]:py-2 px-3 py-0.5 cursor-pointer ${activeTab == 'templates' && 'bg-white'}`} onClick={()=>handleComponentTabs('templates')}>Templates</li>
        </div>
        {
          activeTab == 'elements' && (
            <div className="flex min-[1000px]:mt-2 px-4  min-[1000px]:h-[calc(100%-40px)]  min-[1000px]:overflow-y-auto overflow-x-auto overflow-y-hidden">
              
              <ul className='flex gap-2 min-[1000px]:flex-col'>
                {
                  elementsData.map((category, index) => (
                    <li key={index} className="min-w-[100px]" title={category.label}>
                      <div className={`flex justify-between items-center cursor-pointer pt-2 `} onClick={() => {window.innerWidth >= 1000 && handleToggleElements(category.value)}  }>
                        <h4 className="text-sm font-semibold my-2">{category.label}</h4>
                        <DynamicIcons name={checkToggleStatus(category.value)? 'downarrow': 'uparrow'} classes= "w-4 h-4 min-[1000px]:block hidden " />
                      </div>
                      {checkToggleStatus(category.value) &&
                      <ul className="flex min-[1000px]:flex-wrap gap-2 min-w-[1000px]:gap-4 mt-2">
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
