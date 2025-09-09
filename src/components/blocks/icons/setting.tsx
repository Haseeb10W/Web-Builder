import { settingTypes } from "@/contexts/settingsType"
import { findBlock, findBlockOverall, findBlocksInContainer } from "@/lib/builder/blockHandlers"
import { handleSettingChange } from "@/lib/builder/settingHandlers"
import { backgroundSettingsSetter } from "@/lib/builder/settingsSetter"
import { setSettingField } from "@/lib/fieldSettings/fields"
import { Block } from "@/types/blocksSchema"
import { editSchema } from "@/types/editSchema"
import { settingsSetArgs, settingsSetupSchema } from "@/types/settingsSchema"


 const IconSettings:settingsSetupSchema = {

  // Content
  content : [

   // 0 
    setSettingField('heading',{label: "Content Area", for : 'texteditor', tabOpen: true, tabAllow: false}),

    // 1
     setSettingField('texteditor', {
      label: "Text Editor", 
      labelId: "text-editor",
      placeholder: 'Add your Text here',
      for : 'textChange',
      tab: '',
      tabOpen: true}
    ),
    
  // 2 
  setSettingField('heading',{label: "Advanced", for : 'advanced',  tabAllow: true}),

  // 3
  setSettingField('linkField', {
        label: "Button Link",
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
    setSettingField('heading',{label: "Alignment", for : 'alignment', tabOpen: true, tabAllow: true}),

    // 1
        setSettingField('iconField', {
        label: "Horizontal Align", 
        labelId: "text-alignment",
        data: [
          {name: 'left', value: 'left', title: 'Left'   },
          {name: 'center', value: 'center', title: 'Center'   },
           {name: 'right', value: 'right' , title: 'Right'  },
          {name: 'justify', value: 'justify', title: 'Justify'   },
        ],
        for : 'alignChange',
        tab: 'alignment',
        tabOpen: true

  }),

  // 2
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
        for : 'vAlignChange',
        tab: 'alignment',
        tabOpen: true

  }),
  

  // 3: TypoGraphy
  setSettingField('heading',{label: "Typography", for : 'typography', tabAllow: true}),

  // 4 : Pseudo Status 
  setSettingField('status', { 
    for : 'typography',
    tab: 'typography',
    // tabOpen: true,
    statusOptions : [
      {name: 'Normal', value: 'normal' },
      {name: 'Hover', value: 'hover' },
      // {name: 'Active', value: 'active' },
    ],
    value: 'normal',

  }),
  
  // 5
  setSettingField('colors', {
        label: "Text Color", 
        labelId: "text-color-font",
        for : 'colorChange',
        tab: 'typography',      
  }),


  // 6
  setSettingField('fontFamily', {
        label: "Font Family", 
        labelId: "text-family-font",
        for : 'fontFamilyChange',
        tab: 'typography',
        statuses : ['normal']
  }),
  
  // 7
  setSettingField('size', {
    label: "Font Size", 
        labelId: "text-size-font",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
          {name: "Rem", value: "rem"},
          {name: "Em", value: "em"},
          {name: "ViewWidth", value: "vw"},
          {name: "ViewHeight", value: "vh"},

        ],
        for : 'fontSizeChange',
        tab: 'typography',
       

  }),

  // 8
  setSettingField('size', {
    label: "Line Height", 
        labelId: "text-line-height",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "percent", value: "%"},
          {name: "Rem", value: "rem"},
        ],
        for : 'lineHeightChange',
        tab: 'typography',
        statuses : ['normal']
  }),

  // 9
  setSettingField('select', {
         label: "Font Weight", 
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
        
        for : 'fontWeightChange',
        tab: 'typography',
        
        

  }),


  // 10

  setSettingField('select', {
    label: "Text Transform",
        labelId: "text-transform-text",
        options: [
          {label: 'Uppercase', value: 'uppercase'},
          {label: 'Lowercase', value: 'lowercase'},
          {label: 'Capitalize', value: 'capitalize'},
        ],

        for : 'textTransformChange',
        tab: 'typography',
        statuses : ['normal']
  }),
  
  //11

  setSettingField('select', {
      label: "Font Style",
        labelId: "text-font-style",
        options: [
          {label: 'Normal', value: 'normal'},
          {label: 'Italic', value: 'italic'},
          {label: 'Oblique', value: 'oblique'},

        ],

        for : 'fontStyleChange',
        tab: 'typography',

  }),

  // 12
  setSettingField('select', {
      label: "Text Decoration",
        labelId: "text-decoration",
        options: [
          {label: 'Overline', value: 'overline'},
          {label: 'Underline', value: 'underline'},
          {label: 'Line Through', value: 'line-through'},
          {label: 'Over / Under', value: 'underline overline'},

        ],
        for : 'textDecorationChange',
        tab: 'typography',
        statuses : ['normal']
  }),

  // 13
  setSettingField('size', {
    label: "Letter Spacing", 
        labelId: "text-letter-spacing",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "Rem", value: "rem"},
          {name: "Em", value: "em"},
          {name: "ViewWidth", value: "vw"},
          {name: "ViewHeight", value: "vh"},
        ],
        for : 'letterSpacingChange',
        tab: 'typography',
        
  }),

  // 14
  setSettingField('size', {
    label: "Word Spacing", 
        labelId: "text-word-spacing",
        unitOptions: [
          {name: "pixels", value: "px"},
          {name: "Rem", value: "rem"},
          {name: "Em", value: "em"},
          {name: "ViewWidth", value: "vw"},
          {name: "ViewHeight", value: "vh"},
        ],
        for : 'wordSpacingChange',
        tab: 'typography',
  }),

  // 15  :background
  setSettingField('heading', {label: "Background", for : 'background', tabAllow: true}),

  // 16
  setSettingField('background', {
        label: "Background Type",
        labelId: "text-background",
        options: [
      {label: 'Color', value: 'color'},
      // {label: 'Image', value: 'image'},
      {label: 'Gradient', value: 'gradient'},
      // {label: 'video', value: 'video'},      
  ],
        for : 'backgroundChange',
        tab: 'background',
        tabOpen: false,
  }),
    

  
  // 17
  setSettingField('heading', {label: "Border", for : 'border', tabAllow: true}),

 // 18 : Pseudo Status 
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

  // 19
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
        for : 'borderStyleChange',
        tab : 'border',
        
  }),

  
  //20
  setSettingField('colors', {
    label: "Border Color", 
    labelId: "text-border-color",
    for : 'boderColorChange',
    tab: 'border',
  }),
  
  //21
        setSettingField('spacing', {
        label: "Border Width",
        labelId: "text-border-width",
        for : 'borderWidthChange',
        tab: 'border',
    }
      ),
  //22
  setSettingField('spacing', {
      label: "Border Radius",
      labelId: "text-border-radius",
      for : 'borderRadiusChange',
      tab: 'border',
    
  }
  ),
  // 23
  setSettingField('heading', {label: "Box Shadow", for : 'boxshadow', tabAllow: true}),

  // 24 : Pseudo Status 
    setSettingField('status', { 
      for : 'boxshadow',
      tab: 'boxshadow',
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' }, 
      ],
    }),


  // 25 
  setSettingField('boxShadow', {
        label: "BoxShadow",
        labelId: "box-shadow",
        for : 'boxshadow',
        tab : 'boxshadow',
        value:'',  
        responsive: 'off',
        defaultNot:true  
      
  }), 
    
    
  ],

  // Settings
  settings: [
    // 0 :: Layout
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
    
    // 2
    setSettingField('spacing', {
      label: "Margin",
      labelId: "text-margin-spacing",
      for : 'marginChange',
      tab: 'layout',
      tabOpen: true
  }
    ),

  // 3
   setSettingField('spacing', {
      label: "Padding",
      labelId: "text-padding-spacing",
      for : 'paddingChange',
      tab: 'layout',
      tabOpen: true
  }),


  // 4
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
        for : 'widthSizeChange',
        tab: 'layout',
         tabOpen: true
  }),

  
  // 5
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
        for : 'maxWidthSizeChange',
        tab: 'layout',
        tabOpen: true,
  }),
 
  // 6
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
        for : 'heightSizeChange',
        tab: 'layout',
         tabOpen: true
  }),
  
  // 7
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
        for : 'maxHeightSizeChange',
        tab: 'layout',
         tabOpen: true
  }),


  //8 :: positioning
    setSettingField('heading',{label: "Positioning", for : 'positioning', tabAllow: true,  }),

  // 9 : Pseudo Status 
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

  //10
    setSettingField('position', {
        label: "Position",
        labelId: "position",
        options: [
          {label: 'Absolute', value: 'absolute'},
          {label: 'Fixed', value: 'fixed'},
          {label: 'Relative', value: 'relative'},
          {label: 'Sticky', value: 'sticky'},

        ],
        for : 'positioningChange',
        tab : 'positioning',
        // statuses : ['normal']
      
  }),

  //11
    setSettingField('transform', {
        label: "Transform Effect",
        labelId: "transform-effect",
        value:'off',
        defaultNot : true,
        options: [
          {label: 'Off', value: 'off'},
          {label: 'On', value: 'on'},
        ],
        for : 'tansformStyleChange',
        tab : 'positioning',
      
        
  }),

      //12 :: Other
       setSettingField('heading',{label: "Other", for : 'other', tabAllow: true }),

      //13
      setSettingField('number', {
        label: "Zindex", 
        labelId: "z-index",
        value:'',
        for : 'other',
        tab: 'other',
       }),


      //14
      setSettingField('iconSelect', {
        label: "Cursor Pointer",
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
          {label: 'Url(myBall.cur),auto', value: 'url(myBall.cur),auto',icon:""},
          {label: 'W Resize', value: 'w-resize',icon:"eresize"},
          {label: 'Wait', value: 'wait',icon:"progress"},
          {label: 'Zoom in', value: 'zoom-in',icon:"zoomin"},
          {label: 'Zoom Out', value: 'zoom-out',icon:"zoomout"},
        ],
        for : 'other',
        tab : 'other',
        
  }),

  // 15
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
          {label: 'Custum', value: 'custom'}
        ],
        for : 'other',
        tab : 'other',        
  }),
      

  ]
  
}




