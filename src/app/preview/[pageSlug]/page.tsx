'use client';





import BlockReader from '@/components/BlockReader';
import { useSideToggle } from '@/contexts/toggleSide';
import { demoData } from '@/data/DemoTemplate';
import { useAppSelector } from '@/hooks/reduxRoot';
import { makeBlockEditChangeable } from '@/lib/builder/blockHandlers';
import { loadAllStyles } from '@/lib/builder/renderHandling';
import { Block } from '@/types/blocksSchema';
import { editSchema, footerSchema, headerSchema, renderSchema } from '@/types/editSchema';
import React, { useEffect, useState } from 'react'





export default function PreviewRenderer() {

  const [activeHeader, setActiveHeader] =  useState<headerSchema | null>(null);
  const [activeFooter, setActiveFooter] = useState<footerSchema | null>(null);
  const [renderData, setRenderData] = useState<Block[]>([])

  // const {previewData} = useSideToggle()

  const previewData = useAppSelector((state)=>state.previewData.value)
  



  useEffect(()=>{

    const fullContent:Block[] = [];

    if(activeHeader){
      fullContent.push(...activeHeader.content)

    }

    if(previewData){

      const dataPage = makeBlockEditChangeable(previewData.content, 'reader', undefined);
      

      if(dataPage){
        fullContent.push(...dataPage)
      }

      

    }
    


    if(activeFooter){
      fullContent.push(...activeFooter.content)
    }



    loadAllStyles('page', fullContent)

    setRenderData(fullContent)



  }, [])




  return (
    <>
    <div>
      {
        renderData.map((block, index)=> (
          <React.Fragment key={index}>
          <BlockReader  index={index}  props={block}   />
          </React.Fragment>
        ))
      }




    </div>
    
    
    </>
    
  )
}


