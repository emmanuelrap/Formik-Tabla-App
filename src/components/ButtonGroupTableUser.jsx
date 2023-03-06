import React, { useState } from "react";

import { IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import LockResetIcon from "@mui/icons-material/LockReset";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AddUsuario from "./modals/AddUsuario";

const ButtonGroupTableUser = ({ userSel, setOpenModalAddUser }) => {
  const [alignment, setAlignment] = useState();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleClickAddUser = (event) => {
    setOpenModalAddUser(true);
  };

  return (
    <div className="horizontalComponents p-1">
      <Box
        sx={{
          m: 0.1,
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
              m: 0.1,
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
              m: 0.1,
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
              m: 0.1,
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
                <IconButton disabled={false}>
                  <InfoIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Editar">
              <span>
                <IconButton disabled={false}>
                  <EditIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Eliminar">
              <span>
                <IconButton disabled={false}>
                  <DeleteIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Box>
          <Box
            sx={{
              m: 0.1,
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
                <IconButton disabled={false}>
                  <AssignmentIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Cambiar Imagen">
              <span>
                <IconButton disabled={false}>
                  <AccountBoxIcon />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip title="Cambiar Contraseña">
              <span>
                <IconButton disabled={false}>
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
