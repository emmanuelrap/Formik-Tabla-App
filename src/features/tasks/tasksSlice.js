import { createSlice } from "@reduxjs/toolkit";

const initialState = 
  {
    ShowUsersList:true,
    setErrorAddUpdate:"",
  }
;

const userSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    editTask: (state, action) => {
      console.log("Desde tookekit");
      alert("CLIC desde TOOLKIT");
    },
    setShowUsersList: (state, action) => {
      state.ShowUsersList=!state.ShowUsersList
      console.log(  "  state.ShowUsersList",state.ShowUsersList)
    },
  
  },
});

export const { editTask, setShowUsersList } = userSlice.actions;
export default userSlice.reducer;
