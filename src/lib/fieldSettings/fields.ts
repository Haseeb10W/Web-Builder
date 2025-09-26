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
    styleApply : 'main'
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
        styleApply: props?.styleApply || commonProps.styleApply,
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        
      
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
        row : props?.row || 4,
        for : props?.for,
        type: 'settingField',
        responsive: props?.responsive || 'on',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
         
      
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
        
        }
      }

      case 'listsIcon':
      return {
        field: field,
        props: {
          label: props?.label,
          labelId: props?.labelId,
          items: props?.items || [
            { id: 1, text: "List Item #1", icon: "check" },
            { id: 2, text: "List Item #2", icon: "x" },
            { id: 3, text: "List Item #3", icon: "circle" }
          ],
          defaultNot: props?.defaultNot,
          for: props?.for,
          type: 'settingField',
          responsive: props?.responsive ? props?.responsive : 'on',
          tab: props?.tab || commonProps.tab,
          tabOpen: props?.tabOpen ? props?.tabOpen : false,
          statuses: props?.statuses || commonProps.statuses,
          currentStatus: props?.currentStatus || commonProps.currentStatus,
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
        firstField: props?.firstField || 'X-Axis',
        secondField: props?.secondField || 'Y-Axis',
        tab: props?.tab || commonProps.tab,
        tabOpen: props?.tabOpen ? props?.tabOpen : false,
        statuses: props?.statuses || commonProps.statuses,
        currentStatus: props?.currentStatus || commonProps.currentStatus,
        
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
           
          }
        }

        case 'boxShadow':
        return {
          field: field,
          props : {
          label: props?.label,
          labelId: props?.labelId,
          value: props?.value || '',
          for : props?.for,
          type: 'settingField',
          responsive: props?.responsive ? props?.responsive : 'on',
          tab: props?.tab || commonProps.tab,
          tabOpen: props?.tabOpen ? props?.tabOpen : false,
          statuses: props?.statuses || commonProps.statuses,
          currentStatus: props?.currentStatus || commonProps.currentStatus, 
          }
        }

        case 'boxShadow':
        return {
          field: field,
          props : {
          label: props?.label,
          labelId: props?.labelId,
          value: props?.value || '',
          for : props?.for,
          type: 'settingField',
          responsive: props?.responsive ? props?.responsive : 'on',
          tab: props?.tab || commonProps.tab,
          tabOpen: props?.tabOpen ? props?.tabOpen : false,
          statuses: props?.statuses || commonProps.statuses,
          currentStatus: props?.currentStatus || commonProps.currentStatus, 
          }
        }

    case 'textClasses':
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
        
        }  
      }


      case 'cssEditor':
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