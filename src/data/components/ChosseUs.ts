import { Block } from "@/types/blocksSchema";


export const ChooseUs:Block =  { id: 'flex-left-7hbddhehhr32',
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
          tailWindClasses: "w-full p-5",
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
      tailWindClasses: "text-sm font-semibold uppercase tracking-wider",
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

            // Main Heading: Why you Should Choose Us
        
          
        
        
          
        ],
        props: {},
          }