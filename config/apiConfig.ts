
const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
export const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL ;
export const API = {
  media : {
    upload : `${apiUrl}media/upload`,
    getFiles : `${apiUrl}media/files`,
  }
}