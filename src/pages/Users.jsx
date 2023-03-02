//ZAM: PAgina principal de usuarios, tiene un toogle para activar y desactivar la lista de usuarios rapida, tiene un renderizado condicional para las tablas del <NavigationBarUsers>
import React, { useState } from "react";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ToggleButton from "@mui/material/ToggleButton";
import { IconButton, Tooltip, TextField } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

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
  console.log("desde USERS:", dataCombinacion);
  const [showMenu, setShowMenu] = useState(true);
  const [showTable, setShowTable] = useState(0);
  const [userSel, setUserSel] = useState("");
  const [idSeleccionado, setIdSeleccionado] = useState();

  const [openModalAddUser, setOpenModalAddUser] = useState(false);

  const handleChangeMenu = (event, newValue) => {
    newValue = !newValue;
    setShowMenu(newValue);
  };

  const handleClickQuitarUsuario = () => {
    setUserSel("");
    setShowTable(0);
  };

  //DIALOG ADD USER ---------
  const handleClose = () => {
    setOpenModalAddUser(false);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  //--------------------------
  return (
    <div className="ml-1 ">
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

      <div className="horizontalComponents ml-1">
        {showMenu == true ? (
          <ListUsers
            userSel={userSel}
            setUserSel={setUserSel}
            dataCombinacion={dataCombinacion}
            setIdSeleccionado={setIdSeleccionado}
          ></ListUsers>
        ) : null}
        <div>
          {showTable == 0 ? (
            <TableUsers
              userSel={userSel}
              setUserSel={setUserSel}
              dataCombinacion={dataCombinacion}
              setIdSeleccionado={setIdSeleccionado}
              setOpenModalAddUser={setOpenModalAddUser}
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
          {openModalAddUser == true ? <AddUsuario></AddUsuario> : null}
        </div>
      </div>
      {/* CLICK ADD USER */}
      <Dialog
        open={openModalAddUser}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          AGREGAR NUEVO USUARIO
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Usuario"
            label="Usuario"
            type="Text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="Nombre"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="Apellido"
            label="Apellido"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            id="correo"
            label="E-mail"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleClose}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
