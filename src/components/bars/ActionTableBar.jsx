import React from "react";

import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import Icon from "@mui/material/Icon";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

const ActionTableBar = () => {
  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<AddCircleIcon />}>
        Nuevo
      </Button>{" "}
      <Button variant="contained" color="primary" startIcon={<EditIcon />}>
        Modificar
      </Button>{" "}
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Eliminar
      </Button>
    </div>
  );
};

export default ActionTableBar;
