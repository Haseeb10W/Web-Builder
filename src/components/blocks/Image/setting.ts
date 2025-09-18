import { settingTypes } from "@/contexts/settingsType"
import { findBlock, findBlockOverall, findBlocksInContainer } from "@/lib/builder/blockHandlers"
import { handleSettingChange } from "@/lib/builder/settingHandlers"
import { getValueForFields } from "@/lib/builder/settingsSetter"
import { setSettingField } from "@/lib/fieldSettings/fields"
import { Block } from "@/types/blocksSchema"
import { editSchema } from "@/types/editSchema"
import { settingsSetArgs, settingsSetupSchema } from "@/types/settingsSchema"
import { table } from "console"
import { validate } from "uuid"


 const ImageSettings:settingsSetupSchema = {

  // Content
  content : [

    // 0 
    setSettingField('heading',{label: "Image Settings", for : 'imagesettings', tabOpen: true, tabAllow: false}),

    // 1
    setSettingField('imageSection', {
      label: "Image", 
      value:"",
      for : 'imagesettings',
      tab: '',
      tabOpen: true
    }
    ),

    // 2 
    setSettingField('heading',{label: "Advanced", for : 'advanced',  tabAllow: true}),

    // 3
  setSettingField('linkField', {
        label: "Image Link",
        labelId: "image-link",
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

    // 2
        setSettingField('iconField', {
        label: "Horizontal Align", 
        labelId: "img-alignment",
        data: [
          {name: 'left', value: 'left', title: 'Left'   },
          {name: 'center', value: 'center', title: 'Center'   },
           {name: 'right', value: 'right' , title: 'Right'  },
          {name: 'justify', value: 'justify', title: 'Justify'   },
        ],
        for : 'text-align',
        tab: 'alignment',
        tabOpen: true

  }),

  // 3
  setSettingField('iconField', {
        label: "Vertical Align", 
        labelId: "img-alignment-vertical",
        data: [
          {name: 'vStart', value: 'start', title: "Start"    },
          {name: 'vCenter', value: 'center', title: "Center"   },
          {name: 'vEnd', value: 'end', title: "End"  }, 
          {name: 'vSpaceAround', value: 'space-around', title:  "Space Around" },
          {name: 'vSpaceBetween', value: 'space-between', title: "Space Between"  },
        ],
        for : 'align-content',
        tab: 'alignment',
        tabOpen: true

  }),
  
  // 4 : Border
  /* +++++++++++++++++  Border  +++++++++++++++++++++++*/
  setSettingField('heading', {label: "Border", for : 'border', tabAllow: true}),

  // 5 : Pseudo Status 
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

  // 6
  setSettingField('select', {
        label: "Border Style",
        labelId: "img-border-style",
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

  
  //7
  setSettingField('colors', {
    label: "Border Color", 
    labelId: "img-border-color",
    for : 'border-color',
    tab: 'border',
  }),
  
  //8
        setSettingField('spacing', {
        label: "Border Width",
        labelId: "img-border-width",
        for : 'border-width',
        tab: 'border',
    }
      ),
  //9
  setSettingField('spacing', {
      label: "Border Radius",
      labelId: "img-border-radius",
      for : 'border-radius',
      tab: 'border',
    
  }
    ),

    // 10

  /* +++++++++++++++++  Box Shadow +++++++++++++++++++++++*/
  setSettingField('heading', {label: "Box Shadow", for : 'boxshadow', tabAllow: true}),

  // 11 : Pseudo Status 
    setSettingField('status', { 
      for : 'boxshadow',
      tab: 'boxshadow',
      value: 'normal',
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' }, 
      ],
    }),


  // 12 
  setSettingField('boxShadow', {
        label: "BoxShadow",
        labelId: "box-shadow-img",
        for : 'box-shadow',
        tab : 'boxshadow',
        value:'',  
        responsive: 'on',
        // defaultNot:true  
        // statuses : ['normal']       
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
      labelId: "img-margin-spacing",
      for : 'margin',
      tab: 'layout',
      tabOpen: true
  }
    ),

   // 3 : width
  setSettingField('size', {
        label: "Width", 
        labelId: "img-size-width",
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

  // 4 : min Width
 setSettingField('size', {
        label: "Min Width", 
        labelId: "img-max-width",
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
   
   // 5 : Max Width
  setSettingField('size', {
        label: "Min Width", 
        labelId: "img-max-width",
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
        tabOpen: true
  }),
  
 
   // 6: Height
  setSettingField('size', {
        label: "Height", 
        labelId: "img-size-height",
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

  // 7: Height
  setSettingField('size', {
        label: "Min Height", 
        labelId: "img-max-height",
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
  
   // 8: Max Height
  setSettingField('size', {
        label: "Max Height", 
        labelId: "img-max-height",
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

    //9 :: positioning
      setSettingField('heading',{label: "Positioning", for : 'positioning', tabAllow: true }),
  
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
    }),
  
    //11 :: Scrolling
      setSettingField('heading',{label: "OverFlow", for : 'overflow', tabAllow: true }),
      
    //12
          setSettingField('select', {
          label: "Overflow-X",
          labelId: "overflow-x",
          options: [
            {label: 'Hidden', value: 'hidden'},
            {label: 'Scroll', value: 'scroll'},
            {label: 'Auto', value: 'auto'},
  
          ],
          for : 'overflow-x',
          tab : 'overflow',
        }),
  
    //13
          setSettingField('select', {
          label: "Overflow-Y",
          labelId: "overflow-y",
          options: [
            {label: 'Hidden', value: 'hidden'},
            {label: 'Scroll', value: 'scroll'},
            {label: 'Auto', value: 'auto'},
  
          ],
          for : 'overflow-y',
          tab : 'overflow',
        }),
  
      //14 :: Other
         setSettingField('heading',{label: "Other", for : 'other', tabAllow: true }),
  
      //15
        setSettingField('number', {
          label: "Zindex", 
          labelId: "z-index-text",
          value:'',
          for : 'z-index',
          tab: 'other',
         }),
  
  
      //16
        setSettingField('iconSelect', {
          label: "Cursor Pointer",
          labelId: "cursor-pointer-style",
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
            {label: 'Sw Resize', value: 'sw-resize',icon:"moveDiagonal"},
            {label: 'Text', value: 'text',icon:"textCursor"},
            {label: 'Url(myBall.cur),auto', value: 'url(myBall.cur),auto',icon:""},
            {label: 'W Resize', value: 'w-resize',icon:"moveHorizontal"},
            {label: 'Wait', value: 'wait',icon:"loader"},
            {label: 'Zoom in', value: 'zoom-in',icon:"zoomin"},
            {label: 'Zoom Out', value: 'zoom-out',icon:"zoomout"},
          ],
          for : 'cursor',
          tab : 'other',
          
    }),
  
    // 17
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




export const ImageSettingsSet:settingsSetArgs = (settingType, data ,screenType)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId)

  if(findBlock){
    const settings = {...ImageSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'image' ){
      /*+++++++++++++++++++++++ Content +++++++++++++++++++++ */
           settings.content[1].props.value =  findBlock?.props?.Image;
     
     
           /*+++++++++++++++++++++++ Styles +++++++++++++++++++++ */
     
                 /* Alignment */
           settings.styles[2].props.value = getValueForFields(findBlock, screenType, settings.styles[2].props.currentStatus || 'normal', "text-align" ) 
           settings.styles[3].props.value =  getValueForFields(findBlock, screenType, settings.styles[3].props.currentStatus || 'normal', "align-content") 
           
       
          /* Font Styles */
          //  settings.styles[6].props.value = getValueForFields(findBlock, screenType, settings.styles[6].props.currentStatus || 'normal', "color");
           
          //  settings.styles[7].props.value = findBlock?.classTracking?.fontFamilyClass;
          //  settings.styles[8].props.value = getValueForFields(findBlock, screenType, settings.styles[8].props.currentStatus || 'normal', "font-size");
          //  settings.styles[9].props.value = getValueForFields(findBlock, screenType, settings.styles[9].props.currentStatus || 'normal', "line-height");
           
          //  settings.styles[10].props.value = getValueForFields(findBlock, screenType, settings.styles[10].props.currentStatus || 'normal', "font-weight");
     
          //  settings.styles[11].props.value = getValueForFields(findBlock, screenType, settings.styles[11].props.currentStatus || 'normal', "text-transform");
     
          //  settings.styles[12].props.value = getValueForFields(findBlock, screenType, settings.styles[12].props.currentStatus || 'normal', "font-style");
     
          //  settings.styles[13].props.value = getValueForFields(findBlock, screenType, settings.styles[13].props.currentStatus || 'normal', "text-decoration");
     
          //  settings.styles[14].props.value = getValueForFields(findBlock, screenType, settings.styles[14].props.currentStatus || 'normal', "letter-spacing");
     
          //  settings.styles[15].props.value = getValueForFields(findBlock, screenType, settings.styles[15].props.currentStatus || 'normal', "word-spacing");
           
           // settings.styles[14].props.value = findBlock?.styles?.wordSpacing;
     
           
                /* Background */
           
          //  settings.styles[18].props.value = backgroundSettingsSetter(findBlock, screenType, settings.styles[18].props.currentStatus || 'normal');
     
               /* Border */
           settings.styles[6].props.value = getValueForFields(findBlock, screenType, settings.styles[6].props.currentStatus || 'normal', "border-style");
           settings.styles[7].props.value = getValueForFields(findBlock, screenType, settings.styles[7].props.currentStatus || 'normal', "border-color");
           settings.styles[8].props.value = getValueForFields(findBlock, screenType, settings.styles[8].props.currentStatus || 'normal', "border-width");
           settings.styles[9].props.value = getValueForFields(findBlock, screenType, settings.styles[9].props.currentStatus || 'normal', "border-radius");
     
           /* Box Shadow */
           settings.styles[12].props.value = getValueForFields(findBlock, screenType, settings.styles[12].props.currentStatus || 'normal', "box-shadow");
           
           
           
           /*+++++++++++++++++++++++ Setting +++++++++++++++++++++ */
           
           settings.settings[2].props.value = getValueForFields(findBlock, screenType, settings.settings[2].props.currentStatus || 'normal', "margin");
          //  settings.settings[3].props.value = getValueForFields(findBlock, screenType, settings.settings[3].props.currentStatus || 'normal', "padding");
           settings.settings[3].props.value = getValueForFields(findBlock, screenType, settings.settings[3].props.currentStatus || 'normal', "width");
           settings.settings[4].props.value = getValueForFields(findBlock, screenType, settings.settings[4].props.currentStatus || 'normal', "min-width");
           settings.settings[5].props.value = getValueForFields(findBlock, screenType, settings.settings[5].props.currentStatus || 'normal', "max-width");
           settings.settings[6].props.value = getValueForFields(findBlock, screenType, settings.settings[6].props.currentStatus || 'normal', "height");
           settings.settings[7].props.value = getValueForFields(findBlock, screenType, settings.settings[7].props.currentStatus || 'normal', "min-height");
           settings.settings[8].props.value = getValueForFields(findBlock, screenType, settings.settings[8].props.currentStatus || 'normal', "max-height");
   
      
    }

    

    // console.log(settings);
    return settings
    
  }


}