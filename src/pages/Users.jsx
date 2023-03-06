//ZAM: PAgina principal de usuarios, tiene un toogle para activar y desactivar la lista de usuarios rapida, tiene un renderizado condicional para las tablas del <NavigationBarUsers>
import React, { useState } from "react";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ToggleButton from "@mui/material/ToggleButton";
import { IconButton, Tooltip, TextField } from "@mui/material";

import "../styles.css";
import NavigationBarUsers from "../components/bars/NavigationBarUsers";
import TableUsers from "../components/tables/TableUsers";
import TablePersons from "../components/tables/TablePersons";
import TableRoles from "../components/tables/TableRoles";
import ListUsers from "../components/tables/ListUsers";
import DeleteIcon from "@mui/icons-material/Delete";
import TableDirecciones from "../components/tables/TableDirecciones";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableEstatus from "../components/tables/TableEstatus";
import TableProcesos from "../components/tables/TableProcesos";
import TableTelefonos from "../components/tables/TableTelefonos";
import TableDomicilios from "../components/tables/TableDomicilios";
import AddUsuario from "../components/modals/AddUsuario";

const Users = ({ dataCombinacion }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [showTable, setShowTable] = useState(0);
  const [userSel, setUserSel] = useState("");
  const [idSeleccionado, setIdSeleccionado] = useState();

  const [openModalAddUser, setOpenModalAddUser] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleChangeMenu = (event, newValue) => {
    newValue = !newValue;
    setShowMenu(newValue);
  };

  const handleClickQuitarUsuario = () => {
    setUserSel("");
    setShowTable(0);
  };

  return (
    <div className="ml-1 ">
      {/* BARRA DE PESTAÑAS */}
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
                <AccountCircleIcon /> {userSel}
              </IconButton>
            </>
          )}
        </h3>
      </div>

      {/* LISTA DE USUARIOS QUE SE MUESTRA O SE OCULTA */}
      <div className="horizontalComponents ml-1">
        {showMenu == true ? (
          <ListUsers
            userSel={userSel}
            setUserSel={setUserSel}
            dataCombinacion={dataCombinacion}
            setIdSeleccionado={setIdSeleccionado}
          ></ListUsers>
        ) : null}

        {/* TABLAS QUE CAMBIAN RESPECTO A LAS PESTAÑAS */}
        <div>
          {showTable == 0 ? (
            <TableUsers
              userSel={userSel}
              setUserSel={setUserSel}
              dataCombinacion={dataCombinacion}
              setIdSeleccionado={setIdSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
              setIsUpdate={setIsUpdate}
            ></TableUsers>
          ) : null}
          {showTable == 1 ? (
            <TableEstatus
              dataCombinacion={dataCombinacion}
              idSeleccionado={idSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
            ></TableEstatus>
          ) : null}
          {showTable == 2 ? (
            <TableRoles
              dataCombinacion={dataCombinacion}
              idSeleccionado={idSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
            ></TableRoles>
          ) : null}
          {showTable == 3 ? (
            <TableRoles
              dataCombinacion={dataCombinacion}
              idSeleccionado={idSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
            ></TableRoles>
          ) : null}
          {showTable == 4 ? (
            <TableProcesos
              dataCombinacion={dataCombinacion}
              idSeleccionado={idSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
            ></TableProcesos>
          ) : null}
          {showTable == 5 ? (
            <TableTelefonos
              dataCombinacion={dataCombinacion}
              idSeleccionado={idSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
            ></TableTelefonos>
          ) : null}
          {showTable == 6 ? (
            <TableDirecciones
              dataCombinacion={dataCombinacion}
              idSeleccionado={idSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
            ></TableDirecciones>
          ) : null}
          {showTable == 7 ? (
            <TableDomicilios
              dataCombinacion={dataCombinacion}
              idSeleccionado={idSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
            ></TableDomicilios>
          ) : null}

          {/* CLICK en el boton de Agregar Usuario */}
          {openModalAddUser == true ? (
            <AddUsuario
              openModalAddUser={openModalAddUser}
              setOpenModalAddUser={setOpenModalAddUser}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            ></AddUsuario>
          ) : null}

          {/* CLICK en el boton de Modificar Usuario */}
          {isUpdate == true ? (
            <AddUsuario
              openModalAddUser={openModalAddUser}
              setOpenModalAddUser={setOpenModalAddUser}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            ></AddUsuario>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Users;
