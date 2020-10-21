import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { todoItemType } from '@/types/todo'

let nextTodoId = 0

const initialState: todoItemType[] = []

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<{ id: number; text: string }>) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text: string) {
        return { payload: { text, id: nextTodoId++ } }
      },
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
  },
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
