import { createSlice } from "@reduxjs/toolkit";


export const dataUsuarios = createSlice({
  name: "usuario",
  initialState:{
    usuario:"XxEMMANUELZxX"
    },
  reducers: {
    addDataUsuarios: (state, action) => {
        state.push(action.payload);
    },

  
  },
});

export const {  addDataUsuarios } = dataUsuarios.actions;

export default dataUsuarios.reducer;