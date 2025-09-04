

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import { ContentSchema } from '@/types/editSchema'

// Define a type for the slice state
interface PreviewDataState {
  value: ContentSchema | null
}

// Define the initial state using that type
const initialState: PreviewDataState = {
  value: null,
}

export const previewDataSlice = createSlice({
  name: 'previewData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action : PayloadAction<ContentSchema | null>) => {
      state.value = action.payload
    },
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateData: (state, action: PayloadAction<ContentSchema >) => {

      if(state.value){
        state.value = {...state.value, ...action.payload}
      }else{
        state.value = action.payload
      }

      state.value = action.payload
    },
  },
})

export const { setData, updateData } = previewDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPreviewData = (state: RootState) => state.previewData.value

export default previewDataSlice.reducer