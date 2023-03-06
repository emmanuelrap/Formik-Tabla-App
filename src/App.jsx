//Aqui se carga la data y se manda mediante props a todos los demas Componentes
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./navigation/Navigation";

export default function App() {
  const [dataCombinacion, setDataCombinacion] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/users/`
    );

    const result2 = await axios.get(
      `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
    );

    var users = await result.data;
    var personas = await result2.data;

    /////////////////////////////////////////////

    // const nuevoUsuario = users.map((u) => {
    //   const nuevo = {
    //     ...u, // Todo lo que tenía el usuario mas lo siguiente de persona:
    //   };
    //   // Borrar IdUsuarioOK en el nuevo.
    //   delete nuevo.detail_row;
    //   delete nuevo._id;
    //   delete nuevo.cat_usuarios_roles_archivos;
    //   delete nuevo.cat_usuarios_roles;
    //   delete nuevo.cat_usuarios_estatus;
    //   return nuevo;
    // });

    await personas.forEach((el) => {
      try {
        const index = users
          .map((e) => e.IdPersonaOK === el.IdPersonaOK)
          .indexOf(true); // Obtener el índice del elemento para reemplazarlo
        Object.keys(el).forEach((entry) => {
          users[index][entry] = el[entry];
        });
      } catch (e) {
        console.log("cache un error");
      }
    });

    //Agregar un id Consecutivo
    await users.map((u, index) => {
      u.idConsecutivo = index;
    });
    // console.log("objeto Combinado con ID:", users);
    setDataCombinacion(users);
  };

  return (
    <div>
      <Navigation dataCombinacion={dataCombinacion} />
    </div>
  );
}
