import { Block } from "@/types/blocksSchema";

export const BannerOne:Block  =  { id: 'flex-7hbdhsuhyr32',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              'flex-direction':'column',
              'background-image': 'url("/media/images/banner.png")',
              'background-color':"red"
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "p-2 flex h-screen bg-red-300 w-[100%] ",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
            // All Blocks inside this flex container
        

        { id: 'heading-2fnijoig9t2ndsoi',
          type: 'heading',
          title: 'Heading Block',
          responsiveStyles: {
            baseStyle:{"color": "red"},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"color": "yellow"},
          },
          styles  : {

          },
          tailWindClasses: "text-xl font-bold",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: " page ",
          level: 'h1',
        }},
        
          
        ],
        props: {},
          }