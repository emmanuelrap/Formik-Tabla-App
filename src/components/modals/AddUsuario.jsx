import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import axios from "axios";
import "../../../src/styles.css";
import config from "../../../config/config";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Tooltip,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  IconButton,
  Box,
  Select,
  MenuItem,
  Alert,
  Checkbox,
  FormGroup,
  Fab,
  FormControlLabel,
} from "@mui/material/";
import ButtonInteractive from "../../../UI-MATERIAL/ButtonInteractive";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

const AddUsuario = ({ openModalAddUser, setOpenModalAddUser, isUpdate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hayError, setHayError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [errores, setError] = useState({
    usuario: "",
    idBK: "",
    password: "",
  });

  const { usuario, IdCidBKliente, password } = errores;
  const timer = useRef();

  const [formData, setFormData] = useState({
    IdCliente: "",
    IdNombre: "",
    IdApPaterno: "",
    IdApMaterno: "",
    Usuario: "",
    Telefono: "",
    Sexo: "",
    CalleNumero: "",

    IdCEDI: "1101",

    Alias: "",
    Password: "",
    Password2: "",
    TipoPersona: "",
    FechaNacimiento: "",
    Curp: "",
    Rfc: "",
    Expira: "",
  });

  const {
    IdCEDI,
    IdCliente,
    IdNombre,
    Usuario,
    Telefono,
    IdApPaterno,
    Sexo,
    Password,
    Password2,
    IdApMaterno,

    Alias,
    TipoPersona,
    FechaNacimiento,
    Curp,
    Rfc,
    Expira,
  } = formData;

  function mayus(e) {
    e.value = e.value.toUpperCase();
  }

  const handleOnChange = (e) => {
    if (e.target.name == "Rfc" || e.target.name == "Curp")
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.toUpperCase(),
      });
    else setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const esFormularioCorrecto = () => {
    setHayError(true);
  };

  const handleGuardar = () => {
    esFormularioCorrecto();

    if (hayError) {
      console.log("no hay error");
    } else {
      setError({ ...errores, ["usuario"]: "usuario repetido" });
      //No hay error, Inserta
      console.log("  hay Error");
      // if (!isUpdate) {
      //   let dataArregloUser = [];

      //   let objectDataUser = {
      //     IdCliente: formData.IdCliente,
      //     IdCEDI: formData.IdCEDI,
      //   };

      //   dataArregloUser.push(objectDataUser);

      //   delete formData.Password2;
      //   delete formData.Alias;
      //   delete formData.Password;
      //   delete formData.Password2;
      //   delete formData.TipoPersona;
      //   delete formData.FechaNacimiento;
      //   delete formData.Curp;
      //   delete formData.Rfc;
      //   delete formData.Expira;
      //   delete formData.IdCEDI;

      //   let dataArregloPersons = [];
      //   dataArregloPersons.push(formData);

      //   console.log(">> OBJECTO PERSONA CREADO: ", dataArregloPersons);
      //   let URL = `${config.VITE_APP_HOST}:${config.VITE_APP_PORT}${config.VITE_API_URL}`;
      //   let URL1 = URL + "/persons/many";
      //   await axios.post(URL1, dataArregloPersons);

      //   console.log(">> OBJECTO USER CREADO: ", dataArregloUser);
      //   let URL2 = URL + "/users/many";
      //   await axios.post(URL2, dataArregloUser);
      //   setOpenModalAddUser(false);
      // }
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpenModalAddUser(false);
  };

  return (
    <Dialog
      open={openModalAddUser}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      {!isUpdate ? (
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          AGREGAR NUEVO USUARIO
        </DialogTitle>
      ) : (
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          EDITAR USUARIO
        </DialogTitle>
      )}

      <Alert severity="error" hidden={!hayError}>
        ¡ERROR! — Hubo un problema con la operación realizada{" "}
      </Alert>

      <DialogContent dividers>
        <div className="horizontalComponents">
          <TextField
            autoFocus
            helperText={errores.usuario}
            error={errores.usuario == !""}
            label="Usuario*"
            type="text"
            name="Usuario"
            value={Usuario}
            onChange={handleOnChange}
            margin="dense"
            fullWidth
            variant="outlined"
            sx={{ mx: 2, width: "28ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            error={false}
            label="ID*"
            type="text"
            name="IdCliente"
            value={IdCliente}
            onChange={handleOnChange}
            margin="dense"
            fullWidth
            variant="outlined"
            sx={{ mx: 2, width: "28ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="">
          <TextField
            margin="dense"
            name="IdNombre"
            label="Nombre(s)*"
            type="text"
            fullWidth
            variant="outlined"
            value={IdNombre}
            onChange={handleOnChange}
            sx={{ mx: 2, width: "60ch" }}
          />

          <div className="horizontalComponents">
            <TextField
              margin="dense"
              onChange={handleOnChange}
              name="IdApPaterno"
              label="Apellido Paterno*"
              value={IdApPaterno}
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mx: 2, width: "28ch" }}
            />

            <TextField
              margin="dense"
              name="IdApMaterno"
              onChange={handleOnChange}
              label="Apellido Materno"
              type="text "
              fullWidth
              variant="outlined"
              value={IdApMaterno}
              sx={{ mx: 2, width: "28ch" }}
            />
          </div>

          <Box
            component="form"
            hidden={isUpdate}
            sx={{
              "& > :not(style)": { my: 3 },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl sx={{ mx: 1, width: "25ch" }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-password"
                sx={{ mx: 3, width: "25ch" }}
              >
                Contraseña*
              </InputLabel>
              <Input
                value={Password}
                name="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleOnChange}
                sx={{ mx: 3, width: "25ch" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl sx={{ mx: 3, width: "25ch" }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-password"
                sx={{ mx: 3, width: "25ch" }}
              >
                Confirmar Contraseña*
              </InputLabel>
              <Input
                name="Password2"
                type={showPassword ? "text" : "password"}
                onChange={handleOnChange}
                variant="outlined"
                value={Password2}
                sx={{ mx: 3, width: "25ch" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <div className="horizontalComponents">
            <TextField
              hidden={!isUpdate}
              margin="dense"
              name="Alias"
              value={Alias}
              onChange={handleOnChange}
              label="Alias"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mx: 2, width: "28ch" }}
            />
          </div>
          <div className="horizontalComponents">
            <TextField
              hidden={!isUpdate}
              margin="dense"
              name="Rfc"
              value={Rfc}
              onChange={handleOnChange}
              label="RFC"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mx: 2, width: "28ch" }}
            />
            <TextField
              hidden={!isUpdate}
              margin="dense"
              name="Curp"
              value={Curp}
              onChange={handleOnChange}
              label="CURP"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mx: 2, width: "27ch" }}
            />
          </div>

          <div className="horizontalComponents">
            <Box hidden={!isUpdate} sx={{ mx: 2, width: "28ch" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Fecha de Nacimiento" />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
            <FormControl
              sx={{ m: 1, mx: 2, minWidth: "12ch" }}
              hidden={!isUpdate}
            >
              <InputLabel id="demo-simple-select-helper-label-2">
                Tipo
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label-2"
                id="demo-simple-select-helper-2"
                value={TipoPersona}
                label="Tipo"
                name="TipoPersona"
                onChange={handleOnChange}
              >
                <MenuItem value={"fisica"}>Fisica</MenuItem>
                <MenuItem value={"moral"}>Moral</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              sx={{ m: 1, mx: 1, minWidth: "12ch" }}
              hidden={!isUpdate}
            >
              <InputLabel id="demo-simple-select-helper-label-3">
                Sexo
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label-3"
                id="demo-simple-select-helper-3"
                value={Sexo}
                label="Sexo"
                name="Sexo"
                onChange={handleOnChange}
              >
                <MenuItem value={"H"}>Hombre</MenuItem>
                <MenuItem value={"M"}>Mujer</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="horizontalComponents">
            <FormGroup>
              <FormControlLabel
                hidden={!isUpdate}
                control={<Checkbox />}
                label="¿La contraseña Expira?"
                sx={{ m: 1, minWidth: "28ch" }}
              />
            </FormGroup>
          </div>
        </div>
      </DialogContent>
      <DialogActions sx={{ my: 2, mx: 2 }}>
        <Button autoFocus onClick={handleClose}>
          Cancelar
        </Button>
        <div className="rounded-circle" onClick={handleGuardar}>
          <ButtonInteractive hayError={hayError}></ButtonInteractive>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default AddUsuario;
