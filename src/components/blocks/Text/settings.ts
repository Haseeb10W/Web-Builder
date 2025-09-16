import { settingTypes } from "@/contexts/settingsType"
import { findBlock, findBlockOverall} from "@/lib/builder/blockHandlers"
import { handleSettingChange } from "@/lib/builder/settingHandlers"
import { backgroundSettingsSetter, customSettingSetter, getValueForFields } from "@/lib/builder/settingsSetter"
import { setSettingField } from "@/lib/fieldSettings/fields"

import { settingsSetArgs, settingsSetupSchema } from "@/types/settingsSchema"


 const TextSettings:settingsSetupSchema = {

  
  /*+++++++++++++++++++++++++++++++++++++++  
                  Content
  ++++++++++++++++++++++++++++++++++++++++*/
  content : [
    /* +++++++++++++++++  Content Text +++++++++++++++++++++++*/
   // 0 
    setSettingField('heading',{label: "Content Area", for : 'texteditor', tabOpen: true, tabAllow: false}),

    // 1
     setSettingField('texteditor', {
      label: "Text Editor", 
      labelId: "text-editor",
      placeholder: 'Add your Text here',
      for : 'textChange',
      tab: '',
      tabOpen: true
    }
    ),

  // 2
  setSettingField('heading',{label: "Advanced", for : 'advanced',  tabAllow: true}),

  // 3
  setSettingField('linkField', {
        label: "Text Link",
        labelId: "text-link",
        for : 'advanced',
        tab : 'advanced',
        value:'off',
        responsive: 'off',
        defaultNot:true      
  }),
    


  ],



  /*+++++++++++++++++++++++++++++++++++++++  
                    Styles 
  ++++++++++++++++++++++++++++++++++++++++*/

  
  styles : [

    // 0 :: Alignment
    /* +++++++++++++++++  Alignment  +++++++++++++++++++++++*/
    setSettingField('heading',{label: "Alignment", for : 'alignment', tabOpen: true, tabAllow: true}),
    // 1 : Pseudo Status 
    setSettingField('status', { 
      for : 'alignment',
      tab: 'alignment',
      tabOpen: true,
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' },
        // {name: 'Active', value: 'active' },
      ],
      

    }),

    // 2 : 
        setSettingField('iconField', {
        label: "Horizontal Align", 
        labelId: "text-alignment",
        data: [
          {name: 'left', value: 'left', title: 'Left'   },
          {name: 'center', value: 'center', title: 'Center'   },
           {name: 'right', value: 'right' , title: 'Right'  },
          {name: 'justify', value: 'justify', title: 'Justify'   },
        ],
        for : 'text-align',
        tab: 'alignment',
        tabOpen: true,
        

  }),

  // 3
  setSettingField('iconField', {
        label: "Vertical Align", 
        labelId: "text-alignment-vertical",
        data: [
          {name: 'vStart', value: 'start', title: "Start"    },
          {name: 'vCenter', value: 'center', title: "Center"   },
          {name: 'vEnd', value: 'end', title: "End"  }, 
          {name: 'vSpaceAround', value: 'space-around', title:  "Space Around" },
          {name: 'vSpaceBetween', value: 'space-between', title: "Space Between"  },
        ],
        for : 'align-content',
        tab: 'alignment',
        tabOpen: true,
        

  }),
  

  // 4: TypoGraphy
  /* +++++++++++++++++  TypoGraphy  +++++++++++++++++++++++*/
  setSettingField('heading',{label: "Typography", for : 'typography', tabAllow: true}),

  // 5 : Pseudo Status 
  setSettingField('status', { 
    for : 'typography',
    tab: 'typography',
    // tabOpen: true,
    statusOptions : [
      {name: 'Normal', value:'normal' },
      {name: 'Hover', value: 'hover' },
      // {name: 'Active', value: 'active' },
    ],
    // value: 'normal',

  }),
  
  // 6
  setSettingField('colors', {
        label: "Text Color", 
        labelId: "text-color-font",
        for : 'color',
        tab: 'typography',      
  }),


  // 7
  setSettingField('fontFamily', {
        label: "Font Family", 
        labelId: "text-family-font",
        for : 'fontFamilyChange',
        tab: 'typography',
        responsive: "off",
        statuses : ['normal']
  }),
  
  // 8
  setSettingField('size', { label: "Font Size", 
        labelId: "text-size-font",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
          {name: "Rem", value: "rem"},
          {name: "Em", value: "em"},
          {name: "ViewWidth", value: "vw"},
          {name: "ViewHeight", value: "vh"},

        ],
        for : 'font-size',
        tab: 'typography',
       

  }),

  // 9
  setSettingField('size', { label: "Line Height", 
        labelId: "text-line-height",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
          {name: "Rem", value: "rem"},
        ],
        for : 'line-height',
        tab: 'typography',
        statuses : ['normal']
  }),

  // 10
  setSettingField('select', { label: "Font Weight", 
        labelId: "text-font-weight",
        options: [
          {label: '100', value: '100'},
          {label: '200', value: '200'},
          {label: '300', value: '300'},
          {label: '400', value: '400'},
          {label: '500', value: '500'},
          {label: '600', value: '600'},
          {label: '700', value: '700'},
          {label: '800', value: '800'},
          {label: '900', value: '900'},
        ],
        
        for : 'font-weight',
        tab: 'typography',
        
        

  }),


  // 11

  setSettingField('select', { label: "Text Transform",
        labelId: "text-transform-text",
        options: [
          {label: 'Uppercase', value: 'uppercase'},
          {label: 'Lowercase', value: 'lowercase'},
          {label: 'Capitalize', value: 'capitalize'},
        ],

        for : 'text-transform',
        tab: 'typography',
        statuses : ['normal']
  }),
  
  //12

  setSettingField('select', { label: "Font Style",
        labelId: "text-font-style",
        options: [
          {label: 'Normal', value: 'normal'},
          {label: 'Italic', value: 'italic'},
          {label: 'Oblique', value: 'oblique'},

        ],

        for : 'font-style',
        tab: 'typography',

  }),

  // 13
  setSettingField('select', { label: "Text Decoration",
        labelId: "text-decoration",
        options: [
          {label: 'Overline', value: 'overline'},
          {label: 'Underline', value: 'underline'},
          {label: 'Line Through', value: 'line-through'},
          {label: 'Over / Under', value: 'underline overline'},

        ],
        for : 'text-decoration',
        tab: 'typography',
        statuses : ['normal']
  }),

  // 14
  setSettingField('size', { label: "Letter Spacing", 
        labelId: "text-letter-spacing",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "Rem", value: "rem"},
          {name: "Em", value: "em"},
          {name: "ViewWidth", value: "vw"},
          {name: "ViewHeight", value: "vh"},
        ],
        for : 'letter-spacing',
        tab: 'typography',
        
  }),

  // 15
  setSettingField('size', { label: "Word Spacing", 
        labelId: "text-word-spacing",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "Rem", value: "rem"},
          {name: "Em", value: "em"},
          {name: "ViewWidth", value: "vw"},
          {name: "ViewHeight", value: "vh"},
        ],
        for : 'word-spacing',
        tab: 'typography',
  }),

  // 16  :
   /* +++++++++++++++++ background  +++++++++++++++++++++++*/
  setSettingField('heading', {label: "Background", for : 'background', tabAllow: true}),

  // 17 : Pseudo Status 
    setSettingField('status', { 
      for : 'background',
      tab: 'background',
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' },
        // {name: 'Active', value: 'active' },
      ],
      

    }),

  // 18
  setSettingField('background', {
        label: "Background Type",
        labelId: "text-background",
        options: [
      {label: 'Color', value: 'color'},
      {label: 'Image', value: 'image'},
      {label: 'Gradient', value: 'gradient'},
  ],
        for : 'backgroundChange',
        tab: 'background',
        tabOpen: false,
  }),
    

  
  // 19 : Border
  /* +++++++++++++++++  Border  +++++++++++++++++++++++*/
  setSettingField('heading', {label: "Border", for : 'border', tabAllow: true}),

 // 20 : Pseudo Status 
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

  // 21
  setSettingField('select', {
        label: "Border Style",
        labelId: "text-border-style",
        options: [
          // {label: 'None', value: 'none'},
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

  
  //22
  setSettingField('colors', {
    label: "Border Color", 
    labelId: "text-border-color",
    for : 'border-color',
    tab: 'border',
  }),
  
  //23
        setSettingField('spacing', {
        label: "Border Width",
        labelId: "text-border-width",
        for : 'border-width',
        tab: 'border',
    }
      ),
  //24
  setSettingField('spacing', {
      label: "Border Radius",
      labelId: "text-border-radius",
      for : 'border-radius',
      tab: 'border',
    
  }
    ),



  // 25

  /* +++++++++++++++++  Box Shadow +++++++++++++++++++++++*/

  setSettingField('heading', {label: "Box Shadow", for : 'boxshadow', tabAllow: true}),

  // 26 : Pseudo Status 
    setSettingField('status', { 
      for : 'boxshadow',
      tab: 'boxshadow',
      value: 'normal',
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' }, 
      ],
    }),
    
  // 27 
  setSettingField('boxShadow', {
        label: "Box Shadow",
        labelId: "box-shadow-text",
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
      labelId: "text-margin-spacing",
      for : 'margin',
      tab: 'layout',
      tabOpen: true
  }
    ),

  // 3 : Padding
   setSettingField('spacing', {
      label: "Padding",
      labelId: "text-padding-spacing",
      for : 'padding',
      tab: 'layout',
      tabOpen: true
  }),


  // 4 : width
  setSettingField('size', {
        label: "Width", 
        labelId: "text-size-width",
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
        labelId: "text-max-width",
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
        labelId: "text-max-width",
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
        labelId: "text-size-height",
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
          labelId: "text-max-height",
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
        labelId: "text-max-height",
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
        labelId: "position-text",
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
        labelId: "transform-effect",
        
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
        labelId: "overflow-x-text",
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
        labelId: "overflow-y-text",
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

      //18
      setSettingField('number', {
        label: "Zindex", 
        labelId: "z-index-text",
        value:'',
        for : 'z-index',
        tab: 'other',
       }),


      //19
      setSettingField('iconSelect', {
        label: "Cursor ",
        labelId: "cursor-pointer-style",
        options: [
          {label: 'Default', value: 'default', icon:"default"},
          {label: 'Alias', value: 'alias',icon:"alias"},
          {label: 'All Scroll', value: 'all-scroll',icon:"allScroll"},
          {label: 'Auto', value: 'auto',icon:"auto"},
          {label: 'Cell', value: 'cell',icon:"cell"},
          {label: 'Context Menu', value: 'context-menu',icon:"default"},
          {label: 'Col Resize', value: 'col-resize',icon:""},
          {label: 'Copy', value: 'copy',icon:"plus"},
          {label: 'Grab', value: 'grab',icon:"grap"},
          {label: 'E Resize', value: 'e-resize',icon:"eresize"},
          {label: 'Ew Resize', value: 'ew-resize',icon:"eresize"},
          {label: 'Grabbing', value: 'grabbing',icon:"grap"},
          {label: 'Help', value: 'help',icon:""},
          {label: 'Move', value: 'move',icon:"allScroll"},
          {label: 'N Resize', value: 'n-resize',icon:"nresize"},
          {label: 'Ne Resize', value: 'ne-resize',icon:"neresize"},
          {label: 'Nesw Resize', value: 'nesw-resize',icon:"neresize"},
          {label: 'Ns Resize', value: 'ns-resize',icon:"nresize"},
          {label: 'Nw Resize', value: 'nw-resize',icon:"MoveDiag"},
          {label: 'Nwse Resize', value: 'nwse-resize',icon:"MoveDiag"},
          {label: 'No Drop', value: 'no-drop',icon:"nodrop"},
          {label: 'None', value: 'none',icon:""},
          {label: 'Not Allowed', value: 'not-allowed',icon:"nodrop"},
          {label: 'Pointer', value: 'pointer',icon:"point"},
          {label: 'Progress', value: 'progress',icon:"progress"},
          {label: 'S Resize', value: 's-resize',icon:"nresize"},
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

  // 20 : Transition
  setSettingField('transition', {
        label: "Apply Transition",
        labelId: "apply-transition",
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
      

  ]
  
}




export const textSettingsSet:settingsSetArgs = (settingType, data, screenType)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId);

  if(findBlock){
    const settings = {...TextSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'text' ){
      /*+++++++++++++++++++++++ Content +++++++++++++++++++++ */
      settings.content[1].props.value =  findBlock?.props?.text;


      /*+++++++++++++++++++++++ Styles +++++++++++++++++++++ */

            /* Alignment */
      settings.styles[2].props.value = getValueForFields(findBlock, screenType, settings.styles[2].props.currentStatus || 'normal', "text-align" ) 
      settings.styles[3].props.value =  getValueForFields(findBlock, screenType, settings.styles[3].props.currentStatus || 'normal', "align-content") 
      
  
            /* Font Styles */
      settings.styles[6].props.value = getValueForFields(findBlock, screenType, settings.styles[6].props.currentStatus || 'normal', "color");
      
      settings.styles[7].props.value = findBlock?.classTracking?.fontFamilyClass;
      settings.styles[8].props.value = getValueForFields(findBlock, screenType, settings.styles[8].props.currentStatus || 'normal', "font-size");
      settings.styles[9].props.value = getValueForFields(findBlock, screenType, settings.styles[9].props.currentStatus || 'normal', "line-height");
      
      settings.styles[10].props.value = getValueForFields(findBlock, screenType, settings.styles[10].props.currentStatus || 'normal', "font-weight");

      settings.styles[11].props.value = getValueForFields(findBlock, screenType, settings.styles[11].props.currentStatus || 'normal', "text-transform");

      settings.styles[12].props.value = getValueForFields(findBlock, screenType, settings.styles[12].props.currentStatus || 'normal', "font-style");

      settings.styles[13].props.value = getValueForFields(findBlock, screenType, settings.styles[13].props.currentStatus || 'normal', "text-decoration");

      settings.styles[14].props.value = getValueForFields(findBlock, screenType, settings.styles[14].props.currentStatus || 'normal', "letter-spacing");

      settings.styles[15].props.value = getValueForFields(findBlock, screenType, settings.styles[15].props.currentStatus || 'normal', "word-spacing");
      
      // settings.styles[14].props.value = findBlock?.styles?.wordSpacing;

      
           /* Background */
      
      settings.styles[18].props.value = backgroundSettingsSetter(findBlock, screenType, settings.styles[18].props.currentStatus || 'normal');

          /* Border */
      settings.styles[21].props.value = getValueForFields(findBlock, screenType, settings.styles[21].props.currentStatus || 'normal', "border-style");
      settings.styles[22].props.value = getValueForFields(findBlock, screenType, settings.styles[22].props.currentStatus || 'normal', "border-color");
      settings.styles[23].props.value = getValueForFields(findBlock, screenType, settings.styles[23].props.currentStatus || 'normal', "border-width");
      settings.styles[24].props.value = getValueForFields(findBlock, screenType, settings.styles[24].props.currentStatus || 'normal', "border-radius");

      /* Box Shadow */
      settings.styles[27].props.value = getValueForFields(findBlock, screenType, settings.styles[27].props.currentStatus || 'normal', "box-shadow");
      
      
      
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
      // Z-Index
      settings.settings[18].props.value = getValueForFields(findBlock, screenType, settings.settings[18].props.currentStatus || 'normal', "z-index");
      // Cursor
      settings.settings[19].props.value = getValueForFields(findBlock, screenType, settings.settings[19].props.currentStatus || 'normal', "cursor");

      // Transition
      settings.settings[20].props.value = customSettingSetter(findBlock, screenType, settings.settings[20].props.currentStatus || 'normal', ['transition-property', 'transition-delay', 'transition-duration', 'transition-timing-function'])

    }

    

    // console.log(settings);
    return settings
    
  }


}


