import { Block } from "@/types/blocksSchema";

export const BannerOne:Block  =  { id: 'flex-7hbdhsuhyr32',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              'flex-direction':'column',
              'background-image': 'url("/media/images/banner.png") ',
              'background-repeat':"no-repeat",
              'background-size':"100% 100% !important",
              'backgroung-position':"center",
              'padding-left':"20px"
            },
            tablet: {},
            desktop: {  
                'background-size':"cover",
                "padding-left":"40px"
            },
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "flex justify-center h-screen w-[100%] ",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        
        // Main Heading 
        { id: 'heading-2fnijoig9t2ndsoi',
          type: 'heading',
          title: 'Heading Block',
          responsiveStyles: {
            baseStyle:{"color": "black"},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-6xl font-bold",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: "Moscow",
           level: 'h1',
        }},
          // Main Heading 

          //paragraph
          { id: 'text-2ffgnijoig9t2ndsoi',
          type: 'text',
          title: 'text',
          responsiveStyles: {
            baseStyle:{"color": "black"},
            tablet: {"tablet": "768px"},
            desktop: {"width": "450px"},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-xl font-normal text-justify mt-4",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sem enim tellus vel molestie donec quis. Est maecenas ultrices magna nibh mi habitasse elementum nisi. ",
          }},
          //paragraph

          //flex
          { id: 'flex-left-7hbddhehhr32',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              // 'flex-direction':'column'
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "flex gap-5 mt-6",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
         //text
          { id: 'text-2ffjoig9t2ndsoi',
          type: 'text',
          title: 'text',
          responsiveStyles: {
            baseStyle:{"color": "black"},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-xl capitalize",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: "more",
          }},
         //text

         //image svg
        { id: 'image-2nohqdtrwy28',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{"border-radius":"10px"},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/arrow.svg",
          alt: "img",
          link: "",
          width: "5%",
          height: "",
         }},
        //image svg
        
        
          
        ],
        props: {},
          },
          //flex
        
          
        ],
        props: {},
          }