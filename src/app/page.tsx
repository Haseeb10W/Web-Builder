'use client';

import BlockReader from "@/components/BlockReader";
import { themeOne } from "@/data/themeOne";
import { loadAllStyles } from "@/lib/builder/renderHandling";
import { Block } from "@/types/blocksSchema";
import { SiteData, themeData } from "@/types/editSchema";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {

  const [renderData, setRenderData] = useState<Block[]>([]);
  const [data, setData] = useState<SiteData | themeData | null>(null);

  useEffect(()=>{
    const fetchData = themeOne as themeData | SiteData;

    setData(fetchData)

  },[])


  useEffect(()=>{

    let fullContent = [];

    if(data && 'headers' in data){
      const activeHeader = data.headers?.find((header)=> header.active);
      if(activeHeader){
        fullContent.push(...activeHeader.content)
      }
    }

    if(data && 'pages' in data){
      const mainPage = data.pages?.find((pag)=> pag.pageStatus === 'main' && pag.active);
      if(mainPage){
        fullContent.push(...mainPage.content)
      }
    }


    if(data && 'footers' in data){
      const activeFooter = data.footers?.find((footer)=> footer.active);
      if(activeFooter){
        fullContent.push(...activeFooter.content)
      }
    }


    loadAllStyles('all', fullContent)


    setRenderData(fullContent)



  },[data])
  



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
  );
}
