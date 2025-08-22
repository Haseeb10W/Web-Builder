import { findBlockOverall } from "@/lib/builder/blockHandlers";
import { setSettingField } from "@/lib/fieldSettings/fields";
import { settingsSetArgs, settingsSetupSchema } from "@/types/settingsSchema";

const flexSettings:settingsSetupSchema = {
  content : [
  
  //0
 setSettingField('heading', {label: "Flex Structure", for : 'flexlayout', tabAllow: true , tabOpen: true

   }),

    // 1
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
        for : 'flexDirectionChange',
        tab: 'flexlayout',
        tabOpen: true
  }),

  // 1
  setSettingField('select', {
        label: "Flex wrap",
        labelId: "flexWrap",
        value:'row',
        options: [
      {label: 'Wrap', value: 'wrap'},
      {label: 'No Wrap', value: 'nowrap'},
      {label: 'wrap-reverse', value: 'wrap-reverse'},     
  ],
        for : 'flexDirectionChange',
        tab: 'flexlayout',
        tabOpen: true
  }),

  //2
  setSettingField('halfSpace', {
      label: "Gap",
      labelId: "flex-grap",
      for : 'flexGap',
      tab: 'flexlayout',
      tabOpen: true
    
  }
    ),

      // 3
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
        for : 'jAlignChange',
        tab: 'flexlayout',
        tabOpen: true

  }),

    // 4
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
        for : 'vAlignChange',
        tab: 'flexlayout',
        tabOpen: true

  }),


  //5
  setSettingField('iconField', {
        label: "Align Content", 
        labelId: "flex-alignment-vertical",
        data: [
          {name: 'vStart', value: 'start', title: "Start"    },
          {name: 'vCenter', value: 'center', title: "Center"   },
          {name: 'vEnd', value: 'end', title: "End"  }, 
          {name: 'vSpaceAround', value: 'space-around', title:  "Space Around" },
          {name: 'vSpaceBetween', value: 'space-between', title: "Space Between"  },
        ],
        for : 'vAlignChange',
        tab: 'flexlayout',
        tabOpen: true

  }),

  ],

  /*+++++++++++++++++++++++++++++++++++++++  
                    Styles 
  ++++++++++++++++++++++++++++++++++++++++*/
  styles : [
  // 0
  setSettingField('heading', {label: "Background", for : 'background', tabAllow: true , tabOpen: true

   }),

  // 1
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
        tabOpen: true
  }),

  // 2
  setSettingField('heading', {label: "Border", for : 'border', tabAllow: true}),
  
  // 3
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

  //4
  setSettingField('colors', {
    label: "Border Color", 
    labelId: "text-border-color",
    for : 'boderColorChange',
    tab: 'border',
  }),

  //5
   setSettingField('spacing', {
    label: "Border Width",
    labelId: "text-border-width",
    for : 'borderWidthChange',
    tab: 'border',
    }
      ),

   //6
  setSettingField('spacing', {
      label: "Border Radius",
      labelId: "text-border-radius",
      for : 'borderRadiusChange',
      tab: 'border',
    
  }
    ),

  ],


  /*+++++++++++++++++++++++++++++++++++++++  
                    Settings 
  ++++++++++++++++++++++++++++++++++++++++*/
  settings: [
    // 0 :: Layout
    setSettingField('heading',{label: "Layout", for : 'layout', tabAllow: true, tabOpen: true}),

    // 1
    setSettingField('spacing', {
      label: "Margin",
      labelId: "flex-margin",
      for : 'marginChange',
      tab: 'layout',
      tabOpen: true
  }
    ),

      // 2
       setSettingField('spacing', {
          label: "Padding",
          labelId: "flex-padding",
          for : 'paddingChange',
          tab: 'layout',
          tabOpen: true
      }),


        // 3
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
        for : 'widthSizeChange',
        tab: 'layout',
        tabOpen: true
  }),

    // 4
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
        for : 'maxWidthSizeChange',
        tab: 'layout',
         tabOpen: true
  }),
 
    // 5
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
        for : 'heightSizeChange',
        tab: 'layout',
         tabOpen: true
  }),

    // 6
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
        for : 'maxHeightSizeChange',
        tab: 'layout',
         tabOpen: true
  }),


  ]
  
}




export const flexSettingsSet:settingsSetArgs = (settingType, data)=> {

  // console.log(settingType)
  const blockId = settingType?.id;

  const findBlock = findBlockOverall(data, blockId)

  if(findBlock){
    const settings = {...flexSettings}
    // console.log(findBlock)
    
    if(findBlock.type === 'flex' ){
      settings.content[0].props.value =  findBlock?.props?.text

    }

    // console.log(settings);
    return settings
    
  }


}