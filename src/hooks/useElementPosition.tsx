import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

type UseElementPositionReturn<T extends HTMLElement> = [
  React.RefObject<T | null> ,
  { top: number; left: number; width: number; height: number },
  () => void
];

function useElementPosiiton<T extends HTMLElement = HTMLDivElement>(scrollAllow:boolean): UseElementPositionReturn<T>{
  const elementRef = useRef<T>(null);
  const [position, setPosition] = useState({top:0, left: 0, width: 0, height: 0})
  const [changePosition, setChangePosition] = useState(false);
  const [scroll, setScroll] = useState(false)

  const getPosition = ()=>{
    if(elementRef.current){
      const rect = elementRef.current.getBoundingClientRect()
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width, 
        height: rect.height
      })
    }
  }

  useEffect(()=>{
    
    getPosition()
   
    
    if(scrollAllow){
      window.addEventListener('scroll', getPosition)
      window.addEventListener('resize', getPosition);
    }
    

    return ()=>{
      window.removeEventListener('resize', getPosition);
      window.removeEventListener('scroll', getPosition);
    }

  }, [])

 
  return [elementRef, position, getPosition ] 


}

export default useElementPosiiton