import React, { useState } from "react";
import BackupIcon from "@mui/icons-material/Backup";
import { Button, IconButton } from "@mui/material";
import { modifyPdf } from "../src/helpers/modificarPDF";

const PaginaPDF = () => {
  const [subioPDF, setSubioPDF] = useState(false);
  const handleClick = () => {
    console.log("CLIC");
    modifyPdf();
  };
  return (
    <>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        onClick={handleClick}
      >
        <input hidden accept="image/*" type="file" />
        <BackupIcon />
      </IconButton>
      <Button disabled={!subioPDF} onClick={handleClick}>
        CANCELAR PDF
      </Button>
    </>
  );
};

export default PaginaPDF;
