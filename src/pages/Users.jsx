import React, { useState } from "react";
import NavigationBarUsers from "../components/bars/NavigationBarUsers";
import TableTelephones from "../components/tables/TableTelephones";
import TableUsers from "../components/tables/TableUsers";
import "../styles.css";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ToggleButton from "@mui/material/ToggleButton";
import "../styles.css";

const Users = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <div className="horizontalComponents">
        <ToggleButton value="lista">
          <ViewHeadlineIcon />
        </ToggleButton>
        <NavigationBarUsers />
      </div>

      <div className="horizontalComponents ml-1">
        {showMenu == true ? <TableUsers></TableUsers> : null}
        <div className="border border-primary rounded m-2 p-2">
          {" "}
          <h2 className="bg-info text-center rounded">TELEFONOS de FIBARRAC</h2>
          <TableTelephones />
        </div>
      </div>
    </div>
  );
};

export default Users;
