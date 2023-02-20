import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const TableButtons = () => {
  return (
    <div>
      <button>Agregar</button>
      <button>Borrar</button>
      <button>Modificar</button>
      <button>Eliminae</button>
    </div>
  );
};

export default TableButtons;
