import { settingTypes } from "@/contexts/settingsType"
import { findBlock, findBlockOverall, findBlocksInContainer } from "@/lib/builder/blockHandlers"
import { handleSettingChange } from "@/lib/builder/settingHandlers"
import { setSettingField } from "@/lib/fieldSettings/fields"
import { Block } from "@/types/blocksSchema"
import { editSchema } from "@/types/editSchema"
import { settingsSetArgs, settingsSetupSchema } from "@/types/settingsSchema"


 const TextSettings:settingsSetupSchema = {

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
  
  // 4
  setSettingField('colors', {
        label: "Text Color", 
        labelId: "text-color-font",
        for : 'colorChange',
        tab: 'typography',
  }),


  // 5
  setSettingField('fontFamily', {
        label: "Font Family", 
        labelId: "text-family-font",
        for : 'fontFamilyChange',
        tab: 'typography',
  }),
  
  // 6
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

  // 7
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
  }),

  // 8
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


  // 9

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
  }),
  
  //10

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

  // 11
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
  }),

  // 12
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

  // 13
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

  // 14
  setSettingField('heading', {label: "Background", for : 'background', tabAllow: true}),

  // 15
  setSettingField('background', {
        label: "Background Type",
        labelId: "text-background",
        options: [
      {label: 'Color', value: 'color'},
      {label: 'Image', value: 'image'},
      {label: 'Gradient', value: 'gradient'},
      {label: 'video', value: 'video'},      
  ],
        for : 'backgroundChange',
        tab: 'background',
        tabOpen: false
  }),
    

  
  // 16
  setSettingField('heading', {label: "Border", for : 'border', tabAllow: true}),
  // 17
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

  
  //18
  setSettingField('colors', {
    label: "Border Color", 
    labelId: "text-border-color",
    for : 'boderColorChange',
    tab: 'border',
  }),
  
  //19
        setSettingField('spacing', {
        label: "Border Width",
        labelId: "text-border-width",
        for : 'borderWidthChange',
        tab: 'border',
    }
      ),
  //20
  setSettingField('spacing', {
      label: "Border Radius",
      labelId: "text-border-radius",
      for : 'borderRadiusChange',
      tab: 'border',
    
  }
    ),
    
    
  ],

  // Settings
  settings: [
    // 0 :: Layout
    setSettingField('heading',{label: "Layout", for : 'layout', tabAllow: true, tabOpen: true}),
    
    // 1
    setSettingField('spacing', {
      label: "Margin",
      labelId: "text-margin-spacing",
      for : 'marginChange',
      tab: 'layout',
      tabOpen: true
  }
    ),

  // 2
   setSettingField('spacing', {
      label: "Padding",
      labelId: "text-padding-spacing",
      for : 'paddingChange',
      tab: 'layout',
      tabOpen: true
  }),


  // 3
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

  
  // 4
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
         tabOpen: true
  }),
 
  // 5
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
  
  // 6
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


  //7 :: positioning
    setSettingField('heading',{label: "Positioning", for : 'positioning', tabAllow: true }),

  //8
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

  ]
  
}




export const textSettingsSet:settingsSetArgs = (settingType, data)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId)

  if(findBlock){
    const settings = {...TextSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'text' ){
      /*+++++++++++++++++++++++ Content +++++++++++++++++++++ */
      settings.content[1].props.value =  findBlock?.props?.text;


      /*+++++++++++++++++++++++ Styles +++++++++++++++++++++ */

            /* Alignment */
      settings.styles[1].props.value = findBlock?.styles?.textAlign;
      settings.styles[2].props.value = findBlock?.styles?.alignContent;
            /* Font Styles */
      settings.styles[4].props.value = findBlock?.styles?.color;
      settings.styles[5].props.value = findBlock?.classTracking?.fontFamilyClass;
      settings.styles[6].props.value = findBlock?.styles?.fontSize;
      settings.styles[7].props.value = findBlock?.styles?.lineHeight;
      settings.styles[8].props.value = findBlock?.styles?.fontWeight;
      settings.styles[9].props.value = findBlock?.styles?.textTransform;
      settings.styles[10].props.value = findBlock?.styles?.fontStyle;
      settings.styles[11].props.value = findBlock?.styles?.textDecoration;
      settings.styles[12].props.value = findBlock?.styles?.letterSpacing;
      settings.styles[13].props.value = findBlock?.styles?.wordSpacing;

      
           /* Colors */
      
      settings.styles[14].props.value = findBlock?.styles?.backgroundColor;
      

      // Settings
      settings.settings[1].props.value = findBlock?.styles?.margin; 
      settings.settings[2].props.value = findBlock?.styles?.padding;
      settings.settings[3].props.value = findBlock?.styles?.width;
      settings.settings[4].props.value = findBlock?.styles?.maxWidth;
      settings.settings[5].props.value = findBlock?.styles?.height;
      settings.settings[6].props.value = findBlock?.styles?.maxHeight;
      
    }

    

    // console.log(settings);
    return settings
    
  }


}