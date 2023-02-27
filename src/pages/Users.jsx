//ZAM: PAgina principal de usuarios, tiene un toogle para activar y desactivar la lista de usuarios rapida, tiene un renderizado condicional para las tablas del <NavigationBarUsers>
import React, { useState } from "react";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ToggleButton from "@mui/material/ToggleButton";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Tooltip } from "@mui/material";

import "../styles.css";
import NavigationBarUsers from "../components/bars/NavigationBarUsers";
import TableTelephones from "../components/tables/TableTelephones";
import TableUsers from "../components/tables/TableUsers";
import TablePersons from "../components/tables/TablePersons";
import TableRoles from "../components/tables/TableRoles";
import ListUsers from "../components/tables/ListUsers";
import DeleteIcon from "@mui/icons-material/Delete";
import TableDirecciones from "../components/tables/TableDirecciones";

const Users = ({ dataUsers, dataPersons }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [showTable, setShowTable] = useState(0);
  const [userSel, setUserSel] = useState("");

  const handleChangeMenu = (event, newValue) => {
    newValue = !newValue;
    setShowMenu(newValue);
  };

  const handleClickQuitarUsuario = () => {
    setUserSel("");
    setShowTable(0);
  };

  return (
    <div className="ml-1">
      <div className="horizontalComponents">
        <ToggleButton value={showMenu} onChange={handleChangeMenu}>
          <ViewHeadlineIcon color="" />
        </ToggleButton>
        <NavigationBarUsers
          showTable={showTable}
          setShowTable={setShowTable}
          userSel={userSel}
          setUserSel={setUserSel}
        />
        <h3 className="p-0 mt-1">
          {userSel == "" ? (
            ""
          ) : (
            <>
              <IconButton onClick={handleClickQuitarUsuario}>
                {userSel} <DeleteIcon />
              </IconButton>
            </>
          )}
        </h3>
      </div>

      <div className="horizontalComponents ml-1">
        {showMenu == true ? (
          <ListUsers userSel={userSel} setUserSel={setUserSel}></ListUsers>
        ) : null}
        <div className="border border-primary rounded m-1">
          {showTable == 0 ? (
            <TableUsers userSel={userSel} setUserSel={setUserSel}></TableUsers>
          ) : null}
          {showTable == 1 ? <TableDirecciones></TableDirecciones> : null}
          {showTable == 2 ? <TablePersons></TablePersons> : null}
          {showTable == 3 ? <TableDirecciones></TableDirecciones> : null}
          {showTable == 4 ? <TablePersons></TablePersons> : null}
          {showTable == 5 ? <TableDirecciones></TableDirecciones> : null}
          {showTable == 6 ? (
            <TableDirecciones
              userSel={userSel}
              setUserSel={setUserSel}
              dataUsers={dataUsers}
              dataPersons={dataPersons}
            ></TableDirecciones>
          ) : null}
          {/* <TableTelephones /> */}
        </div>
      </div>
    </div>
  );
};

export default Users;
