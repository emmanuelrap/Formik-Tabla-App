//Aqui se carga la data y se manda mediante props a todos los demas Componentes
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./navigation/Navigation";
import { getUsersPersons } from "./helpers/getUsersPersons";

export default function App() {
  const [dataCombinacion, setDataCombinacion] = useState([]);
  const [saludo, setSaludo] = useState("HOLAAA XD");

  useEffect(() => {
    obtenerCombinacion();
  }, []);

  async function obtenerCombinacion() {
    let res = await getUsersPersons();
    setDataCombinacion(res);
  }

  return (
    <>
      <Navigation
        dataCombinacion={dataCombinacion}
        setDataCombinacion={setDataCombinacion}
        setSaludo={setSaludo}
        saludo={saludo}
      />
    </>
  );
}
