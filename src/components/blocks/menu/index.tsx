'use client';

import { blockProps } from '@/types/blocksSchema';
import React from 'react'
import { menuBlock } from './menuBlockSchema';
import Link from 'next/link';
import Section from '@/components/builder/Section';
import MenuSubNavs from './menuSubNavs';
import useClassTracking from '@/hooks/useClassTrack';


function Menu({block, index, onDelete, onCopy}: blockProps) {
  const trackingClass = useClassTracking(block)

  const menuBlock = block as menuBlock;

  if(!menuBlock?.editable && !menuBlock?.draggable){
    return (
      <div key={menuBlock?.id} id={menuBlock?.customCSSID} style= {{
        ...menuBlock?.styles

      }}
      className = {`flex-child block-${menuBlock?.id} ${menuBlock?.tailWindClasses} ${menuBlock?.customClasses} `}
      
    >
      <ul className={`menuList  flex gap-2 ${menuBlock?.props.childStyles?.menuList?.tailwindClasses}`} key={menuBlock?.id}>
        {
        menuBlock?.props?.items?.map((items,index)=>{
           return(
            <React.Fragment key={index}>
            <li className={`menuItems group relative ${trackingClass}`} key={index}>
              <Link href={items.link || '#'} className='menuLink'>{items.text}</Link>
              <MenuSubNavs items={items} status='first'/>
              
            </li>

            
            </React.Fragment>
           )
        })
      }

      </ul>





    </div>
    )

  }



  const menuStyles = {
    styling : {
      ...menuBlock?.styles

    },
    cssId: menuBlock?.customCSSID,
    classes : ` block-editor-${menuBlock?.id} cursor-default selected-child ${menuBlock?.tailWindClasses} ${menuBlock?.customClasses}  `

  }

  return (
    <Section id={menuBlock?.id} onDelete={(id)=>onDelete?.(id)} onCopy={(id)=>onCopy?.(id)} index={index} allStyles={menuStyles}>
      <ul className={`menuList  flex gap-2`} key={menuBlock?.id}>
        {
        menuBlock?.props?.items?.map((items,index)=>{
           return(
            <React.Fragment key={index}>
            <li className='menuItems group relative' key={index}>
              <Link href={items.link || '#'} className='menuLink'>{items.text}</Link>
              <MenuSubNavs items={items} status='first' />
              {/* {
              items?.subNav && items?.subNav?.length > 0 && (
                <ul className='subMenuList hidden group-hover:block absolute top-full left-0 bg-gray-200'>
                  {
                    items?.subNav?.map((subItems, subIndex) => (
                      <li className='subMenuItems' key={subIndex}>
                        <Link href={subItems?.link || '#'} className='subMenuLink'>{subItems?.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              )
            } */}
            </li>

            
            </React.Fragment>
           )
        })
      }

      </ul>
        
        </Section>
  )
}

export default Menu