import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const NavigationBarUsers = ({
  showTable,
  setShowTable,
  userSel,
  setUserSel,
}) => {
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setShowTable(newValue);
  };

  return (
    <div className="border border-primary rounded m-1">
      {userSel == "" ? (
        <Tabs
          value={showTable}
          onChange={handleChange}
          aria-label="icon tabs example"
        >
          <Tab icon={<Diversity3Icon />} />
          <Tab icon={"Correos"} disabled={true} />
          <Tab icon={"Telefonos"} disabled={true} />
          <Tab label="Estatus" disabled={true} />
          <Tab label="Claves" disabled={true} />
          <Tab label="Roles" disabled={true} />
          <Tab label="Procesos" disabled={true} />
          <Tab label="Domicilios" disabled={true} />
        </Tabs>
      ) : (
        <Tabs
          value={showTable}
          onChange={handleChange}
          aria-label="icon tabs example"
        >
          <Tab icon={<Diversity3Icon />} />
          <Tab icon={"Correos"} />
          <Tab icon={"Telefonos"} />
          <Tab label="Estatus" />
          <Tab label="Claves" />
          <Tab label="Roles" />
          <Tab label="Procesos" />
          <Tab label="Domicilios" />
        </Tabs>
      )}
    </div>
  );
};

export default NavigationBarUsers;
