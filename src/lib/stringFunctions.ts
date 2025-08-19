
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