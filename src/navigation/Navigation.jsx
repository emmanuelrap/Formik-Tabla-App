import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import { useState } from "react";

import Home from "../pages/Home";
import Users from "../pages/Users";
import Roles from "../pages/Roles";
import AddUser from "../components/AddUser";
import Persons from "../pages/Persons";
import Telephones from "../components/Telephones";
import TableButtons from "../components/TableButtons";
import PersonsUsers from "../components/tables/PersonsUsers";
import NavigationBarUsers from "../components/bars/NavigationBarUsers";
import NavigationBarRoles from "../components/bars/NavigationBarRoles";
import TableTelephones from "../components/tables/TableTelephones";

import MyAppBar from "../components/bars/MyAppBar";
import TableUsers2 from "../components/tables/TableUsers2";
var pagina = "HOME";

const Navigation = () => {
  return (
    <div>
      <Router>
        <MyAppBar />

        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/matchpersonsusers" element={<PersonsUsers />} />
          <Route path="/users" element={<Users />} />

          <Route path="/telephones" element={<Telephones />} />
          <Route path="/" element={<Home />} />

          <Route path="/pruebas" element={<AddUser></AddUser>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
