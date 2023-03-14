import { createSlice } from "@reduxjs/toolkit";

const initialState = 
 {
    loginUser:"",
    loading:false,

 }
;

const statesApp = createSlice({
  name: "statesApp",
  initialState,
  reducers: {
    // addDataCombinada: (state, action) => {
    //     state.push(action.payload);
    // },

  
  },
});

export const {   } = statesApp.actions;
export default statesApp.reducer;