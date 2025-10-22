import { headerSchema } from "@/types/editSchema";



export const HeaderOne:headerSchema = {
        kind : 'header',
        title: 'header Page',
        slug : 'header1',
        id: 'p-header-34454',
        content: [

          { id: 'flex-7hbddhehhr32',
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
          tailWindClasses: "p-2 flex justify-between items-center w-[100%] bg-gray-300",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
           // left sife flex container
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
          tailWindClasses: "p-2 flex items-center",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          children:[

        //Website logo
        { id: 'image-1fuhr98yq43u',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{"color": "red"},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"color": "yellow"},
          },
          styles  : {

          },
          tailWindClasses: "text-xl font-bold w-[15%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/images/symbol.svg",
          alt: "img",
          link: "",
          width: "",
          height: "",
        }},
        //Website logo

        //menu list
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
          tailWindClasses: "p-2 flex !gap-3",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
          //menu list  
          { id: 'menu-3dnh3q9y98',
          type: 'menu',
          title:"menu",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"": ""},
          },
          styles  : {

          },
          tailWindClasses: "",
          customClasses: "my-custom-class",
          classTracking: {
            fontFamilyClass:"Poppins"
          },
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
            props : {
               childClasses: ['menuList'],
               childStyles : {
                menuList:{
                  responsiveStyles: {
                  baseStyle:{"": ""},
                  tablet: {"tablet": "768px"},
                  desktop: {"desktop": "1024px"},
                   hoverStyles: {"": ""},
                   },
                  tailwindClasses:"!gap-5",
                }
               },
                items :[
                  { text : "Home",   link : "" },
                  { text : "About",   link : "" },
                  { text : "Services",   link : "" },
                  { text : "Blog",   link : "" },
                  { text : "Contact",   link : "" },
              ],
  }},
          //menu list 
        
        
          
        ],
        props: {},
        },
        //menu list
        
        
          
        ],
        props: {},
        },
          
          //right sife  container
          //icon
          { 
          id: 'icon-3dnh3q9y98',
          type: 'icon',
          title:"icon",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"": ""},
          },
          styles  : {

          },
          tailWindClasses: "text-2xl mr-[20px]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "",
                  icon : "search" 
          }
          },
          //icon
        
          
        ],
        props: {},
          },
      
      ],
        styling: {
          },
        
        active: true,
        editable : false,
        

}
