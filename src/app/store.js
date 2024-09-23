import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo/todoSlice'
import PostsReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    posts: PostsReducer
  },
})