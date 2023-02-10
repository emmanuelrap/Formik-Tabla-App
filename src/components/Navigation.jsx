import { SwipeableDrawer } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";

const Navigation = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
