import axios from "axios";
import config from "../../config/config"

export function insertarUsuarioPersona(formData) {
    console.log(formData)
   
    //Insertar Persona------------------------------
    let personaInsertar = { "IdPersonaPK": 9999,
    "IdPersonaOK": "9999",
    "IdPersonaBK": "9999",
    "Nombre": formData.Nombre,
    "ApPaterno": formData.ApPaterno,
    "ApMaterno": formData.ApMaterno,
    "RFC": "",
    "CURP": "",
    "FechaNac": "",
    "IdGenPersonaOK": "5",
    "IdTipoGenPersonaOK": "2",
    "TipoPersona": "FISICA",
    "Sexo": "",
    "Alias": "",
    "cat_personas_telefonos": [],
    "cat_personas_dir_webs": [
    {
        "DesDirWeb": "Personal",
        "DireccionWeb": "fibarra@ittepic.edu.mx",
        "IdTipoGenDirWebOK": "4",
        "IdGenDirWebOK": "10",
        "TipoDirWeb": "CORREO",
        "Principal": "N",
        "detail_row": {
            "FechaReg": "2022-04-30T00:00:00.628Z",
            "UsuarioReg": "FIBARRAC",
            "FechaUltMod": "2022-04-30T00:00:00.628Z",
            "UsuarioMod": "FIBARRAC",
            "Activo": "S",
            "Borrado": "N"
        }
    }
    ],
    "cat_personas_domicilios": [],
    "detail_row": {
        "FechaReg": "2022-04-30T00:00:00.628Z",
        "UsuarioReg": "FIBARRAC",
        "FechaUltMod": "2023-03-07T10:37:10.355Z",
        "UsuarioMod": "FIBARRAC",
        "Activo": "S",
        "Borrado": "N"
    }}

  
  

    let URL = `${config.VITE_APP_HOST}:${config.VITE_APP_PORT}${config.VITE_API_URL}`;
    let URL1 = URL + "/persons/many-pwa";
    console.log(">>>> url personas: ", URL1)
    console.log(">>>> Persona Insertar: ", personaInsertar)
    axios.post(URL1, personaInsertar);

    //Insertar Usuario --------------------------------
    let usuarioInsertar ={
        "IdUsuarioPK": 9999,
        "IdUsuarioOK": "9999",
        "IdUsuarioBK": "9999",
        "IdPersonaPK": 9999,
        "IdPersonaOK": "9999",
        "IdPersonaBK": formData.IdPersonaBK,
        "Usuario": formData.Usuario,
        "Expira": "N",
        "Conectado": "N",
        "NumIntentos": 0,
        "Token": "",
        "cat_usuarios_expira_claves": [
        {
            "IdClavePK": 3,
            "IdClaveOK": "3",
            "IdClaveBK": "3",
            "Clave": "$2a$10$9NHEWzy9DxQ2v6ZiTQ8uGeZgR70AdaTpCCd58cjDwXO/SqvpXHFv6",
            "FechaExpiraIni": "2023-01-30T00:00:00.628Z",
            "FechaExpiraFin": "2023-12-31T00:00:00.628Z",
            "Actual": "S",
            "ClaveAutoSys": "N",
            "detail_row": {
                "FechaReg": "2023-03-08T00:00:00.628Z",
                "UsuarioReg": "FIBARRAC",
                "FechaUltMod": "2023-03-08T00:00:00.628Z",
                "UsuarioMod": "FIBARRAC",
                "Activo": "S",
                "Borrado": "N"
            }
        }
        ],
        "cat_usuarios_estatus": [
        {
            "IdTipoGenEstatusOK": "5",
            "IdGenEstatusOK": "26",
            "TipoEstatus": "ACTIVO",
            "Actual": "S",
            "Observacion": "",
            "detail_row": {
                "FechaReg": "2023-03-08T00:00:00.628Z",
                "UsuarioReg": "FIBARRAC"
            }
        }
        ],
        "cat_usuarios_roles":[
        {
            "IdInstitutoOK": "1001",
            "IdInstitutoBK": "1001",
            "IdNegocioOK": "1101",
            "IdNegocioBK": "1101",
            "IdRolOK": "0",
            "IdRolBK": "0",
            "Principal": "S",
            "Actual": "S",
            "cat_usuarios_roles_info_adicional": [],
            "cat_usuarios_roles_archivos": [
            {
                "DesArchivo": "Foto de Perfil",
                "RutaArchivo": "http://ccnayt.dnsalias.com:9090/Security/files/users/avatar/images/UserDefault.jpg",
                "IdTipoGenArchivoOK": "7",
                "IdGenArchivoOK": "19",
                "TipoArchivo": "IMAGEN",
                "IdTipoGenSeccionOK": "16",
                "IdGenSeccionOK": "39",
                "TipoSeccion": "FOTO DE PERFIL",
                "Secuencia": 10,
                "Principal": "S",
                "EstatusRepo": "",
                "UsuarioRegRepo": "FIBARRAC",
                "UsuarioModRepo": "FIBARRAC",
                "detail_row": {
                    "FechaReg": "2023-03-08T00:00:00.628Z",
                    "UsuarioReg": "FIBARRAC",
                    "FechaUltMod": "2023-03-08T00:00:00.628Z",
                    "UsuarioMod": "FIBARRAC",
                    "Activo": "S",
                    "Borrado": "N"
                }
            },
            {
                "DesArchivo": "FIRMA DEL USUARIO",
                "RutaArchivo": "http://ccnayt.dnsalias.com:9090/Security/files/users/signatures/FirmaDefault.png",
                "IdTipoGenArchivoOK": "7",
                "IdGenArchivoOK": "19",
                "TipoArchivo": "IMAGEN",
                "IdTipoGenSeccionOK": "16",
                "IdGenSeccionOK": "40",
                "TipoSeccion": "FIRMA",
                "Secuencia": 10,
                "Principal": "S",
                "EstatusRepo": "",
                "UsuarioRegRepo": "FIBARRAC",
                "UsuarioModRepo": "FIBARRAC",
                "detail_row": {
                    "FechaReg": "2023-03-08T00:00:00.628Z",
                    "UsuarioReg": "FIBARRAC",
                    "FechaUltMod": "2023-03-08T00:00:00.628Z",
                    "UsuarioMod": "FIBARRAC",
                    "Activo": "S",
                    "Borrado": "N"
                }
            }
            ],
            "detail_row": {
                "FechaReg": "2023-03-08T00:00:00.628Z",
                "UsuarioReg": "FIBARRAC",
                "FechaUltMod": "2023-03-08T00:00:00.628Z",
                "UsuarioMod": "FIBARRAC",
                "Activo": "S",
                "Borrado": "N"
            }
        }
        ],
        "detail_row": {
            "FechaReg": "2023-03-08T00:00:00.628Z",
            "UsuarioReg": "FIBARRAC",
            "FechaUltMod": "2023-03-08T00:00:00.628Z",
            "UsuarioMod": "FIBARRAC",
            "Activo": "S",
            "Borrado": "N"
        }
    }
 
    let URL2 = URL + "/users/many-pwa";
    console.log(">>>> usuario Insertar: ", usuarioInsertar)
    console.log(">>>> url usuarios: ", URL2)
    axios.post(URL2, usuarioInsertar);




    //   let dataArregloUser = [];

      //   let objectDataUser = {
      //     IdPersonaBK: formData.IdPersonaBK,
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
}

