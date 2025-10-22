'use client';


import DashboardHeader from '@/components/adminPanel/header';
import DashboardSideBar from '@/components/adminPanel/SideBar';
import React from 'react'

function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <>
      <div className={`w-full h-screen  `}>

        <div className="header h-[40px] bg-gray-400">
          <DashboardHeader />
          
        </div>

        <div className="body flex h-[calc(100vh-40px)] w-full" >
          <div className="side h-full overflow-y-auto overflow-x-hidden border-r border-gray-300 min-[940px]:w-60">
            <DashboardSideBar />
          </div>
          <div className="body-left h-full  min-[940px]:w-[calc(100vw-240px)]  overflow-x-hidden overflow-y-auto flex-1">
            {children}
          </div>

        </div>
        
      </div>
      
    
    </>
  )
}

export default DashboardLayout