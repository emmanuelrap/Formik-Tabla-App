import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const MyTabs = () => {
  const [valueTab, setValueTab] = useState(0);

  const handleChange = (event, newValueTab) => {
    console.log(newValueTab);
    setValueTab(newValueTab);

    switch (newValueTab) {
      case 0:
        navigate("/persons");
        break;
      case 1:
        navigate("/telephones");
        break;
      case 2:
        navigate("/adduser");
        break;
      case 3:
        navigate("/adduser");
        break;

      default:
        return <h1>No project match</h1>;
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <Tabs
        value={valueTab}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab icon={<Diversity3Icon />} />
        <Tab icon={<PhoneIcon />} />
        <Tab icon={<PersonAddIcon />} />
      </Tabs>
    </div>
  );
};

export default MyTabs;
