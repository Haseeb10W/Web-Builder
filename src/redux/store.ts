import { configureStore } from '@reduxjs/toolkit'
import  previewDataReducer  from './preview/previewDataSlice'

export const store = configureStore({
  reducer: {
    previewData : previewDataReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch