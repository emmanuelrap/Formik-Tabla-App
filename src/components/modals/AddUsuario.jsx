import React, { useState, useRef } from "react";
import { insertarUsuarioPersona } from "../../helpers/insertarUsuarioPersona";

import Draggable from "react-draggable";

import "../../../src/styles.css";

import LoadingButton from "@mui/lab/LoadingButton";

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

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
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
  const [loading, setLoading] = useState(false);
  const [insertSuccess, setMensajeExitoAlert] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [hayErrorId, setHayErrorId] = useState(false);

  const timer = useRef();

  const [formData, setFormData] = useState({
    IdPersonaBK: "",
    Nombre: "",
    ApPaterno: "",
    ApMaterno: "",
    Usuario: "",
    Telefono: "",
    Sexo: "",
    CalleNumero: "",

    IdCEDI: "1101",

    Alias: "",
    Password: "",
    Password2: "",
    TipoPersona: "",
    FechaNac: "",
    Curp: "",
    Rfc: "",
    Expira: "",
  });

  const {
    IdCEDI,
    IdPersonaBK,
    Nombre,
    Usuario,
    Telefono,
    ApPaterno,
    Sexo,
    Password,
    Password2,
    ApMaterno,

    Alias,
    TipoPersona,
    FechaNac,
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
    //Verificamos campos obligatorios
    if (
      formData.Usuario == "" ||
      FormData.Nombre == "" ||
      formData.ApPaterno == "" ||
      formData.Password == "" ||
      formData.Password2 == ""
    ) {
      setMensajeErrorAlert("Llenar los campos obligatorios");
      return false;
    }

    //Validamos las contraseñas

    if (formData.Password != formData.Password2) {
      setMensajeErrorAlert("Contraseñas no coinciden");
      return false;
    }

    //verificamos que el usuario no exista
    let bandera = 0;
    console.log(dataCombinacion);
    dataCombinacion.map((e) => {
      if (
        formData.Usuario == e.Usuario ||
        formData.IdPersonaBK == e.IdPersonaBK
      ) {
        if (formData.Usuario == e.Usuario) bandera = 1;
        if (formData.IdPersonaBK == e.IdPersonaBK) bandera = 2;
      }
    });
    if (bandera == 1) {
      bandera = false;
      setMensajeErrorAlert("Usuario ya existe");
      return false;
    }

    if (bandera == 2) {
      bandera = false;
      setMensajeErrorAlert("ID ya existe");
      return false;
    }

    return true;

    //verificamos que el idBK no exista
  };

  const handleClickButtonGuardar = async () => {
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setLoading(false);
      agregarUsuario();
    }, 1000);
  };
  const agregarUsuario = async () => {
    setHayErrorId(false);
    setMensajeErrorAlert("");

    let res = esFormularioCorrecto();

    if (res) {
      console.log("no hay error en el formulario");
      if (!isUpdate) {
        insertarUsuarioPersona(formData);
        setMensajeExitoAlert(true);
      }
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
            error={false}
            label="ID"
            type="text"
            name="IdPersonaBK"
            value={IdPersonaBK}
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
            name="Nombre"
            label="Nombre(s)*"
            type="text"
            fullWidth
            variant="outlined"
            value={Nombre}
            onChange={handleOnChange}
            disabled={insertSuccess}
            sx={{ mx: 2, width: "60ch" }}
          />

          <div className="horizontalComponents">
            <TextField
              margin="dense"
              onChange={handleOnChange}
              name="ApPaterno"
              label="Apellido Paterno*"
              value={ApPaterno}
              disabled={insertSuccess}
              type="text"
              fullWidth
              variant="outlined"
              sx={{ mx: 2, width: "28ch" }}
            />

            <TextField
              margin="dense"
              name="ApMaterno"
              onChange={handleOnChange}
              disabled={insertSuccess}
              label="Apellido Materno"
              type="text "
              fullWidth
              variant="outlined"
              value={ApMaterno}
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
      <DialogActions sx={{ width: "auto" }}>
        <Box m="auto">
          <Alert severity="error" hidden={mensajeErrorAlert == ""}>
            ¡ERROR! ─ {mensajeErrorAlert}
          </Alert>
          <Alert severity="success" hidden={insertSuccess == false}>
            ¡EXITO! ─ Operacion Exitosa
          </Alert>
        </Box>

        <LoadingButton
          sx={{ p: 1 }}
          color="secondary"
          loadingPosition="start"
          startIcon={<CloseIcon />}
          variant="outlined"
          onClick={handleClose}
        >
          <span>Cerrar</span>
        </LoadingButton>
        <LoadingButton
          sx={{ p: 1 }}
          disabled={insertSuccess}
          color="primary"
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          onClick={handleClickButtonGuardar}
        >
          <span>Guardar</span>
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddUsuario;
