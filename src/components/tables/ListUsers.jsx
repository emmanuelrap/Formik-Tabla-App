import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ListUsers = ({ userSel, setUserSel, dataCombinacion }) => {
  console.log("desde ListUser ", dataCombinacion);
  const navigate = useNavigate();
  //users: tipo Objecto
  const [users, setUser] = useState([]);
  const [myUsers, setMyUser] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const handleListItemClick = (event, index, nombreUsuario) => {
    setSelectedIndex(index);
    setUserSel(nombreUsuario);
  };

  useEffect(() => {
    loadUsers();
    loadMyUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      `https://60decafeabbdd9001722d05c.mockapi.io/users`
    );
    setUser(result.data);
  };

  const loadMyUsers = async () => {
    const result2 = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );
    setMyUser(result2.data);
  };

  return (
    // TODO: ZAM: PONER LA ALTURA ACORDE A LA PANTALLA
    <div className="border border-primary rounded m-2 p-2">
      <Box
        sx={{
          width: "100%",
          maxWidth: 300,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 430,
        }}
      >
        <div className="text-center font-weight-bold">
          <h3>USUARIOS</h3>
        </div>

        <List component="nav" aria-label="main mailbox folders">
          {dataCombinacion.map((user, index) => (
            <ListItemButton
              selected={selectedIndex === index}
              key={user.idConsecutivo}
              onClick={(event) =>
                handleListItemClick(event, index, user.Usuario)
              }
            >
              <ListItemIcon>
                <AccountCircleIcon />
                {user.Usuario}
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default ListUsers;
