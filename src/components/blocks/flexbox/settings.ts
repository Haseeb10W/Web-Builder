import { findBlockOverall } from "@/lib/builder/blockHandlers";
import { backgroundSettingsSetter, customSettingSetter, getValueForFields } from "@/lib/builder/settingsSetter";
import { setSettingField } from "@/lib/fieldSettings/fields";
import { settingsSetArgs, settingsSetupSchema } from "@/types/settingsSchema";

const flexSettings:settingsSetupSchema = {

  /*+++++++++++++++++++++++++++++++++++++++  
                  Content
  ++++++++++++++++++++++++++++++++++++++++*/
  content : [

    
  
  //0
  /* +++++++++++++++++  Flex Structure +++++++++++++++++++++++*/
 setSettingField('heading', {label: "Flex Structure", for : 'flexlayout', tabAllow: true , tabOpen: true

   }),

    // 1 : Flex Direction
  setSettingField('select', {
        label: "Direction",
        labelId: "flexDirection",
        defaultNot:true,
        value:'row',
        options: [
      {label: 'Row', value: 'row'},
      {label: 'Row Reverse', value: 'row-reverse'},
      {label: 'Column', value: 'column'},
      {label: 'Column Reverse', value: 'column-reverse'},      
  ],
        for : 'flex-direction',
        tab: 'flexlayout',
        tabOpen: true
  }),

  // 2 : Flex Wrap
  setSettingField('select', {
        label: "Flex wrap",
        labelId: "flexWrap",
        value:'row',
        options: [
      {label: 'Wrap', value: 'wrap'},
      {label: 'No Wrap', value: 'nowrap'},
      {label: 'wrap-reverse', value: 'wrap-reverse'},     
  ],
        for : 'flex-wrap',
        tab: 'flexlayout',
        tabOpen: true
  }),

  //3: Flex Gap
  setSettingField('halfSpace', {
      label: "Gap",
      labelId: "flex-gap-new",
      unitOption:[
       {name: "pixels", value: "px"},
       {name: "percet", value: "%"},
      ],
      unitValue:'px',
      firstField: 'Row',
      secondField: 'Column',
      showUnit:true,
      selectUnit:false,
      for : 'gap',
      tab: 'flexlayout',
      tabOpen: true  
  }
    ),

      // 4: Justify Content
  setSettingField('iconField', {
        label: "Justify Content", 
        labelId: "flex-alignment-horizantal",
        data: [
          {name: 'jstart', value: 'start', title: "Start"    },
          {name: 'jcenter', value: 'center', title: "Center"   },
          {name: 'jend', value: 'end', title: "End"  }, 
          {name: 'jspacearound', value: 'space-around', title:  "Space Around" },
          {name: 'jspacebetween', value: 'space-between', title: "Space Between"  },
        ],
        for : 'justify-content',
        tab: 'flexlayout',
        tabOpen: true

  }),

    // 5 : align-items
  setSettingField('iconField', {
        label: "Align Items", 
        labelId: "flex-alignment-vertical",
        data: [
          {name: 'rVStart', value: 'start', title: "Start"    },
          {name: 'rVCenter', value: 'center', title: "Center"   },
          {name: 'rVEnd', value: 'end', title: "End"  }, 
          {name: 'vSpaceAround', value: 'space-around', title:  "Space Around" },
          {name: 'vSpaceBetween', value: 'space-between', title: "Space Between"  },
        ],
        for : 'align-items',
        tab: 'flexlayout',
        tabOpen: true

  }),


  //6 : Align Content
  setSettingField('iconField', {
        label: "Align Content", 
        labelId: "flex-alignment-content",
        data: [
          {name: 'vStart', value: 'start', title: "Start"    },
          {name: 'vCenter', value: 'center', title: "Center"   },
          {name: 'vEnd', value: 'end', title: "End"  }, 
          {name: 'vSpaceAround', value: 'space-around', title:  "Space Around" },
          {name: 'vSpaceBetween', value: 'space-between', title: "Space Between"  },
        ],
        for : 'align-content',
        tab: 'flexlayout',
        tabOpen: true

  }),

  ],

  /*+++++++++++++++++++++++++++++++++++++++  
                    Styles 
  ++++++++++++++++++++++++++++++++++++++++*/
  styles : [
  // 0
  /* +++++++++++++++++  Background  +++++++++++++++++++++++*/
  setSettingField('heading', {label: "Background", for : 'background', tabAllow: true , tabOpen: true

   }),

  //  1 : Pseudo Status
    setSettingField('status', { 
         for : 'background',
         tab: 'background',
         statusOptions : [
           {name: 'Normal', value: 'normal' },
           {name: 'Hover', value: 'hover' },
           // {name: 'Active', value: 'active' },
         ],
         value: 'normal',
         tabOpen : true,
   
    }),
  // 2 : background
  setSettingField('background', {
        label: "Background Type",
        labelId: "flex-background",
        options: [
      {label: 'Color', value: 'color'},
      {label: 'Image', value: 'image'},
      {label: 'Gradient', value: 'gradient'},
      {label: 'video', value: 'video'},      
  ],
        for : 'backgroundChange',
        tab: 'background',
        tabOpen: true
  }),

  // 3::
  /* +++++++++++++++++  Border  +++++++++++++++++++++++*/
  setSettingField('heading', {label: "Border", for : 'border', tabAllow: true}),

  // 4 : Pseudo Status
  setSettingField('status', { 
    for : 'border',
    tab: 'border',
    // tabOpen: true,
    statusOptions : [
      {name: 'Normal', value: 'normal' },
      {name: 'Hover', value: 'hover' },
      // {name: 'Active', value: 'active' },
    ],
    value: 'normal',

  }),
  
  // 5 : border Style
  setSettingField('select', {
        label: "Border Style",
        labelId: "text-border-style",
        options: [
          {label: 'None', value: 'none'},
          {label: 'Solid', value: 'solid'},
          {label: 'Dashed', value: 'dashed'},
          {label: 'Dotted', value: 'dotted'},
          {label: 'Double', value: 'Double'},
          {label: 'Groove', value: 'groove'},
          {label: 'Ridge', value: 'ridge'},
          {label: 'Inset', value: 'Inset'},
          {label: 'Outset', value: 'outset'},
        ],
        for : 'border-style',
        tab : 'border',
        
  }),

  // 6 : Border Coloring
  setSettingField('colors', {
    label: "Border Color", 
    labelId: "text-border-color",
    for : 'border-color',
    tab: 'border',
  }),

  //7 : Border Width
   setSettingField('spacing', {
    label: "Border Width",
    labelId: "flex-border-width",
    for : 'border-width',
    tab: 'border',
    }
      ),

   //8 : Border Radius
  setSettingField('spacing', {
      label: "Border Radius",
      labelId: "flex-border-radius",
      for : 'border-radius',
      tab: 'border',
    
  }
    ),


    //  9 ::
    /* +++++++++++++++++  Box Shadow +++++++++++++++++++++++*/
  
    setSettingField('heading', {label: "Box Shadow", for : 'boxshadow', tabAllow: true}),
  
    // 10 : Pseudo Status 
      setSettingField('status', { 
        for : 'boxshadow',
        tab: 'boxshadow',
        value: 'normal',
        statusOptions : [
          {name: 'Normal', value: 'normal' },
          {name: 'Hover', value: 'hover' }, 
        ],
      }),
      
    // 11 
    setSettingField('boxShadow', {
          label: "Box Shadow",
          labelId: "box-shadow-flex",
          for : 'box-shadow',
          tab : 'boxshadow',
          value:'',  
          responsive: 'on',
    }), 



  ],

  
      
   


  /*+++++++++++++++++++++++++++++++++++++++  
                    Settings 
  ++++++++++++++++++++++++++++++++++++++++*/
  settings: [
      // 0 ::
      /* +++++++++++++++++  Layout +++++++++++++++++++++++*/
      setSettingField('heading',{label: "Layout", for : 'layout', tabAllow: true, tabOpen: true}),
  
      // 1 : Pseudo Status 
     setSettingField('status', { 
      for : 'layout',
      tab: 'layout',
      tabOpen: true,
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' },
        // {name: 'Active', value: 'active' },
      ],
      value: 'normal',
  
    }),
      
      // 2 : Margin
      setSettingField('spacing', {
        label: "Margin",
        labelId: "flex-margin-spacing",
        for : 'margin',
        tab: 'layout',
        tabOpen: true
    }
      ),
  
    // 3 : Padding
     setSettingField('spacing', {
        label: "Padding",
        labelId: "flex-padding-spacing",
        for : 'padding',
        tab: 'layout',
        tabOpen: true
    }),
  
  
    // 4 : width
    setSettingField('size', {
          label: "Width", 
          labelId: "flex-size-width",
          unitOptions: [
            {name: "pixels", value: "px"},
            {name: "percent", value: "%"},
            {name: "Rem", value: "rem"},
            {name: "Em", value: "em"},
            {name: "ViewWidth", value: "vw"},
            {name: "ViewHeight", value: "vh"},
  
          ],
          for : 'width',
          tab: 'layout',
           tabOpen: true
    }),
  
    // 5 : min Width
   setSettingField('size', {
          label: "Min Width", 
          labelId: "flex-max-width",
          unitOptions: [
            {name: "pixels", value: "px"},
            {name: "percent", value: "%"},
            {name: "Rem", value: "rem"},
            {name: "Em", value: "em"},
            {name: "ViewWidth", value: "vw"},
            {name: "ViewHeight", value: "vh"},
  
          ],
          for : 'min-width',
          tab: 'layout',
          tabOpen: true
    }),
  
    
    // 6 : Max Width
    setSettingField('size', {
          label: "Max Width", 
          labelId: "flex-max-width",
          unitOptions: [
            {name: "pixels", value: "px"},
            {name: "percent", value: "%"},
            {name: "Rem", value: "rem"},
            {name: "Em", value: "em"},
            {name: "ViewWidth", value: "vw"},
            {name: "ViewHeight", value: "vh"},
  
          ],
          for : 'max-width',
          tab: 'layout',
          tabOpen: true,
    }),
   
    // 7: Height
    setSettingField('size', {
          label: "Height", 
          labelId: "flex-size-height",
          unitOptions: [
            {name: "pixels", value: "px"},
            {name: "percent", value: "%"},
            {name: "Rem", value: "rem"},
            {name: "Em", value: "em"},
            {name: "ViewWidth", value: "vw"},
            {name: "ViewHeight", value: "vh"},
  
          ],
          for : 'height',
          tab: 'layout',
           tabOpen: true
    }),
    
  // 8: Height
    setSettingField('size', {
            label: "Min Height", 
            labelId: "flex-max-height",
            unitOptions: [
              {name: "pixels", value: "px"},
              {name: "percent", value: "%"},
              {name: "Rem", value: "rem"},
              {name: "Em", value: "em"},
              {name: "ViewWidth", value: "vw"},
              {name: "ViewHeight", value: "vh"},
            ],
            for : 'min-height',
            tab: 'layout',
             tabOpen: true
      }),
  
  
    // 9 : Max Height
    setSettingField('size', {
          label: "Max Height", 
          labelId: "flex-max-height",
          unitOptions: [
            {name: "pixels", value: "px"},
            {name: "percent", value: "%"},
            {name: "Rem", value: "rem"},
            {name: "Em", value: "em"},
            {name: "ViewWidth", value: "vw"},
            {name: "ViewHeight", value: "vh"},
          ],
          for : 'max-height',
          tab: 'layout',
           tabOpen: true
    }),
  
  
    //10 :: positioning
    /* +++++++++++++++++  Positioning +++++++++++++++++++++++*/
      setSettingField('heading',{label: "Positioning", for : 'positioning', tabAllow: true,  }),
  
    // 11 : Pseudo Status 
     setSettingField('status', { 
      for : 'positioning',
      tab: 'positioning',
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' },
        // {name: 'Active', value: 'active' },
      ],
      value: 'normal',
  
    }),
  
    //12 : position
      setSettingField('position', {
          label: "Position",
          labelId: "position-flex",
          options: [
            {label: 'Absolute', value: 'absolute'},
            {label: 'Fixed', value: 'fixed'},
            {label: 'Relative', value: 'relative'},
            {label: 'Sticky', value: 'sticky'},
  
          ],
          for : 'positionChange',
          tab : 'positioning',
          // statuses : ['normal']
        
    }),
  
    //13 : Transform 
      setSettingField('transform', {
          label: "Transform Effect",
          labelId: "transform-effect-flex",
          
          defaultNot : true,
          options: [
            {label: 'Off', value: 'off'},
            {label: 'On', value: 'on'},
          ],
          for : 'transform',
          tab : 'positioning',
        
          
    }),
  
  
      //14 ::
      /* +++++++++++++++++  OverFlow +++++++++++++++++++++++*/
      setSettingField('heading',{label: "OverFlow", for : 'overflow', tabAllow: true }),
      
      //15 : overflow-x
  
        setSettingField('select', {
          label: "Overflow-X",
          labelId: "overflow-x-flex",
          options: [
            {label: 'Hidden', value: 'hidden'},
            {label: 'Scroll', value: 'scroll'},
            {label: 'Auto', value: 'auto'},
  
          ],
          for : 'overflow-x',
          tab : 'overflow',
        }),
  
  
      //16 :overflow-y
  
        setSettingField('select', {
          label: "Overflow-Y",
          labelId: "overflow-y-flex",
          options: [
            {label: 'Hidden', value: 'hidden'},
            {label: 'Scroll', value: 'scroll'},
            {label: 'Auto', value: 'auto'},
  
          ],
          for : 'overflow-y',
          tab : 'overflow',
        }),
  
        //17 :: Other
         setSettingField('heading',{label: "Other", for : 'other', tabAllow: true }),
        
        //18 :: CSS Classes
        setSettingField('textClasses', {
          label: "CSS Classes", 
          labelId: "class-flex-cssClass",
          placeholder: "Enter the CSS classes",
          value:'',
          for : 'customClasses',
          tab: 'other',
          responsive:"off"
         }),
        
         //19 :: CSS ID
          setSettingField('textClasses', {
          label: "CSS ID", 
          labelId: "class-flex-cssId",
          placeholder: "Enter the CSS ID",
          value:'',
          for : 'customCSSID',
          tab: 'other',
          responsive:"off"
         }),
  
         //20 : Order
  
         setSettingField('number', {
          label: "Order", 
          labelId: "order-flex",
          value:'',
          for : 'order',
          tab: 'other',
         }),
  
        //21 : Z-index
  
        setSettingField('number', {
          label: "Zindex", 
          labelId: "z-index-flex",
          value:'',
          for : 'z-index',
          tab: 'other',
         }),
  
  
  
        //22 :: Cursor
  
        setSettingField('iconSelect', {
          label: "Cursor ",
          labelId: "cursor-pointer-style-flex",
          options: [
            {label: 'Default', value: 'default', icon:"mousePointer"},
            {label: 'Alias', value: 'alias',icon:"navigationQuestion"},
            {label: 'All Scroll', value: 'all-scroll',icon:"allScroll"},
            {label: 'Auto', value: 'auto',icon:"textCursor"},
            {label: 'Cell', value: 'cell',icon:"cross"},
            {label: 'Context Menu', value: 'context-menu',icon:"mousePointer"},
            {label: 'Col Resize', value: 'col-resize',icon:""},
            {label: 'Copy', value: 'copy',icon:"plus"},
            {label: 'Grab', value: 'grab',icon:"hand"},
            {label: 'E Resize', value: 'e-resize',icon:"moveHorizontal"},
            {label: 'Ew Resize', value: 'ew-resize',icon:"moveHorizontal"},
            {label: 'Grabbing', value: 'grabbing',icon:"hand"},
            {label: 'Help', value: 'help',icon:""},
            {label: 'Move', value: 'move',icon:"move"},
            {label: 'N Resize', value: 'n-resize',icon:"moveVertical"},
            {label: 'Ne Resize', value: 'ne-resize',icon:"moveDiagonal"},
            {label: 'Nesw Resize', value: 'nesw-resize',icon:"moveDiagonal"},
            {label: 'Ns Resize', value: 'ns-resize',icon:"moveVertical"},
            {label: 'Nw Resize', value: 'nw-resize',icon:"MoveDiag"},
            {label: 'Nwse Resize', value: 'nwse-resize',icon:"MoveDiag"},
            {label: 'No Drop', value: 'no-drop',icon:"ban"},
            {label: 'None', value: 'none',icon:""},
            {label: 'Not Allowed', value: 'not-allowed',icon:"ban"},
            {label: 'Pointer', value: 'pointer',icon:"point"},
            {label: 'Progress', value: 'progress',icon:"loader"},
            {label: 'S Resize', value: 's-resize',icon:"moveVertical"},
            {label: 'Se Resize', value: 'se-resize',icon:"MoveDiag"},
  
            {label: 'Sw Resize', value: 'sw-resize',icon:"neresize"},
            {label: 'Text', value: 'text',icon:"auto"},
            {label: 'W Resize', value: 'w-resize',icon:"eresize"},
            {label: 'Wait', value: 'wait',icon:"progress"},
  
            {label: 'Zoom in', value: 'zoom-in',icon:"zoomin"},
            {label: 'Zoom Out', value: 'zoom-out',icon:"zoomout"},
          ],
          for : 'cursor',
          tab : 'other',
          
    }),
  
  
    // 23  : Transition
  
    setSettingField('transition', {
          label: "Apply Transition",
          labelId: "apply-transition-flex",
          value:"",
          defaultNot : true,
          options: [
            {label: 'None', value: ''},
            {label: 'All', value: 'all'},
            {label: 'Color', value: 'color'},
            {label: 'Background Color', value: 'background-color'},
            {label: 'Width', value: 'width'},
            {label: 'Height', value: 'height'},
            {label: 'Opacity', value: 'opacity'},
            {label: 'Custom', value: 'custom'}
          ],
          for : 'transitionChange',
          tab : 'other',        
    }),
  
    //24 :: 
    /* ++++++++++++++++++++++ Custom +++++++++++++++++++++++++++++= */
    setSettingField('heading',{label: "Custom", for : 'custom', tabAllow: true }),
  
    //25 : Tailwind Classes
        setSettingField('textarea', {
        label: "Tailwind Classes", 
        labelId: "tailwind-classes-flex",
        placeholder: 'Add your tailwind classes here',
        row: 1,
        for : 'tailWindClasses',
        tab: 'custom',
        responsive:'off'
      }
      ),
  
    //26 : CSS 
  
        setSettingField('cssEditor', {
        label: "CSS Styles", 
        labelId: "css-styles-flex",
        placeholder: 'Add your CSS styles here',
        row: 6,
        for : 'customCSSCode',
        tab: 'custom',
        
        responsive:'off'
      }
      ),
  
        
  
    ]
  
}




