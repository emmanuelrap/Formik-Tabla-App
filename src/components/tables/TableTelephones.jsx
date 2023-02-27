import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ActionTableBar from "../bars/ActionTableBar";

const TableTelephones = () => {
  const [telephones, setTelephon] = useState([]);

  useEffect(() => {
    loadTelephones();
  }, []);

  const loadTelephones = async () => {
    const result = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
    );
    setTelephon(result.data[0].cat_personas_telefonos);
  };
  return (
    <div className="home-page">
      <ActionTableBar></ActionTableBar>
      <table className="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">CODIGO PAIS</th>
            <th scope="col">EXTENSION</th>
            <th scope="col">NUMERO</th>
            <th scope="col">¿PRINCIPAL?</th>
            <th scope="col">TIPO DE TELEFONO</th>
          </tr>
        </thead>
        <tbody>
          {telephones.map((tel, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{tel.CodPais} </td>
              <td>{tel.NumExtension} </td>
              <td>{tel.NumTelefono} </td>
              <td>{tel.Principal} </td>
              <td>{tel.TipoTelefono} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTelephones;
