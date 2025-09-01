import { Block } from "@/types/blocksSchema";
import { allEditSchema } from "@/types/editSchema";
import { findAllBlocks } from "./blockHandlers";


export const loadAllStyles = (pageData:allEditSchema)=>{
  const allData  = pageData?.editData;
      // console.log(allData);
      const currentEdit = pageData?.editType;
      const styleName = `${currentEdit}-styles`

      let styleTag = document.getElementById(styleName);
      if(!styleTag){
        styleTag = document.createElement('style');
        styleTag.id = styleName;
        document.head.appendChild(styleTag);
      }

     let allBlockStyles : {[key:string]: any} = {}
     let allBlocks: Block[] = [];
     let allCSS = '';
     let baseCSS = '';
     let tabletCSS = '';
     let desktopCSS = '';
     let hoverCSS = '';

     if(pageData?.editData?.content){
      allBlocks = findAllBlocks(pageData?.editData?.content)

     }

    // console.log(allBlocks);
      
    allBlocks.forEach((block)=>{
      const newStyles = {...block?.responsiveStyles}

      allBlockStyles[block?.id] = newStyles;
      
      

    })

    // console.log(allBlockStyles);

    for(const blockId in allBlockStyles){

      const baseStyle = allBlockStyles[blockId].baseStyle;
      const tabletStyle = allBlockStyles[blockId].tablet;
      const desktopStyle = allBlockStyles[blockId].desktop;
      const hoverStyle = allBlockStyles[blockId].hoverStyles;
      const uniqueClass = `.block-${blockId}` 


      if(baseStyle){

        baseCSS += `
          ${uniqueClass}{
              ${Object.entries(baseStyle).filter(([key,value])=> value !== '').map(([key,value])=>`${key}: ${value};`).join('\n')}

          }

        `


      }

      if(tabletStyle){

        tabletCSS += `

          ${uniqueClass}{
              ${Object.entries(tabletStyle).filter(([key,value])=> value !== '').map(([key,value])=>`${key}: ${value};`).join('\n')}

          }

        `

      }

      if(desktopStyle){

        desktopCSS += `
          ${uniqueClass}{
              ${Object.entries(desktopStyle).filter(([key,value])=> value !== '').map(([key,value])=>`${key}: ${value};`).join('\n')}

          }

        `

      }


      if(hoverStyle){

        hoverCSS += `
          ${uniqueClass}:hover{
              ${Object.entries(hoverStyle).filter(([key,value])=> value !== '').map(([key,value])=>`${key}: ${value};`).join('\n')}
          }
        `

      }


    }
    
    allCSS += `${baseCSS} 
    ${hoverCSS}
    
    @media (min-width: 648px){
      ${tabletCSS}
    }

    @media (min-width: 1000px){
      ${desktopCSS}
    }
    
    `
    console.log(allCSS)

    styleTag.innerHTML = allCSS
  

}