export const flexSettingsSet:settingsSetArgs = (settingType, data, screenType)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId)

  if(findBlock){
    const settings = {...flexSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'flex' ){

      /*+++++++++++++++++++++++ Content +++++++++++++++++++++ */
      settings.content[1].props.value = getValueForFields(findBlock, screenType, settings.content[1].props.currentStatus || 'normal', "flex-direction" ) 
      settings.content[2].props.value = getValueForFields(findBlock, screenType, settings.content[2].props.currentStatus || 'normal', "flex-wrap" ) 

      settings.content[3].props.value = getValueForFields(findBlock, screenType, settings.content[3].props.currentStatus || 'normal', "gap" ) 
      settings.content[4].props.value = getValueForFields(findBlock, screenType, settings.content[4].props.currentStatus || 'normal', "justify-content" ) 
      settings.content[5].props.value = getValueForFields(findBlock, screenType, settings.content[5].props.currentStatus || 'normal', "align-items" ) 
      settings.content[6].props.value = getValueForFields(findBlock, screenType, settings.content[6].props.currentStatus || 'normal', "align-content" ) 


      /*+++++++++++++++++++++++ Styles +++++++++++++++++++++ */
      settings.styles[2].props.value = backgroundSettingsSetter(findBlock, screenType, settings.styles[2].props.currentStatus || 'normal');


      // Borders
      settings.styles[5].props.value = getValueForFields(findBlock, screenType, settings.styles[5].props.currentStatus || 'normal', "border-style");
      settings.styles[6].props.value = getValueForFields(findBlock, screenType, settings.styles[6].props.currentStatus || 'normal', "border-color");
      settings.styles[7].props.value = getValueForFields(findBlock, screenType, settings.styles[7].props.currentStatus || 'normal', "border-width");
      settings.styles[8].props.value = getValueForFields(findBlock, screenType, settings.styles[8].props.currentStatus || 'normal', "border-radius");

      /* Box Shadow */
      settings.styles[11].props.value = getValueForFields(findBlock, screenType, settings.styles[11].props.currentStatus || 'normal', "box-shadow");

      /*+++++++++++++++++++++++ Settings +++++++++++++++++++++ */

      settings.settings[2].props.value = getValueForFields(findBlock, screenType, settings.settings[2].props.currentStatus || 'normal', "margin");
      settings.settings[3].props.value = getValueForFields(findBlock, screenType, settings.settings[3].props.currentStatus || 'normal', "padding");
      settings.settings[4].props.value = getValueForFields(findBlock, screenType, settings.settings[4].props.currentStatus || 'normal', "width");
      settings.settings[5].props.value = getValueForFields(findBlock, screenType, settings.settings[5].props.currentStatus || 'normal', "min-width");
      settings.settings[6].props.value = getValueForFields(findBlock, screenType, settings.settings[6].props.currentStatus || 'normal', "max-width");
      settings.settings[7].props.value = getValueForFields(findBlock, screenType, settings.settings[7].props.currentStatus || 'normal', "height");
      settings.settings[8].props.value = getValueForFields(findBlock, screenType, settings.settings[8].props.currentStatus || 'normal', "min-height");
      settings.settings[9].props.value = getValueForFields(findBlock, screenType, settings.settings[9].props.currentStatus || 'normal', "max-height");
          
      // Position
            
      settings.settings[12].props.value = customSettingSetter(findBlock, screenType, settings.settings[12].props.currentStatus || 'normal', ['position', 'top', 'left', 'bottom', 'right'])
            // Transform
      settings.settings[13].props.value = getValueForFields(findBlock, screenType, settings.settings[13].props.currentStatus || 'normal', "transform");
      
            //Overflow
      settings.settings[15].props.value = getValueForFields(findBlock, screenType, settings.settings[15].props.currentStatus || 'normal', "overflow-x");
      
      settings.settings[16].props.value = getValueForFields(findBlock, screenType, settings.settings[15].props.currentStatus || 'normal', "overflow-y");
      
            // Other
      
      // CSS classes and Id
            settings.settings[18].props.value = findBlock?.customClasses
            settings.settings[19].props.value = findBlock?.customCSSID
      
      // Order
      settings.settings[20].props.value = getValueForFields(findBlock, screenType, settings.settings[20].props.currentStatus || 'normal', "order");
      // Z-Index
      settings.settings[21].props.value = getValueForFields(findBlock, screenType, settings.settings[21].props.currentStatus || 'normal', "z-index");
      // Cursor
      settings.settings[22].props.value = getValueForFields(findBlock, screenType, settings.settings[22].props.currentStatus || 'normal', "cursor");
      
      // Transition
      settings.settings[23].props.value = customSettingSetter(findBlock, screenType, settings.settings[23].props.currentStatus || 'normal', ['transition-property', 'transition-delay', 'transition-duration', 'transition-timing-function'])
      
      // Custom 
      settings.settings[25].props.value = findBlock?.tailWindClasses
      settings.settings[26].props.value = findBlock?.customCSSCode




    }

    // console.log(settings);
    return settings
    
  }


}