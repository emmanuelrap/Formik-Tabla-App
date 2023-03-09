import React, { useState } from "react";

import { IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import LockResetIcon from "@mui/icons-material/LockReset";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Box from "@mui/material/Box";

const ButtonGroupTableUser = ({
  userSel,
  setOpenModalAddUser,
  setIsUpdate,
}) => {
  const [alignment, setAlignment] = useState();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClickAddUser = (event) => {
    setOpenModalAddUser(true);
    setIsUpdate(false);
  };
  const handleClickUpdateUser = (event) => {
    console.log("click en update");
    setOpenModalAddUser(true);
    setIsUpdate(true);
  };

  const handleClickDetailsUser = (event) => {
    console.log("click en Detalles de Usuario");
  };
  const handleClickDeleteUser = (event) => {
    console.log("click en eliminar Usuario");
  };
  const handleClickSignUser = (event) => {
    console.log("click en  Firma");
  };
  const handleClickImageUser = (event) => {
    console.log("click en Cambiar Imagen");
  };
  const handleClickPassordUser = (event) => {
    console.log("click en Password");
  };

  return (
    <div className="horizontalComponents p-1">
      <Box
        sx={{
          m: 0,
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Tooltip title="Agregar">
          <IconButton onClick={handleClickAddUser}>
            <AddCircleIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {userSel === "" ? (
        <>
          <Box
            sx={{
              m: 0,
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
              "& svg": {
                m: 1.5,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <Tooltip title="Detalles">
              <span>
                <IconButton disabled={true}>
                  <InfoIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Editar">
              <span>
                <IconButton disabled={true}>
                  <EditIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Eliminar">
              <span>
                <IconButton disabled={true}>
                  <DeleteIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
          <Box
            sx={{
              m: 0,
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
              "& svg": {
                m: 1.5,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <Tooltip title="Firmar">
              <span>
                <IconButton disabled={true}>
                  <AssignmentIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Cambiar Imagen">
              <span>
                <IconButton disabled={true}>
                  <AccountBoxIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Cambiar Contraseña">
              <span>
                <IconButton disabled={true}>
                  <LockResetIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              m: 0,
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
              "& svg": {
                m: 1.5,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <Tooltip title="Detalles">
              <span>
                <IconButton disabled={false} onClick={handleClickDetailsUser}>
                  <InfoIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Editar">
              <span>
                <IconButton disabled={false} onClick={handleClickUpdateUser}>
                  <EditIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Eliminar">
              <span>
                <IconButton disabled={false} onClick={handleClickDeleteUser}>
                  <DeleteIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
          <Box
            sx={{
              m: 0,
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "background.paper",
              color: "text.secondary",
              "& svg": {
                m: 1.5,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <Tooltip title="Firmar">
              <span>
                <IconButton disabled={false} onClick={handleClickSignUser}>
                  <AssignmentIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Cambiar Imagen">
              <span>
                <IconButton disabled={false} onClick={handleClickImageUser}>
                  <AccountBoxIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Cambiar Contraseña">
              <span>
                <IconButton disabled={false} onClick={handleClickPassordUser}>
                  <LockResetIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
        </>
      )}
    </div>
  );
};

export default ButtonGroupTableUser;
