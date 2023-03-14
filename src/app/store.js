import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'

import tasksReducer from "../features/tasks/tasksSlice";
import  combinadaReducer  from "../features/tasks/combinadaSlice";

export const store = configureStore({
  reducer: { statesUsers: tasksReducer },
});
