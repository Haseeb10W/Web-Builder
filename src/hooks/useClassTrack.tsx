import { Block } from "@/types/blocksSchema";
import { useEffect, useState } from "react";



export default function useClassTracking(block:Block){
  const [classTrackFull, setClassTrack] = useState<string>('')

  useEffect(()=>{
    const classes = {...block?.classTracking}

    let classesTrack = '';
    for(const classs of Object.values(classes)){
      classesTrack+= ` ${classs} `;

    }

    setClassTrack(classesTrack)

  }, [block.classTracking])


  return classTrackFull


}