
export const Capitalize = (string:string)=>{
  if(!string) '';


  let str = string.trim();
  str = str.charAt(0).toUpperCase() + str.slice(1)
  return str;
}



export const getFirstWord = (string:string)=>{
    if(!string) '';

    let str = string.trim();
    str = str.split('-')[0];
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str

}


export const getNameAndExtension = (value:string)=>{
  if(!value) '';
  const lastSlashIndex = value.lastIndexOf('/');
  
  const fileNameWithExtension = value.substring(lastSlashIndex + 1);

  const lastDotIndex = fileNameWithExtension.lastIndexOf('.');
  
  let fileName = fileNameWithExtension;
  let fileExtension = '';

  if (lastDotIndex > 0) {
    fileName = fileNameWithExtension.substring(0, lastDotIndex);
    fileExtension = fileNameWithExtension.substring(lastDotIndex + 1);
  }

  return [  fileName,  fileExtension]

}


export const calculateSize = (value:number)=>{


  let size ;

  if(value < 1024){
    size = value + ' Bytes';
  }else if( value < (1024 * 1024)){
    size = (value/1024).toFixed(2) + ' KB';
  }else if(value < (1024 * 1024 * 1024)){
    size = (value/1048576).toFixed(2) + ' MB';
  }else{
    size = (value/1048576).toFixed(2) + ' GB';
  }

  return size;

}


export const convertStrToCommaVal = (str:string)=>{
  let commaVal = str.trim();
  commaVal = commaVal.replace(/\s/g, ',');
  return commaVal;
}

export const convertCommaToStrVal = (str:string)=>{
  let commaVal = str.trim();
  commaVal = commaVal.replace(/,/g, ' ');
  return commaVal;
}


export const removeStirngFromNumber = (val:string, rem:string)=>{
  let remValue = val.trim();
  remValue = remValue.split(rem)[0]
  return remValue;
}