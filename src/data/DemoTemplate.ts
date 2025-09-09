import { ContentSchema, headerSchema, pageSchema, SiteData } from "@/types/editSchema";
import { Radius } from "lucide-react";

export const demoData :pageSchema  = {

      kind: "page",
      id: "34127ft346sfd",
      slug: "home",
      title: "Home",
      description: "Welcome to our homepage",
      content: [
         { id: 'text-145j9u923',
          type: 'text',
          responsiveStyles: {
            baseStyle:{"color": "black"},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"": ""},
          },
          styles  : {
             color: "black"
          },
          tailWindClasses: "text-2xl font-bold p-4 ml-[5%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
          text: "Blogging Website",
           }},

           { id: 'image-2nohqwy28',
          type: 'image',
          responsiveStyles: {
            baseStyle:{"border-radius":"10px"},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "text-xl font-bold  w-[90%] m-auto ml-[5%] h-[400px]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "http://localhost:6200/media/coffee2.jpg",
          alt: "img",
          link: "",
          width: "",
          height: "",
         }},

          { id: 'heading-3dnh3q9y98',
          type: 'heading',
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"": ""},
          },
          styles  : {

          },
          tailWindClasses: "text-2xl font-bold text-black px-4 py-2 ml-[5%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: "Cheerful Loving Couple Bakers Drinking Coffee",
          level: 'h1',
          }},

        { id: 'text-1hewh9y8322y0',
          type: 'text',
          responsiveStyles: {
            baseStyle:{"color": "black"},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"": ""},
          },
          styles  : {
             color: "black"
          },
          tailWindClasses: "text-bas px-4 ml-[5%] w-[80%] text-justify",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
          text: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at …",
           }},

        { id: 'button-5nsdfjuhw998',
          type: 'button',
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-base p-2 fdelex justify-center ml-[6%] border borr-black w-[90px] rounded-sm capitalize font-semibold my-2 hover:bg-black hover:text-white",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: "buy now",
           link: "",
           target : "_blank",
           icon : ""
        }},


        { id: 'flex-6bndsiugr2398u',
          type: 'flex',
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "px-15 flex justify-between mt-[2%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

        // flex one
         { id: 'flex-7hbdhsuhyr32',
          type: 'flex',
          responsiveStyles: {
            baseStyle:{},
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
        
        { id: 'image-1fuhr98yq43u',
          type: 'image',
          responsiveStyles: {
            baseStyle:{"color": "red"},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"color": "yellow"},
          },
          styles  : {

          },
          tailWindClasses: "text-xl font-bold w-[100%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "http://localhost:6200/media/dress3.jpg",
          alt: "img",
          link: "",
          width: "",
          height: "",
        }},

        { id: 'heading-2fniuhr2g9t2ndsoi',
          type: 'heading',
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
           text: "Cosy Bright Office In Yellow And Grey Colors",
          level: 'h1',
        }},
              
        { id: 'text-3hrh398y9hir',
          type: 'text',
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-base text-justify",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          text: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at …",
        }},

        { id: 'button-4nwreoh9324y9',
          type: 'button',
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-base font-bold border border-black p-2 hover:bg-black hover:text-white w-[20%] capitalize rounded-sm flex justify-center",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: "click Now",
           link: "",
           target : "_blank",
           icon : ""
        }},
           ],
           props: {
            direction:'column'
           }
         },
         //end flex one

       //flex two
          { id: 'flex-8y398y9hohq98w',
          type: 'flex',
          responsiveStyles: {
            baseStyle:{},
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
        { id: 'image-1hi3h498yerhih9',
          type: 'image',
          responsiveStyles: {
            baseStyle:{"color": "red"},
            tablet: {"tablet": "768px"},
            desktop: {"desktop": "1024px"},
            hoverStyles: {"color": "yellow"},
          },
          styles  : {

          },
          tailWindClasses: "text-xl font-bold w-[100%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "http://localhost:6200/media/dress2.jpg",
          alt: "img",
          link: "",
          width: "",
          height: "",
        }},

        { id: 'heading-2y398yndfshnf',
          type: 'heading',
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
           text: "Loft Office With Vintage Decor For Creative Working",
          level: 'h1',
        }},
              
        { id: 'text-3hu9833y982u',
          type: 'text',
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-base text-justify",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          text: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at …",
        }},

        { id: 'button-4hwopi87237',
          type: 'button',
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {

          },
          tailWindClasses: "text-base font-bold border border-black p-2 hover:bg-black hover:text-white w-[25%] capitalize rounded-sm flex justify-center",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           props : {
           text: "continue Now",
           link: "",
           target : "_blank",
           icon : ""
        }},
           ],
           props: {
            direction:'column'
           }
         },
        //end flex two
           ],
           props: {
            direction: 'row',
            gap:'0px'
           }
        },
        ],
  styling: {
    'color':'red'
  },
  editable : false,
}

export const headData :headerSchema = {
      kind: 'header',
      title : 'Home',
      slug : 'home',
      id : '12',
      content: [],
      styling: {
        
      },
      active : false,
      editable : true,
  
}



