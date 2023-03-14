import { configureStore } from "@reduxjs/toolkit";
import  dataUsuarios  from "../slices/data/dataUsuarios";
import dataPersonas from "../slices/data/dataPersonas";
import statesApp from "../slices/app/statesApp";
import statesUsuarios from "../slices/usuarios/statesUsuarios";

const store = configureStore({
  reducer: { 
    dataUsuariosReducer: dataUsuarios,
    dataPersonasReducer: dataPersonas,
    statesAppReducer: statesApp, 
    // statesUsuariosReducer: statesUsuarios,
    },
});

export default store