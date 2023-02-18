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
    let persons = resultPersons.data;

    console.log("persons.data:",persons)
    console.log("users.data:",users)



    // setMyTable(persons)

  
    ///////////MATCH [ERROR AQUI] ///////////
    var resultadoMatch = users.map(function(user) {
      var otraPersona = persons.filter(function(p) {
        return p.IdPersonaOK == user.IdPersonaOK;
      })[0];
      console.log("otraPersona",otraPersona)
      return {
        nombre: user.Usuario,
        usuario: otraPersona.Nombre
      }

    });
    
    
 
     console.log("resultado Match",resultadoMatch);
      setMyTable(resultadoMatch)

  };

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
        <tbody>
          {myTable.map((element, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{element.nombre} </td>
              <td>{element.usuario} </td>
              
              
              {/* <Button
                variant="contained"
                onClick={() => history.push(`/user/${user.id}`)}
              >
                View
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push(`/edituser/${user.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </Button> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonsUsers;
