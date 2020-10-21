import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'
import { todoItemType } from '@/types/todo'

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = {
  todos: todoItemType[]
}
