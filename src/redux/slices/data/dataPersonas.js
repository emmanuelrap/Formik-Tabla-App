import { createSlice } from "@reduxjs/toolkit";


export const dataPersonas = createSlice({
  name: "persona",
  initialState:{
    nombre:"carlos emmanuel"
    },
  reducers: {
    addDataPersonas: (state, action) => {
        state.push(action.payload);
    },

  
  },
});

export const {  addDataPersonas } = dataPersonas.actions;

export default dataPersonas.reducer;