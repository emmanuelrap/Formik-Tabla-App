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
import TableUsers from "../components/tables/TableUsers";
import TableMaterial from "../../pruebas/TableMaterial";
import TableUserTest from "../../pruebas/TableUserTest";

const Navigation = ({ dataUsers, dataPersons, dataUsersPersons }) => {
  console.log("Desde NAVIGATION:", dataUsersPersons);
  return (
    <div>
      <Router>
        <MyAppBar />

        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/matchpersonsusers" element={<PersonsUsers />} />
          <Route
            path="/users"
            element={
              <Users
                dataUsers={dataUsers}
                dataPersons={dataPersons}
                dataUsersPersons={dataUsersPersons}
              />
            }
          />

          <Route path="/telephones" element={<Telephones />} />
          <Route path="/" element={<Home />} />

          <Route path="/pruebas" element={<TableUserTest />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
