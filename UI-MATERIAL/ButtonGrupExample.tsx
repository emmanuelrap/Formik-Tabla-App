import React, { useState } from "react";

import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from '@mui/icons-material/Info';


const ButtonGrupExample = () => {
  const [alignment, setAlignment] = useState()
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
    color="primary"
    value={alignment}
    exclusive
    onChange={handleChange}
    aria-label="Platform">
    <ToggleButton value="detalle"><InfoIcon /></ToggleButton>
    <ToggleButton value="agregar"><AddCircleIcon /></ToggleButton>
    <ToggleButton value="editar"><EditIcon /></ToggleButton>
    <ToggleButton value="eliminar" color="error"><DeleteIcon /></ToggleButton>
  </ToggleButtonGroup>
  )
}

export default ButtonGrupExample