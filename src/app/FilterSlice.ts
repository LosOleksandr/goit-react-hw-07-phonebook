import { createSlice } from "@reduxjs/toolkit"

const filterIntialState: string = ""

export const FilterSlice = createSlice({
  name: "filter",
  initialState: filterIntialState,
  reducers: {
    setFilter(state, action) {
      return action.payload
    },
  },
})

export const { setFilter } = FilterSlice.actions
export const filterReducer = FilterSlice.reducer
