import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Quét nhà",
    status: true,
  },
  {
    id: 2,
    title: "Nấu cơm",
    status: false,
  },
  {
    id: 3,
    title: "Rửa bát",
    status: false,
  },
];

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
