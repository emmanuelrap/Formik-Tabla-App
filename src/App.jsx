//Aqui se carga la data y se manda mediante props a todos los demas Componentes
import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import { getUsersPersons } from "./helpers/getUsersPersons";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const [dataCombinacion, setDataCombinacion] = useState([]);
  const dataUsuarios = useSelector((state) => state.dataUsuariosReducer);
  const dataPersona = useSelector((state) => state.dataPersonasReducer);

  useEffect(() => {
    console.log("dataPersona del Reducer", dataPersona);
    obtenerCombinacion();
  }, []);

  async function obtenerCombinacion() {
    let res = await getUsersPersons();
    setDataCombinacion(res);
  }

  return (
    <>
      <h2>El estado es : {dataPersona.nombre}</h2>
      <Navigation
        dataCombinacion={dataCombinacion}
        setDataCombinacion={setDataCombinacion}
      />
    </>
  );
}
