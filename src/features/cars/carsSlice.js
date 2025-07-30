import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    items: [],
  },
  reducers: {
    addToList: (state, action) => {
      const { name, value } = action.payload
      if (state.items.find((item) => item.name == name)) {
        state.items = state.items.map((item) => {
          if (item.name == name) {
            return {
              ...item,
              value: Number(item.value) + Number(value),
              count: item.count + 1,
            }
          }
          return item
        })
      } else {
        state.items = [...state.items, { ...action.payload, count: 1 }]
      }
    },
    removeFromList: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name != action.payload.name
      )
    },
    // increment: (state) => {
    //   state.count += 1
    // },
    // decrement: (state) => {
    //   state.count -= 1
    // },
  },
})

export const { addToList, removeFromList } = counterSlice.actions

export default counterSlice.reducer
