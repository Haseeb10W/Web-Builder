



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
    tab: '',
    statuses: ['normal', 'hover']
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
      
        }  
      }

    case 'status':
      return {
        field: field, 
        props : {
        statusOptions: [...props?.statusOptions],
        value: props?.value || '',
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
      
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
      
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
      
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
      
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
        

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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
        }
      }
      
    case 'position':
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
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
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses
        }
      }

      case 'background':
        return {
          field: field,
          props : {
          label: props?.label,
          labelId: props?.labelId,
          options : [...props?.options],
          value: '',
          for : props?.for,
          type: 'settingField',
          tab: props?.tab || commonProps.tab,
          tabOpen: props?.tabOpen ? props?.tabOpen : false,
          statuses: props?.statuses || commonProps.statuses

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