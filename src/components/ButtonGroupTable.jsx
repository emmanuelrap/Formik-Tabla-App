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
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Editar">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
};

export default ButtonGroupTable;
