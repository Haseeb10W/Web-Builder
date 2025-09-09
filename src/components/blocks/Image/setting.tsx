import { settingTypes } from "@/contexts/settingsType"
import { findBlock, findBlockOverall, findBlocksInContainer } from "@/lib/builder/blockHandlers"
import { handleSettingChange } from "@/lib/builder/settingHandlers"
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

    // 3 
    setSettingField('heading',{label: "Advanced", for : 'advanced',  tabAllow: true}),

    // 4
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
  
  // 3
  setSettingField('heading', {label: "Border", for : 'border', tabAllow: true}),
  // 4
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

  
  //5
  setSettingField('colors', {
    label: "Border Color", 
    labelId: "text-border-color",
    for : 'boderColorChange',
    tab: 'border',
  }),
  
  //6
        setSettingField('spacing', {
        label: "Border Width",
        labelId: "text-border-width",
        for : 'borderWidthChange',
        tab: 'border',
    }
      ),
  //7
  setSettingField('spacing', {
      label: "Border Radius",
      labelId: "text-border-radius",
      for : 'borderRadiusChange',
      tab: 'border',
    
  }
    ),

  // 8
  setSettingField('heading', {label: "Box Shadow", for : 'boxshadow', tabAllow: true}),

  // 9 : Pseudo Status 
    setSettingField('status', { 
      for : 'boxshadow',
      tab: 'boxshadow',
      statusOptions : [
        {name: 'Normal', value: 'normal' },
        {name: 'Hover', value: 'hover' }, 
      ],
    }),


  // 10 
  setSettingField('boxShadow', {
        label: "BoxShadow",
        labelId: "box-shadow",
        for : 'boxshadow',
        tab : 'boxshadow',
        value:'',  
        responsive: 'off',
        defaultNot:true  
        // statuses : ['normal']       
  }),  
    
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
   
    // 3
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
        for : 'minWidthSizeChange',
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
         tabOpen: true
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
        for : 'minHeightSizeChange',
        tab: 'layout',
         tabOpen: true
  }),
  
  // 8
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


  ]
  
}




export const ImageSettingsSet:settingsSetArgs = (settingType, data)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId)

  if(findBlock){
    const settings = {...ImageSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'image' ){
      /*+++++++++++++++++++++++ Content +++++++++++++++++++++ */
      settings.content[1].props.value =  findBlock?.props?.alt;


    //   /*+++++++++++++++++++++++ Styles +++++++++++++++++++++ */

    //         /* Alignment */
   
      
    }

    

    // console.log(settings);
    return settings
    
  }


}