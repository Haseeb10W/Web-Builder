'use client'
import { useEffect, useRef } from "react";


function useDocumentClick<T extends HTMLElement = HTMLDivElement>(handler:any){
  const ref = useRef<T>(null);

  useEffect(()=>{
    const handleClickOutside=(event:Event)=>{

      if(ref.current && !ref.current.contains(event.target as Node)){
        handler();
      }
    }

    document.addEventListener('click', handleClickOutside);

    return ()=>{
      document.removeEventListener('click', handleClickOutside);
    }


  }, [handler])

  return ref;
  

}

export default useDocumentClick;