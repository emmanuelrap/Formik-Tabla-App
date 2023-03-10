export async function combinarArregloDeObjetos(arreglo1,arreglo2){
    if(arreglo1.length>1){
      await arreglo2.forEach((el) => {
        try {
          const index = arreglo1
            .map((e) => e.IdPersonaOK === el.IdPersonaOK)
            .indexOf(true); // Obtener el índice del elemento para reemplazarlo
          Object.keys(el).forEach((entry) => {
            arreglo1[index][entry] = el[entry];
          });
        } catch (e) {
          console.log(
            "cache un error: e.IdPersonaOK",
            e.IdPersonaOK,
            "el.IdPersonaOK",
            el.IdPersonaOK
          );
        }
      });
  
    //Agregar un id Consecutivo
    await arreglo1.map((u, index) => {
      u.idConsecutivo = index;
    });

    console.log("objeto Combinado con ID desde JS:", arreglo1);
    } else{
    //Solo mandaron un objeto(es una insercion y no quiero volver a combinar todo,)
     let combinacion = Object.assign(arreglo1, arreglo2);
     arreglo1=combinacion
    }



    return arreglo1
  }