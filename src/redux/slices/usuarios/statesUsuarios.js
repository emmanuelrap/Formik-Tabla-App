import { createSlice } from "@reduxjs/toolkit";

const initialState = 
 {
    
 }
;

const statesUsuarios = createSlice({
  name: "statesUsuarios",
  initialState,
  reducers: {
    // addDataCombinada: (state, action) => {
    //     state.push(action.payload);
    // },
 
  
  },
});

export const { } = statesUsuarios.actions;
export default statesUsuarios.reducer;