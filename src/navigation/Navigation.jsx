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
import PersonsUsers from "../components/tables/PersonsUsers";
import MyAppBar from "../components/bars/MyAppBar";
import ReactTableFilterCustom from "../../UI-MATERIAL/ReactTableFilterCustom";
import ReactTableFilter from "../../UI-MATERIAL/ReactTableFilter";

const Navigation = ({ dataCombinacion }) => {
  console.log("desde navegation:", dataCombinacion);
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
            element={<Users dataCombinacion={dataCombinacion} />}
          />

          <Route path="/telephones" element={<Telephones />} />
          <Route path="/" element={<Home />} />

          <Route
            path="/pruebas"
            element={
              <ReactTableFilterCustom dataCombinacion={dataCombinacion} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
