import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const NavigationBarUsers = ({ tables, setTable }) => {
  // const [tables, setTable] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTable(newValue);

    // switch (newValueTab) {
    //   case 0:
    //     navigate("/users");
    //     break;
    //   case 1:
    //     navigate("/table");
    //     break;
    //   case 2:
    //     navigate("/tabletelephones");
    //     break;
    //   case 3:
    //     navigate("/adduser");
    //     break;

    //   default:
    //     return <h1>No project match</h1>;
    // }
  };

  const navigate = useNavigate();

  return (
    <div className="border border-primary rounded m-1">
      <Tabs
        value={tables}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab icon={<Diversity3Icon />} />
        <Tab icon={<AlternateEmailIcon />} />
        <Tab icon={<ContactPhoneIcon />} />
      </Tabs>
    </div>
  );
};

export default NavigationBarUsers;
