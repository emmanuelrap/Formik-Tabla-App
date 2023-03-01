import React, { useState } from "react";

import { IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const ButtonGroupTable = ({ userSel }) => {
  const [alignment, setAlignment] = useState();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  console.log("userSel", userSel);
  return (
    <div className="horizontalComponents p-1">
      {userSel === "" ? (
        <Box
          sx={{
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
            <IconButton>
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Tooltip title="Detalles">
            <IconButton disabled={true}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Editar" disabled={true}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar">
            <IconButton disabled={true}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Tooltip title="Firmar">
            <IconButton disabled={true}>
              <AssignmentIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cambiar Imagen">
            <IconButton disabled={true}>
              <AccountBoxIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Box
          sx={{
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
            <IconButton>
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Tooltip title="Detalles">
            <IconButton disabled={false}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Editar" disabled={false}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar">
            <IconButton disabled={false}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Tooltip title="Firmar">
            <IconButton disabled={false}>
              <AssignmentIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cambiar Imagen">
            <IconButton disabled={false}>
              <AccountBoxIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </div>
  );
};

export default ButtonGroupTable;
