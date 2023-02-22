import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Users from "../components/tables/TableUsers";
import TablePersons from "../components/tables/TablePersons";
import PersonsUsers from "../components/tables/PersonsUsers";
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
