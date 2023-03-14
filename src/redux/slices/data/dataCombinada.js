import { createSlice } from "@reduxjs/toolkit";

const initialState = 
 []
;

const dataCombinada = createSlice({
  name: "dataCombinada",
  initialState,
  reducers: {
    addDataCombinada: (state, action) => {
        state.push(action.payload);
    },
    editDataCombinada: (state, action) => {
       
    },
    deleteDataCombinada: (state, action) => {
       
    },
  
  },
});

export const {  addDataCombinada,editDataCombinada,deleteDataCombinada } = dataCombinada.actions;
export default dataCombinada.reducer;