import React from "react";
import NavigationBarUsers from "../components/bars/NavigationBarUsers";
import TableTelephones from "../components/tables/TableTelephones";
import TableUsers from "../components/tables/TableUsers";
import "../styles.css";

const Users = () => {
  return (
    <div>
      <NavigationBarUsers />

      <div className="horizontalComponents ml-1">
        <TableUsers />
        <TableTelephones />
      </div>
    </div>
  );
};

export default Users;
