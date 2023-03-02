import React, { useState, useEffect } from "react";
import TablePersons from "../components/tables/TablePersons";
import NavigationBarPersons from "../components/bars/NavigationBarPersons";

export const Persons = () => {
  return (
    <div className="home-page">
      <NavigationBarPersons></NavigationBarPersons>
      <TablePersons />
    </div>
  );
};

export default Persons;
