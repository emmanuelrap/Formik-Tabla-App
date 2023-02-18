import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

const TablePersons = () => {

    //users: tipo Objecto
    const [persons, setPerson] = useState([]);
    var objectUsers = new Object();
  
  
    useEffect(() => {
      loadPersons();
   
    }, []);
  
    const loadPersons = async () => {
      const result = await axios.get(
        `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
      );
      setPerson(result.data);
      objectUsers=result.data;
  
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
            {persons.map((p, index) => (
              <tr key={p._id}>
                <th scope="row">{index + 1}</th>
                <td>{p.Nombre} </td>
                
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
  )
}

export default TablePersons