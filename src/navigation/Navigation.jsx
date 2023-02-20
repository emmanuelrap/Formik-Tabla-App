import { SwipeableDrawer } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

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

const Navigation = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <NavLink to="/">Home |</NavLink>
            <NavLink to="/persons"> Personas |</NavLink>
            <NavLink to="/users"> Usuarios |</NavLink>
            <NavLink to="/roles"> Roles | </NavLink>

            <NavLink to="/matchpersonsusers"> Personas y Usuarios | </NavLink>
          </ul>
          <hr />
        </nav>

        {/* <NavigationBarUsers /> */}
        {/* <NavigationBarRoles /> */}

        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/matchpersonsusers" element={<PersonsUsers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/telephones" element={<Telephones />} />
          <Route path="/" element={<Home />} />

          <Route path="/tabletelephones" element={<TableTelephones />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
