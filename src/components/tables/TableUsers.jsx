import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const TableUsers = () => {
  const navigate = useNavigate();
  //users: tipo Objecto
  const [users, setUser] = useState([]);
  const [myUsers, setMyUser] = useState([]);
  var objectUsers = new Object();
  var objectMyUsers = new Object();

  useEffect(() => {
    loadUsers();
    loadMyUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users`
    );
    setUser(result.data);
    objectUsers=result.data;
    console.log("objectUsers:", result.data);
  };

  const loadMyUsers = async () => {
    const result2 = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );
    setMyUser(result2.data);
    objectMyUsers=result2.data;
    console.log("objectMyUsers:", result2.data);
  };

  return (
    <div className="home-page">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Usuario</th>
            <th scope="col">Roles-IdNegocioBK [¿Actual?]]</th> 
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myUsers.map((myUser, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{myUser.Usuario} </td>
              <td>{myUser.cat_usuarios_roles.map((rol) => (<li>{rol.IdNegocioBK}[{rol.Actual}]</li>))}</td> 
              <td></td>
              
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

export default TableUsers;
