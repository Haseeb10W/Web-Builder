'use client';


import React from 'react'
import { menuBlock } from './menuBlockSchema';
import Link from 'next/link';


interface subNavProps {
  items : menuBlock['props']['items'][0];
  status: string;

}


function MenuSubNavs({items, status}:subNavProps) {
  return (
    <React.Fragment>
    {
               items?.subNav && items?.subNav?.length > 0 && (
                <ul className={`subMenuList hidden min-w-[100px] w-max absolute ${status == 'first'? '  top-full left-0 group-hover:block ': 'top-0 left-[101%] nfst-sub'}  bg-white border border-gray-200`}>
                  {
                    items?.subNav?.map((subItems, subIndex) => (
                      <li className={`subMenuItems subnav relative text-sm px-2 py-1 cursor-pointer hover:bg-gray-200/70`} key={subIndex}>
                        <Link href={subItems?.link || '#'} className='subMenuLink'>{subItems?.text}</Link>
                        {
                          
                            <MenuSubNavs items={subItems} status='2nd'/>
                          
                        }
                      </li>
                    ))
                  }
                </ul>
              )
            }
    
    </React.Fragment>
    
  )
}

export default MenuSubNavs