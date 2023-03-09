import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green, red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export default function ButtonInteractive({
  hayError,
  handleGuardar,
  insertSuccess,
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();

  const buttonSx = {
    ...//click y se insertó correctamente

    (success && !hayError
      ? {
          bgcolor: green[500],
          "&:hover": {
            bgcolor: green[500],
          },
        }
      : { p: 0 }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        handleGuardar();
        setSuccess(true);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab
          disabled={insertSuccess}
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success && !hayError ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={70}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -7,
              zIndex: 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
}
