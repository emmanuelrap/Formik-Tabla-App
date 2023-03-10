import axios from "axios";
import {combinarArregloDeObjetos} from "./combinarArreglosDeObjetos"

async function getUsers () {
  let result = await axios.get(
    `http://ccnayt.dnsalias.com:9095/api/v1/users/`
  );
  return result.data
}

async function getPersons () {
  let result = await axios.get(
    `http://ccnayt.dnsalias.com:9095/api/v1/persons/`
  );
  return result.data
}

export async function getUsersPersons () {
    var users = await getUsers();
    var personas = await getPersons();

    
    console.log("USUARIOS, ",users)
    console.log("PERSONAS, ",personas)

    users = await combinarArregloDeObjetos(users,personas)

    return users
  };

  