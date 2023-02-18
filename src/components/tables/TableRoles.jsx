import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const TableRoles = () => {
  const navigate = useNavigate();
  //users: tipo Objecto

  const [roles, setRol] = useState([]);


  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    const result = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/roles/`
    );
    setRol(result.data);

  };

 
  return (
    <div className="home-page">
      <table className="table table-striped">
      <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">TIPO</th>
            <th scope="col">DESCRIPCION</th>
            <th scope="col">OBSERVACION</th> 
          </tr>
        </thead>
        <tbody>
          {roles.map((rol) => (
            <tr>
              <th scope="row">{rol.IdRolOK}</th>
              <td>{rol.TipoRol} </td>
              <td>{rol.DesRol} </td>
              <td>{rol.Observacion} </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRoles;
