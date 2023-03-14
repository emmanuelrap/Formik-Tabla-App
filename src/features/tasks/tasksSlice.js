import { createSlice } from "@reduxjs/toolkit";

const initialState = 
  {
    ShowUsersList:true,
    setErrorAddUpdate:"",
    actualizarTablaCombinada:false,
  }
;

const userSlice = createSlice({
  name: "statesUsers",
  initialState,
  reducers: {
    setShowUsersList: (state, action) => {
      state.ShowUsersList=!state.ShowUsersList
    },

  
  },
});

export const {  setShowUsersList } = userSlice.actions;
export default userSlice.reducer;
