import React, { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const ButtonGroupTable = () => {
  const [alignment, setAlignment] = useState();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="border border-primary rounded m-1 ">
      <Tooltip title="Agregar">
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Consultar">
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
    </div>
  );
};

export default ButtonGroupTable;
