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
