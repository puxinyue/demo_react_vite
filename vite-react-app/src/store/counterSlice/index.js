import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },

  // reducer 就是我们用来修改状态的方法
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

//导出actionCreate便于用户使用 例如 dispatch(increment())

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer