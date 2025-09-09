import { options } from "jodit/esm/core/helpers"




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
    statuses: ['normal', 'hover'],
    currentStatus : 'normal',
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
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle  || '', 
      
        }  
      }

    case 'status':
      return {
        field: field, 
        props : {
        statusOptions: [...props?.statusOptions],
        value: props?.value || 'normal',
        for : props?.for,
        type: 'settingField',

        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,

        }
      }

    case 'textarea':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        placeholder: props?.placeholder,
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
      
        }  
      }
      
    case 'texts':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        placeholder: props?.placeholder,
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        responsive: props?.responsive || 'on',
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }  
      }

    case 'heading':
      return {
        field: field, 
        props : {
        label: props?.label, 
        for : props?.for,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        tabAllow: props?.tabAllow ,
        
          }
        }

    case 'textAlign':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
      
        }  

      }
    case 'iconField':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        data : [...props?.data],
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
      
        }  

      }
    case 'colors':
      return {
        field: field, 
        props : {
        label: props?.label, 
        labelId: props?.labelId,
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        responsive: props?.responsive || 'on',
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
      
        }  

      }
    case 'fontFamily':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        options : [],
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        responsive: props?.responsive || 'on',
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }

      }

    case 'size':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        unitOptions : [...props?.unitOptions],
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }
     
    case 'number':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        // unitOptions : [...props?.unitOptions],
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
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
        responsive: props?.responsive ? props?.responsive : 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }


      case 'transition':
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
        responsive: props?.responsive ? props?.responsive : 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }

    case 'transform':
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
        responsive: props?.responsive ? props?.responsive : 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }

    case 'iconSelect':
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
        responsive: props?.responsive ? props?.responsive : 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
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
        responsive: props?.responsive ? props?.responsive : 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }

      case 'imageSection':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        value:props?.value ? props?.value : '',
        defaultNot:props?.defaultNot,
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive ? props?.responsive : 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }


    case 'linkField':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        value:props?.value ? props?.value : '',
        defaultNot:props?.defaultNot,
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive ? props?.responsive : 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }

    case 'spacing':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        value: props?.value || '',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        responsive: props?.responsive || 'on',
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }

    case 'halfSpace':
      return {
        field: field,
        props : {
        label: props?.label,
        labelId: props?.labelId,
        unitOption:props?.unitOption,
        unitValue: props?.unitValue || '',
        showUnit: props?.showUnit ? props?.showUnit : true,
        selectUnit: props?.selectUnit ? props?.selectUnit : true,
        value: props?.value || '',
        responsive: props?.responsive || 'on',
        for : props?.for,
        type: 'settingField',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        fieldStyle: props?.fieldStyle || '', 
        }
      }

      case 'background':
        return {
          field: field,
          props : {
          label: props?.label,
          labelId: props?.labelId,
          options : [...props?.options],
          value: props?.value || '',
          for : props?.for,
          type: 'settingField',
          responsive: props?.responsive ? props?.responsive : 'on',
          tab: props?.tab || commonProps.tab,
          tabOpen: props?.tabOpen ? props?.tabOpen : false,
          statuses: props?.statuses || commonProps.statuses,
          currentStatus: props?.currentStatus || commonProps.currentStatus,
          fieldStyle: props?.fieldStyle || '', 
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