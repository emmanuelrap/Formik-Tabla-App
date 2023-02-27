//Aqui se carga la data y se manda mediante props a todos los demas Componentes
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";

import Persons from "./pages/Persons";
import Roles from "./pages/Roles";
import Users from "./pages/Users";

export default function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [dataPersons, setDataPersons] = useState([]);
  const [dataUsersPersons, setDataUsersPersons] = useState([]);

  useEffect(() => {
    loadData().then("Termine de cargar la data");
  }, []);

  const loadData = async () => {
    const result = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );

    const result2 = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
    );
    setDataUsers(result.data);
    setDataPersons(result2.data);

    let users = result.data;
    let personas = result2.data;

    const nombresPorId = {};
    personas.forEach((p) => (nombresPorId[p.IdPersonaOK] = p.Nombre));

    const usuariosConNombres = users.map((u) => {
      const nuevo = {
        ...u, // Todo lo que tenía el usuario mas lo siguiente de persona:
        Nombre: nombresPorId[u.IdUsuarioOK],
      };
      // Borrar IdUsuarioOK en el nuevo.
      delete nuevo.IdUsuarioOK;
      return nuevo;
    });
  };

  return (
    <div>
      <Navigation dataUsers={dataUsers} dataPersons={dataPersons} />
    </div>
  );
}
