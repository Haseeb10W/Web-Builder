import { Block } from "@/types/blocksSchema";
// Assuming you have relevant icon names like 'facebook', 'twitter', 'linkedin' available in your system

export const OurTeam:Block =  { id: 'flex-left-7hbddhehhr32',
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
          styles  : {
          },
          tailWindClasses: "p-10 flex-col items-center w-full ", // Removed bg-[#F7F7FD] as the image looks white/transparent
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[

    // Meet our team badge
    {
      id: 'Meet our team',
      type: 'text',
      title: 'Meet our team',
      responsiveStyles: {
        baseStyle: {
          'color': '#20B2AA', // A nice teal/light-blue green
          'background-color': '#E0FFFF !important', // Pale cyan for badge background
          'padding': '4px 12px',
          'border-radius': '9999px',
          'margin-bottom': '16px',
        },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "w-40 text-sm rounded-full bg-gray-600 p-1 font-semibold uppercase text-center tracking-wider",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Meet our team",
      },
      },
    // Meet our team badge

      //  Main Heading:Your memories, beautifully captured with passion
           {
      id: 'heading-passion',
      type: 'heading',
      title: 'passion',
      responsiveStyles: {
        baseStyle: { "color": "#1F2937" }, // Dark gray
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "w-[600px] text-4xl text-center font-bold my-5",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Your memories, beautifully captured with passion",
        level: 'h2',
      }
           },
      // Main Heading: Your memories, beautifully captured with passion


      //flex container for the 3 team boxes
       { id: 'flex-left-7hbyyd566dhehhr32',
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
          styles  : {
          },
          tailWindClasses: "max-w-[1200px] flex justify-between gap-8", // Make it horizontal and add gap
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
          // --- TEAM BOX 1: Hasan Ahmed ---
           { id: 'team-box-hasan',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex-col w-[350px]", // width and vertical layout
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        //image
        { id: 'image-hasan',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{"border-radius":"10px"},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-full rounded-xl shadow-lg", // Use full width of parent and rounded corners
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/per1.png", // Placeholder for actual image
          alt: "Hasan Ahmed",
          link: "",
          width: "",
          height: "",
         }},
        //image

        //info flex
         { id: 'flex-info-hasan',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "w-full flex justify-between items-center mt-3 px-1", // Horizontal layout, space between, vertically centered
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
         //flex left side (Name and Role)
        { id: 'flex-name-role-hasan',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex-col",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
    // Name: Hasan Ahmed
           {
      id: 'heading-Hasan Ahmed',
      type: 'heading',
      title: 'Name',
      responsiveStyles: {
        baseStyle: { "color": "#1F2937" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-lg font-bold",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Hasan Ahmed",
        level: 'h3',
      }
           },

    // Role: Photographer
    {
      id: 'text-role-hasan',
      type: 'text',
      title: 'Role',
      responsiveStyles: {
        baseStyle: { "color": "#6B7280" }, // Gray
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-sm",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Photographer",
      }
            },
        
          
        ],
        props: {},
          },
         //flex left side (Name and Role)

         //flex right side (Social Icons)
         { id: 'flex-social-hasan',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex gap-2 items-center text-gray-500", // Horizontal, small gap, gray color
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        //icon: Facebook
          { 
          id: 'icon-facebook-hasan',
          type: 'icon',
          title:"Facebook",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-blue-600 cursor-pointer", // Standard small icon style
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/facebook",
                  icon : "facebook" // Assuming 'facebook' icon is available
          }
          },
        //icon: Twitter
          { 
          id: 'icon-twitter-hasan',
          type: 'icon',
          title:"Twitter",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-blue-400 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/twitter",
                  icon : "twitter" // Assuming 'twitter' icon is available
          }
          },
        //icon: linkedin
          { 
          id: 'icon-linkedin-hasan',
          type: 'icon',
          title:"linkedin",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-pink-600 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/linkedin",
                  icon : "linkedin" // Assuming 'linkedin' icon is available
          }
          },
          
        ],
        props: {},
          },
         //flex right side (Social Icons)
        
        ],
        props: {},
         },
        //info flex
        
        
        
        
          
        ],
        props: {},
          },
          // --- TEAM BOX 1: Hasan Ahmed ---


          // --- TEAM BOX 2: Mosqur Alam ---
           { id: 'team-box-mosqur',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex-col w-[350px]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        //image
        { id: 'image-mosqur',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{"border-radius":"10px"},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-full rounded-xl shadow-lg",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/per2.png", // Placeholder for Mosqur image
          alt: "Mosqur Alam",
          link: "",
          width: "",
          height: "",
         }},
        //image

        //info flex
         { id: 'flex-info-mosqur',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "w-full flex justify-between items-center mt-3 px-1", 
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
         //flex left side (Name and Role)
        { id: 'flex-name-role-mosqur',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex-col",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
    // Name: Mosqur Alam
           {
      id: 'heading-Mosqur Alam',
      type: 'heading',
      title: 'Name',
      responsiveStyles: {
        baseStyle: { "color": "#1F2937" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-lg font-bold",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Mosqur Alam",
        level: 'h3',
      }
           },

    // Role: Photographer
    {
      id: 'text-role-mosqur',
      type: 'text',
      title: 'Role',
      responsiveStyles: {
        baseStyle: { "color": "#6B7280" }, // Gray
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-sm",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Photographer",
      }
            },
        
          
        ],
        props: {},
          },
         //flex left side (Name and Role)

         //flex right side (Social Icons)
         { id: 'flex-social-mosqur',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex gap-2 items-center text-gray-500", 
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        //icon: Facebook
          { 
          id: 'icon-facebook-mosqur',
          type: 'icon',
          title:"Facebook",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-blue-600 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/facebook",
                  icon : "facebook" 
          }
          },
        //icon: Twitter
          { 
          id: 'icon-twitter-mosqur',
          type: 'icon',
          title:"Twitter",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-blue-400 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/twitter",
                  icon : "twitter" 
          }
          },
        //icon: linkedin
          { 
          id: 'icon-linkedin-mosqur',
          type: 'icon',
          title:"linkedin",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-pink-600 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/linkedin",
                  icon : "linkedin" 
          }
          },
        
        ],
        props: {},
          },
         //flex right side (Social Icons)
        
        ],
        props: {},
         },
        //info flex
        
        
        
        
          
        ],
        props: {},
          },
          // --- TEAM BOX 2: Mosqur Alam ---


          // --- TEAM BOX 3: Foysal Khan ---
           { id: 'team-box-foysal',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex-col w-[350px]",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        //image
        { id: 'image-foysal',
          type: 'image',
          title:"image",
          responsiveStyles: {
            baseStyle:{"border-radius":"10px"},
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
            
          },
          tailWindClasses: "w-full rounded-xl shadow-lg",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
          props : {
          src: "/media/images/per3.png", // Placeholder for Foysal image
          alt: "Foysal Khan",
          link: "",
          width: "",
          height: "",
         }},
        //image

        //info flex
         { id: 'flex-info-foysal',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "w-full flex justify-between items-center mt-3 px-1", 
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
         //flex left side (Name and Role)
        { id: 'flex-name-role-foysal',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex-col",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
    // Name: Foysal Khan
           {
      id: 'heading-Foysal Khan',
      type: 'heading',
      title: 'Name',
      responsiveStyles: {
        baseStyle: { "color": "#1F2937" },
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-lg font-bold",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Foysal Khan",
        level: 'h3',
      }
           },

    // Role: Photographer
    {
      id: 'text-role-foysal',
      type: 'text',
      title: 'Role',
      responsiveStyles: {
        baseStyle: { "color": "#6B7280" }, // Gray
        tablet: {},
        desktop: {},
        hoverStyles: {},
      },
      styles: {},
      tailWindClasses: "text-sm",
      customClasses: "",
      classTracking: {},
      draggable: false,
      resizable: false,
      editable: false,
      link: "",
      props: {
        text: "Photographer",
      }
            },
        
          
        ],
        props: {},
          },
         //flex left side (Name and Role)

         //flex right side (Social Icons)
         { id: 'flex-social-foysal',
          type: 'flex',
          title: 'Flex Container',
          responsiveStyles: {
            baseStyle:{
              
            },
            tablet: {},
            desktop: {},
            hoverStyles: {},
          },
          styles  : {
          },
          tailWindClasses: "flex gap-2 items-center text-gray-500", 
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "/home",
           children:[
        
        //icon: Facebook
          { 
          id: 'icon-facebook-foysal',
          type: 'icon',
          title:"Facebook",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-blue-600 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/facebook",
                  icon : "facebook" 
          }
          },
        //icon: Twitter
          { 
          id: 'icon-twitter-foysal',
          type: 'icon',
          title:"Twitter",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-blue-400 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/twitter",
                  icon : "twitter" 
          }
          },
        //icon: linkedin
          { 
          id: 'icon-linkedin-foysal',
          type: 'icon',
          title:"linkedin",
          responsiveStyles: {
            baseStyle:{"": ""},
            tablet: {},
            desktop: {},
            hoverStyles: {"": ""},
          },
          styles  : {
          },
          tailWindClasses: "text-lg hover:text-pink-600 cursor-pointer",
          customClasses: "my-custom-class",
          classTracking: {},
          draggable: false,
          resizable: false,
          editable: false,
          link: "",
          props : {
                  link: "/linkedin",
                  icon : "linkedin" 
          }
          },
        
        ],
        props: {},
          },
         //flex right side (Social Icons)
        
        ],
        props: {},
         },
        //info flex
        
        
        
        
          
        ],
        props: {},
          },
          // --- TEAM BOX 3: Foysal Khan ---

        ],
        props: {},
          },
      //flex container for the 3 team boxes
        
        
        
        
          
        ],
        props: {},
          }