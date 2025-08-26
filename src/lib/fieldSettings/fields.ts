



interface fieldSetArgs {

  (field: string,
  props: {
    [key:string] : any
  },
  
  ): setFieldScheama




  

}

interface setFieldScheama {
  field : string,
  props : {
    [key:string] : any
  }
} 




export const setSettingField:fieldSetArgs = (field, props)=>{

  const commonProps = {
    tabOpen : false,
    tab: ''
  }

  const fieldSet:setFieldScheama = {
    field: field,
    props : {}
  }


  switch(field){
    case 'texteditor':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        placeholder: props?.placeholder,
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
      
        }  
      }

    case 'textarea':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        placeholder: props?.placeholder,
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
      
        }  
      }
      
    case 'texts':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        placeholder: props?.placeholder,
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
        }  
      }

    case 'heading':
      return {
        field: field, 
        props : {
        label: props?.label, 
        for : props?.for,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        tabAllow: props?.tabAllow,
          }
        }

    case 'textAlign':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
      
        }  

      }
    case 'iconField':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        data : [...props?.data],
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
      
        }  

      }
    case 'colors':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
      
        }  

      }
    case 'fontFamily':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        options : [],
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false

        }

      }

    case 'size':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        unitOptions : [...props?.unitOptions],
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
        }
      }

    case 'select':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        options : [...props?.options],
        value:props?.value ? props?.value : '',
        defaultNot:props?.defaultNot,
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
        }
      }

    case 'spacing':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
        }
      }

    case 'halfSpace':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        value: '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false
        }
      }

      case 'backgound':
        return {
          field: field,
          props : {
          label: props?.label,
          labelId: props?.labelId,
          value: '',
          for : props?.for,
          type: 'settingField',
          tab: props?.tab || commonProps.tab,
          tabOpen: props?.tabOpen ? props?.tabOpen : false
          }
        }

      

    default :
     return {
      field: field,
      props : {
        ...commonProps,
        ...props
      }
    }
  }
  




  
  

}