export const iconSettingsSet:settingsSetArgs = (settingType, data)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId)

  if(findBlock){
    const settings = {...IconSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'button' ){
      /*+++++++++++++++++++++++ Content +++++++++++++++++++++ */
      settings.content[1].props.value =  findBlock?.props?.text;


      /*+++++++++++++++++++++++ Styles +++++++++++++++++++++ */

            /* Alignment */
      settings.styles[1].props.value = findBlock?.styles?.textAlign;
      settings.styles[2].props.value = findBlock?.styles?.alignContent;
            /* Font Styles */
      settings.styles[5].props.value = findBlock?.styles?.color;
      settings.styles[6].props.value = findBlock?.classTracking?.fontFamilyClass;
      settings.styles[7].props.value = findBlock?.styles?.fontSize;
      settings.styles[8].props.value = findBlock?.styles?.lineHeight;
      settings.styles[9].props.value = findBlock?.styles?.fontWeight;
      settings.styles[10].props.value = findBlock?.styles?.textTransform;
      settings.styles[11].props.value = findBlock?.styles?.fontStyle;
      settings.styles[12].props.value = findBlock?.styles?.textDecoration;
      settings.styles[13].props.value = findBlock?.styles?.letterSpacing;
      settings.styles[14].props.value = findBlock?.styles?.wordSpacing;

      
           /* Background */
      
      settings.styles[16].props.value = backgroundSettingsSetter(findBlock);
      

      // Settings
      settings.settings[2].props.value = findBlock?.styles?.margin; 
      settings.settings[3].props.value = findBlock?.styles?.padding;
      settings.settings[4].props.value = findBlock?.styles?.width;
      settings.settings[5].props.value = findBlock?.styles?.maxWidth;
      settings.settings[6].props.value = findBlock?.styles?.height;
      settings.settings[7].props.value = findBlock?.styles?.maxHeight;
      
    }

    

    // console.log(settings);
    return settings
    
  }


}


