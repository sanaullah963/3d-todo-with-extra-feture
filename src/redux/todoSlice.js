import { createSlice } from "@reduxjs/toolkit";
// initialState
const initialState={
  value:[]
}
// reducer
export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers : {
    addTodoItem : (state,action)=>{
      const existingTodo = state.value.map((i) => i===action.payload);
      // state.value = action.payload;
      if(existingTodo){
        state.value.unshift(action.payload);
      }else{
        state.value = action.payload;
      }
    },
    deletTodo : (state,action)=>{
      state.value = state.value.filter((item)=>item.id !== action.payload)
    }
  }
})
// export
export const { addTodoItem, deletTodo } = todoSlice.actions;

export default todoSlice.reducer