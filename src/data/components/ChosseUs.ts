import { Block } from "@/types/blocksSchema";


export const ChooseUs:Block =  { id: 'flex-left-7hbyyyddhehhr32',
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
          tailWindClasses: "w-full flex-col items-center p-5",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

           // FEATURED Badge
            {
      id: 'featured-badge',
      type: 'text',
      title: 'Featured Badge',
      responsiveStyles: {
        baseStyle: {
          'color': 'green',
          'background-color': '#e6ffe6', // Light green background for badge
          'padding': '4px 12px',
          'border-radius': '9999px',
          'margin-bottom': '16px',
        },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-sm w-30 font-semibold uppercase text-center  tracking-wider",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "featured",
      },
            },
            // FEATURED Badge

            // Main Heading: Why you Should Choose Us
           {
      id: 'heading-choose-us',
      type: 'heading',
      title: 'Section Heading',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-4xl font-bold text-center",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Why you Should Choose Us",
        level: 'h2',
      }
           },
            // Main Heading: Why you Should Choose Us

            // Introductory Paragraph
            {
      id: 'text-intro',
      type: 'text',
      title: 'Intro Text',
      responsiveStyles: {
        baseStyle: { "color": "gray" },
        tablet: {},
        desktop: { "width": "700px" },
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-lg text-center mt-4 mb-10",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "EhyaScape is an photography team based on Yogyakarta, Indonesia. We are small team with big vision of future. We believe everything can be momorize with picture.",
      }
            },
            // Introductory Paragraph
            


           //flex  container box
          { id: 'flex-7hbdtytydhehhr32',
          type: 'flex',
          title: 'flex Container',
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
          tailWindClasses: "p-2  gap-7 justify-center flex-wrap max-w-[1000px]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        //flex box 1
         { id: 'flex-left-7hbuuddhehhhhr32',
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
          tailWindClasses: "p-6 flex-col w-[300px] rounded-lg gap-2 border-[1px] border-[#E5EAF4]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

          //icon
           { id: 'image-htht2nohqwy28',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-[20%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/camera.svg",
          alt: "img",
          link: "",
          width: "",
          height: "",
         }
           },
          //icon

           //heading Great Photos
           {
      id: 'heading-Great Photos',
      type: 'heading',
      title: 'Section Heading',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[24px] font-bold ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Great Photos",
        level: 'h2',
      }
           },
          //heading Great Photos

          // Introductory Paragraph
          {
      id: 'text-Great Photos',
      type: 'text',
      title: 'Text',
      responsiveStyles: {
        baseStyle: { "color": "gray" },
        tablet: {},
        desktop: { "width": "700px" },
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[18px]   ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "We always make sure give you the best photos output with High Definition Pictures.",
      }
          },
          // Introductory Paragraph
              
        ],
        props: {},
         },
        //flex box 1
         
     //flex  box 2
        { id: 'flex-left-7hbuuigergerguddhehhr32',
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
          tailWindClasses: "p-6 flex-col w-[300px] rounded-lg gap-2 border-[1px] border-[#E5EAF4]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

          //icon
           { id: 'image-htht2nohqwy28',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-[20%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/them.svg",
          alt: "img",
          link: "",
          width: "",
          height: "",
         }
           },
          //icon

      //heading Easy Booking
           {
      id: 'heading-Easy Booking',
      type: 'heading',
      title: 'Section Heading',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[24px] font-bold ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Easy Booking",
        level: 'h2',
      }
           },
          //Easy Booking

          // Introductory Paragraph
          {
      id: 'text-Easy Booking',
      type: 'text',
      title: 'Text',
      responsiveStyles: {
        baseStyle: { "color": "gray" },
        tablet: {},
        desktop: { "width": "700px" },
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[18px]   ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "You can easy booking our photographers by website and also by apps.",
      }
          },
          // Introductory Paragraph
              
        ],
        props: {},
          },
      //flex box 2

      //flex  box 3
        { id: 'flex-left-7hbuudderggrghehhr32',
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
          tailWindClasses: "p-6 flex-col w-[300px] rounded-lg gap-2 border-[1px] border-[#E5EAF4]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

          //icon
           { id: 'image-htht2nohqwy28',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-[20%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/circle.svg",
          alt: "img",
          link: "",
          width: "",
          height: "",
         }
           },
          //icon

      //heading Anytime & Anywhere
           {
      id: 'heading-Anytime & Anywhere',
      type: 'heading',
      title: 'Section Heading',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[24px] font-bold ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Anytime & Anywhere",
        level: 'h2',
      }
           },
          //heading Great Photos

          // Introductory Paragraph
          {
      id: 'text-Anytime & Anywhere',
      type: 'text',
      title: 'Text',
      responsiveStyles: {
        baseStyle: { "color": "gray" },
        tablet: {},
        desktop: { "width": "700px" },
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[18px]   ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "You can schedule your photoshoot anytime and anywhere you want to do it.",
      }
          },
          // Introductory Paragraph
              
        ],
        props: {},
          },
      //flex box 3

      //flex box 4
         { id: 'flex-left-7hbuuddherggrgerhhr32',
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
          tailWindClasses: "p-6 flex-col w-[300px] rounded-lg gap-2 border-[1px] border-[#E5EAF4]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

          //icon
           { id: 'image-htht2nohqwy28',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-[20%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/person.svg",
          alt: "img",
          link: "",
          width: "",
          height: "",
         }
           },
          //icon

      //heading Great Photos
           {
      id: 'heading-Professional',
      type: 'heading',
      title: 'Section Heading',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[24px] font-bold ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Professional",
        level: 'h2',
      }
           },
          //heading Great Photos

    // Introductory Paragraph
      {
      id: 'text-Professional',
      type: 'text',
      title: 'Text',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: { },
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[18px]",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "We have more than 1,000 photographers and ready to take best moment with you.",
      }
          },
          // Introductory Paragraph
              
        ],
        props: {},
         },
      //flex box 4
         
     //flex  box 5
        { id: 'flex-left-7hbuudt47t46dhehhr32',
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
          tailWindClasses: "p-6 flex-col w-[300px] rounded-lg gap-2 border-[1px] border-[#E5EAF4]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

          //icon
           { id: 'image-htht2nohqwy28',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-[20%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/doller.svg",
          alt: "img",
          link: "",
          width: "",
          height: "",
         }
           },
          //icon

      //heading Great Photos
           {
      id: 'heading-Affordable',
      type: 'heading',
      title: 'Section Heading',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[24px] font-bold ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Affordable",
        level: 'h2',
      }
           },
          //heading Great Photos

          // Introductory Paragraph
          {
      id: 'text-Affordable',
      type: 'text',
      title: 'Text',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {  },
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[18px]   ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Get great photos starting from USD 75 per session. Always have discount every month",
      }
          },
          // Introductory Paragraph
              
        ],
        props: {},
          },
      //flex box 5

      //flex  box 6
        { id: 'flex-left-7hbuur9tytddhehhr32',
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
          tailWindClasses: "p-6 flex-col w-[300px] rounded-lg gap-2 border-[1px] border-[#E5EAF4]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

          //icon
           { id: 'image-htht2nohqwy28',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-[20%]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/rocket.svg",
          alt: "img",
          link: "",
          width: "",
          height: "",
         }
           },
          //icon

      //heading Great Photos
           {
      id: 'heading-Fast File Delivery',
      type: 'heading',
      title: 'Section Heading',
      responsiveStyles: {
        baseStyle: { "color": "black" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[24px] font-bold ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Fast File Delivery",
        level: 'h2',
      }
           },
          //heading Great Photos

          // Introductory Paragraph
          {
      id: 'text-Fast File Delivery',
      type: 'text',
      title: 'Text',
      responsiveStyles: {
        baseStyle: { "color": "gray" },
        tablet: {},
        desktop: { "width": "700px" },
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-[18px]   ",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Ready to give you fast file delivery. We make sure file will delivered maximal 2x48. ",
      }
          },
          // Introductory Paragraph
              
        ],
        props: {},
          },
      //flex box 6
        
        
          
        ],
        props: {},
           },
            //flex container box

        
          
        
        
          
        ],
        props: {},
          }





