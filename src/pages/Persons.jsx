import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Persons = () => {
  const navigate = useNavigate();
  const [persons, setPersons] = useState([]);
  const [users, setUsers] = useState([]);

  //Crear un objeto recipiente para el match (join)
  var objectTable = new Object();

  var personas = [
    {
      nombre: "pedro",
      apellidos: "gomez",
      edad: 20,
    },
    {
      nombre: "ana",
      apellidos: "sanchez",
      edad: 30,
    },
  ];

  var libros = [
    {
      titulo: "introduccion a java",
      paginas: 300,
      persona_nombre: "pedro",
    },
    {
      titulo: "programacion net",
      paginas: 300,
      persona_nombre: "ana",
    },
  ];

  useEffect(() => {
    loadPersons();
    loadUsers();
  }, []);

  const loadPersons = async () => {
    const result = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
    );
    setPersons(result.data);
    // console.log(">setPersons", result.data);
  };

  const loadUsers = async () => {
    const result = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );
    setUsers(result.data);
    // console.log(">setUsers", result.data);
  };

  //Crea un nuevo objeto con las propiedades que necesito de ambos en donde coincida "IdPersonaOK"
  const matchPersonsUsers = async () => {
    console.log(">>>>PERSONAS desde MATCH:", persons[0]);

    var resultado = users.map(function (user) {
      var otraPersona = persons.filter(function (p) {
        return p.IdPersonaOK === user.IdPersonaOK;
      })[0];

      try {
        return {
          // nombre: otraPersona.nombre,
          // titulo: user.titulo,
          // paginas: user.paginas,
          // apellidos: otraPersona.apellidos,
          nombre: otraPersona.Nombre,
          usuario: user.Usuario,
        };
      } catch (e) {
        console.log(e);
      }
    });
    objectTable = resultado;
    console.log(">>>>>RESULTADO:", resultado);
    console.log(">>>>>OBJECT:", objectTable);
  };

  function ejecutarFuncion() {
    console.log("ejecutar funcion");
    console.log(objectTable);
  }

  //CODIGO ---------------------------------
  matchPersonsUsers();

  return (
    <div className="home-page">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody onLoad={ejecutarFuncion()}>
          {objectTable.map((element) => (
            <tr>
              {/* <th scope="row">{element.id}</th> */}
              {/* <td>{element.nombre}</td>
              <td>{element.usuario}</td> */}
              <h2>{element.usuario}</h2>
              <td>
                {/* {element.direcciones.gmail.DesDirWeb +
                  ": " +
                  element.direcciones.gmail.DireccionWeb} */}
              </td>
              <Button
                variant="contained"
                onClick={() => history.push(`/person/${person.id}`)}
              >
                View
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push(`/edituser/${person.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUser(person.id)}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Persons;
