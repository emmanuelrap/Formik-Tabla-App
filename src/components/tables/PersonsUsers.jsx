import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const PersonsUsers = () => {
  const navigate = useNavigate();
  //users: tipo Objeto
  const [users, setUser] = useState([]);
  const [myTable, setMyTable] = useState([]);
  var objectUsers = new Object();


  var personas = [
    {
      nombre: "Carlos",
      apellidos: "Zambrano",
      edad: 25,
    },
    {
      nombre: "Ana",
      apellidos: "Villarreal",
      edad: 30,
    },
  ];

  var libros = [
    {
      titulo: "introduccion a java",
      paginas: 300,
      autor: "Carlos",
    },
    {
      titulo: "programacion net",
      paginas: 200,
      autor: "Ana",
    },
    {
      titulo: "React FULL",
      paginas: 200,
      autor: "Carlos",
    },
  ];

  useEffect(() => {
    loadData();
  }, []);


  const loadData = async () => {
    const resultUsers = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );
    const resultPersons = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
    );

    ///////////////////////
    let users=resultUsers.data;
    let personas = resultPersons.data;

                  //ARRAYS
    console.log("personas.data:",personas)
    console.log("users.data:",users)

    //  setMyTable(persons)

  
    ///////////MATCH [ERROR AQUI] ///////////
    var resultado = users.map(function(user) {
      var otraPersona = personas.filter(function(p) {
         return p.IdPersonaPK == "2";
      
      })[0];                      
      return {
        nombre: otraPersona.Nombre,
        usuario: user.Usuario
      }
    });
     console.log("resultado Match",resultado);
      setMyTable(resultado)





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
          {myTable.map((element) => (
            <tr>
              <td>{element.nombre} </td>
              <td>{element.usuario} </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsUsers;
