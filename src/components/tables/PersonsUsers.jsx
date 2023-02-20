import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const PersonsUsers = () => {
  const [usuariosConNombre, setUsuarioConNombre] = useState([]);
  let users;
  let personas;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const resultUsers = await axios.post(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );
    const resultPersons = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
    );

    //////////
    users = resultUsers.data;
    personas = resultPersons.data;
    //  console.log("resultPersons.data",resultPersons.data)
    //  console.log("resultUsers.data",resultUsers.data)
    ////////

    const nombresPorId = {};
    console.log("personas", personas);
    personas.forEach((p) => (nombresPorId[p.IdPersonaOK] = p.Nombre));
    const usuariosConNombres = users.map((u) => {
      const nuevo = {
        ...u, // Todo lo que tenía el auto
        Nombre: nombresPorId[u.IdUsuarioOK],
      };
      // Borrar idMarca en el nuevo.
      delete nuevo.IdUsuarioOK;
      return nuevo;
    });
    console.log("usuariosConNombres", usuariosConNombres);
    setUsuarioConNombre(usuariosConNombres);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">USUARIO</th>
            <th scope="col">NOMBRE</th>
          </tr>
        </thead>
        <tbody>
          {usuariosConNombre.map((element) => (
            <tr>
              <td>{element.Usuario} </td>
              <td>{element.Nombre} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsUsers;
