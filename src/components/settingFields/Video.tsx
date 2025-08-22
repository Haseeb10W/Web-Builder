import React, { useState } from 'react'
import SelectField from './selectField'
import TextField from './TextField';
import { placeholder } from 'jodit/esm/plugins/placeholder/placeholder';
import DynamicIcons from '../DynamicIcons';
import { useSettingType } from '@/contexts/settingsType';

const videoTyp = {
  label:"Video Type",
  tabOpen:true,
  value:"youtube",
  defaultNot:true,
  options:[
    {
       label:"Youtube",
       value:"youtube"
    },
    {
      label:"Custom Url",
      value:"custom"
    },
    {
      label:"Media",
      value:"media"
    }
  ]
}


const yutube = {
  label:"Youtube",
  tab:"",
  tabOpen:true,
  value:"",
  placeholder:"Youtube Vedio URL"
}

const customUrl = {
  label:"Custom Url",
  tab:"",
  tabOpen:true,
  value:"",
  placeholder:"Custom Vedio URL"
}

export default function Video() {
   
  const [videoType,setVideoType] = useState(videoTyp);
  const [youtube,setYoutube] = useState(yutube)
  const [custom,setCustom] = useState(customUrl)
  console.log(videoTyp);
  const { setOpenMedia } = useSettingType();
  const [videoUrl,setVideoUrl] = useState('');

  const handleVedioTyp = (value:any) =>{
        setVideoType((pre:any)=>({
          ...pre,
          value:value
        }))
        setVideoUrl("")
   }
   
   const handleYuVideo = (value:any) =>{
       console.log(value)
       setYoutube((pre:any)=>({
        ...pre,
        value:value
       }))
     
       
       if(videoType?.value == "youtube"){
        const youtubeUrl = showYuVideo(value)
        setVideoUrl(youtubeUrl)
       }


}

const showYuVideo = (value:string)=>{
  const findembed = value.includes('embed')
  const findwatch = value.includes("watch?v=")
  const findShort = value.includes("shorts/")
  console.log(findembed);
  let url = ""
  let youtubeUrl = "https://www.youtube.com/"
   if (findembed){
    const valueString = value.split('embed/')[1] 
    if(valueString == ''){
      url = ""

    }
    url = `${youtubeUrl}embed/${valueString}`
    
   }
   else if(findwatch){
    const valueString = value.split('watch?v=')[1]
    if(valueString == ''){
      url = ""

    }
    url = `${youtubeUrl}embed/${valueString}`
     
   }
   else if(findShort){
    const valueString = value.split('shorts/')[1]
    if(valueString == ''){
      url = ""

    }
    url = `${youtubeUrl}embed/${valueString}`

   }
   else{
      url = ""
   }


  return url


}


   const handleCsVideo = (value:any) =>{
        setCustom((pre:any)=>({
          ...pre,
          value:value
        }))
        if(videoType?.value == "custom"){
        setVideoUrl(value)
       }
   }

     const handledeleteVedio = (e: React.MouseEvent<HTMLSpanElement>) =>{
       e.stopPropagation();
      //  change?.('')/
     }

  return (
    <>
    <SelectField props={videoType} change={(value:any)=>handleVedioTyp(value)}></SelectField>
    {
      videoType?.value == "youtube" && (
        <>
            <TextField props={youtube} change={(value:any)=>handleYuVideo(value)}/>
        </>
      )
    }   

    {videoType?.value == "custom" && (
      <>
        <TextField props={custom} change={(value:any)=>handleCsVideo(value)}/>
      </>
    )} 

    <div className='relative group w-full h-40 mt-2 border border-gray-200 bg-gray-400' onClick={videoType?.value == "media" ? () => setOpenMedia(true): undefined}>
      {(videoType?.value == "youtube" || videoType?.value === "custom") && (
        <>
            <iframe 
            width="100%" height="100%" 
            src={videoUrl || " "}
            
            title="Youtube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </>
      )}

    {videoType?.value == "media" && (
      <>
    <div className="absolute top-0 right-0 hidden group-hover:block cursor-pointer">
     <span onClick={handledeleteVedio}><DynamicIcons name="delete" classes="w-6 h-6 bg-gray-200 p-1" /></span>
    </div> 
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <span><DynamicIcons name="add" classes="w-30 h-30 !text-gray-300/30 "/></span>
    </div>
      </>
    )}

    </div>
    </>
  )
}


