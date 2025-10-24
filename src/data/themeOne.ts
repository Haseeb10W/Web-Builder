import { themeData } from "@/types/editSchema";
import { HeaderOne } from "./components/Headers";
import { BannerOne } from "./components/HeroSections";
import { ChooseUs } from "./components/ChosseUs";


export const themeOne : themeData ={
  title: 'theme One',
  description: 'This is theme one description',
    pages: [
      {
      kind : 'page',
      title: 'Home Page',
      slug : 'home',
      id: 'page-home-34454',
      content: [
           BannerOne,
           ChooseUs
      
      ],
        styling: {
        },
        
        active: true,
        editable : false,
        pageStatus : 'main' , 

    },
  ],

    headers: [
      HeaderOne,
     

    ],
    footers: [
      {
      kind : 'footer',
        title: 'Footer Page',
        slug : 'footer1',
        id: 'p-footer-34454',
        content: [

          { id: 'flex-7hbw2shehhr32',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              'flex-direction':'column'
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "p-2 flex w-[49.5%] ",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
            // All Blocks inside this flex container
        

        { id: 'heading-2fniuhr2g9t2ndsoi',
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
           text: "This is the footer heading",
          level: 'h1',
        }},
        
          
        ],
        props: {},
      },
      
      ],
        styling: {
          },
        
        active: true,
        editable : false,
        

    },
    ],
    active:true,
    themeEditMode: 'on' ,
}