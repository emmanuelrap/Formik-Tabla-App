//ZAM: PAgina principal de usuarios, tiene un toogle para activar y desactivar la lista de usuarios rapida, tiene un renderizado condicional para las tablas del <NavigationBarUsers>
import React, { useState } from "react";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ToggleButton from "@mui/material/ToggleButton";

import "../styles.css";
import NavigationBarUsers from "../components/bars/NavigationBarUsers";
import TableTelephones from "../components/tables/TableTelephones";
import TableUsers from "../components/tables/TableUsers";
import TablePersons from "../components/tables/TablePersons";
import TableRoles from "../components/tables/TableRoles";
import ListUsers from "../components/tables/ListUsers";

const Users = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [tables, setTable] = useState(0);
  const [userSel, setUserSel] = useState("YO");

  const handleChangeMenu = (event, newValue) => {
    newValue = !newValue;
    setShowMenu(newValue);
  };

  return (
    <div className="ml-1">
      <div className="horizontalComponents">
        <ToggleButton value={showMenu} onChange={handleChangeMenu}>
          <ViewHeadlineIcon color="" />
        </ToggleButton>
        <NavigationBarUsers tables={tables} setTable={setTable} />
        <h3>
          Seleccionado: <b>{userSel}</b>
        </h3>
      </div>

      <div className="horizontalComponents ml-1">
        {showMenu == true ? (
          <ListUsers userSel={userSel} setUserSel={setUserSel}></ListUsers>
        ) : null}
        <div className="border border-primary rounded m-1">
          {tables == 0 ? (
            <TableUsers userSel={userSel} setUserSel={setUserSel}></TableUsers>
          ) : null}
          {tables == 1 ? <TableTelephones></TableTelephones> : null}
          {tables == 2 ? <TablePersons></TablePersons> : null}
          {/* <TableTelephones /> */}
        </div>
      </div>
    </div>
  );
};

export default Users;
