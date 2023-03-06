# DEPENDENCIAS

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @fontsource/roboto
npm install @mui/styles
npm install @mui/icons-material
npm i @material-ui/core

npm i bootstrap
npm i --save bootstrap @popperjs/core

npm install axios mongoose

npm i material-react-table @mui/material @mui/icons-material @emotion/react @emotion/styled

npm install @mui/x-date-pickers
npm install dayjs

COMPONENTES

# ###### ERRORES

UseHistory:
npm run dev
En el ruteo v6 cambia, ahora es UseNavigate y la const por convencion es Navigate

UI-Material:
[si] import { green } from "@mui/material/colors";
[si] @mui/icons-material/Adb
[no] import { green } from '@material-ui/core/colors';

# HOME

    1. Carga las personas
    2. Carga los usuarios
    3. Ejecuta matchPersonsUsers que crea un objeto para llenar los       campos de la tabla con el match de los ID de personas y usuarios
    4. Retorna una tabla con el mapeo de este objeto

/////////////// DATA /////////////////
var personas = [
{
nombre: "Carlos",
apellidos: "Zambrano",
edad: 25,
},
{
nombre: "Ana",
apellidos: "Villarreal",
edad: 30,
},
];

    var libros = [
      {
        titulo: "introduccion a java",
        paginas: 300,
        autor: "Carlos",
      },
      {
        titulo: "programacion net",
        paginas: 200,
        autor: "Ana",
      },
      {
        titulo: "React FULL",
        paginas: 200,
        autor: "Carlos",
      },
    ];

/////////////MOSTRAR DATA ////////////////////

    var resultado = libros.map(function(libro) {

            var otraPersona = personas.filter(function(p) {

              return p.nombre == libro.autor;
            })[0];

            return {
              nombre: otraPersona.nombre,
              titulo: libro.titulo,
              paginas: libro.paginas,
              apellidos: otraPersona.apellidos
            }
          });

        //   console.log(resultado);
          objectTable = resultado;

          objectTable.map(function(element){
            console.log(element)
          })

///////////////////////////////////////////////////
