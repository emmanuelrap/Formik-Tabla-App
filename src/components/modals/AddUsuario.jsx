import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import axios from "axios";
import "../../../src/styles.css";
import config from "../../../config/config";
import swal from "sweetalert";
import { sizing } from "@mui/system";

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
import CloseIcon from "@mui/icons-material/Close";
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

const AddUsuario = ({
  openModalAddUser,
  setOpenModalAddUser,
  isUpdate,
  dataCombinacion,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [mensajeErrorAlert, setMensajeErrorAlert] = useState("");
  const [insertSuccess, setMensajeExitoAlert] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [hayErrorUsuario, setHayErrorUsuario] = useState(false);
  const [hayErrorId, setHayErrorId] = useState(false);

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
    //Validamos las contraseñas
    // console.log("formDataA>>", formData.Usuario);
    // console.log("dataCombinada>>", dataCombinacion[0].Usuario);

    if (formData.Password != formData.Password2) {
      setMensajeErrorAlert("Las contraseñas no coinciden");
      return false;
    }

    //verificamos que el usuario no exista
    let bandera = false;
    dataCombinacion.map((e) => {
      if (formData.Usuario == e.Usuario) {
        console.log("Si encontro uno igual");
        bandera = true;
      }
    });
    if (bandera) {
      setMensajeErrorAlert("El usuario ya existe");
      setHayErrorUsuario(true);

      bandera = false;
      return false;
    }

    console.log("llegó al return true");
    return true;

    //verificamos que el idBK no exista
  };

  const handleGuardar = async () => {
    setHayErrorId(false);
    setHayErrorUsuario(false);
    setMensajeErrorAlert("");

    let res = esFormularioCorrecto();

    if (res) {
      console.log("no hay error en el formulario");
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

      //}
      // swal("Exito!", "Usuario Agregado Correctamente", "success");
      // setOpenModalAddUser(false);
      setMensajeExitoAlert(true);
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

      <DialogContent dividers>
        <div className="horizontalComponents">
          <TextField
            disabled={insertSuccess}
            autoFocus
            error={hayErrorUsuario}
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
            disabled={insertSuccess}
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
            disabled={insertSuccess}
            sx={{ mx: 2, width: "60ch" }}
          />

          <div className="horizontalComponents">
            <TextField
              margin="dense"
              onChange={handleOnChange}
              name="IdApPaterno"
              label="Apellido Paterno*"
              value={IdApPaterno}
              disabled={insertSuccess}
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mx: 2, width: "28ch" }}
            />

            <TextField
              margin="dense"
              name="IdApMaterno"
              onChange={handleOnChange}
              disabled={insertSuccess}
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
            <FormControl
              sx={{ mx: 1, width: "25ch" }}
              variant="standard"
              disabled={insertSuccess}
            >
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

            <FormControl
              sx={{ mx: 3, width: "25ch" }}
              variant="standard"
              disabled={insertSuccess}
            >
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

          <div className="horizontalComponents ">
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
      <DialogActions sx={{ my: 1, mx: 1, width: "auto" }}>
        <Alert severity="error" hidden={mensajeErrorAlert == ""} sx={{ mx: 5 }}>
          ¡ERROR! — {mensajeErrorAlert}
        </Alert>
        <Alert
          severity="success"
          hidden={insertSuccess == false}
          sx={{ mx: 5 }}
        >
          ¡Operacion Exitosa!
        </Alert>
        <Fab autoFocus onClick={handleClose} color="error" sx={{ mx: 1, p: 0 }}>
          <CloseIcon></CloseIcon>
        </Fab>

        <ButtonInteractive
          insertSuccess={insertSuccess}
          hayError={mensajeErrorAlert !== ""}
          handleGuardar={handleGuardar}
        ></ButtonInteractive>
      </DialogActions>
    </Dialog>
  );
};

export default AddUsuario;
