import React from "react";
import "../../styles.css";

import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ButtonGroupTable from "../ButtonGroupTable";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const ActionTableBar = () => {
  return (
    <div className="horizontalComponents">
      <ButtonGroupTable></ButtonGroupTable>
    </div>
  );
};

export default ActionTableBar;
