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
import AddUser from "../components/AddUser";
import Persons from "../pages/Persons";
import Telephones from "../components/Telephones";
import Tabs from "../components/subcomponents/MyTabs";

const Navigation = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <NavLink to="/">Home |</NavLink>
            <NavLink to="/persons"> Personas |</NavLink>
            <NavLink to="/users"> Usuarios</NavLink>
          </ul>
          <hr />
        </nav>

        <Tabs />

        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/users" element={<Users />} />
          <Route path="/telephones" element={<Telephones />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
