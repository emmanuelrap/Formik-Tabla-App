import { useRef, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import AdbIcon from "@mui/icons-material/Adb";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SearchIcon from "@mui/icons-material/Search";
import Persons from "../../pages/Persons";
import Users from "../../pages/Users";
import Roles from "../../pages/Roles";
import { Home } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";

const pages = ["PERSONAS", "USUARIOS", "ROLES", "PRUEBAS"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const MyAppBar = () => {
  const [myPags, setMyPags] = useState("");
  // const [pagina, setPagina] = useState("HOME");
  const navigate = useNavigate();

  function handleClickNav(e) {
    e.preventDefault();
    setMyPags(e.target.innerText);
  }

  useEffect(() => {
    console.log(myPags);
    switch (myPags) {
      case "HOME":
        navigate("/");
        break;
      case "PERSONAS":
        navigate("/persons");
        break;
      case "ROLES":
        navigate("/roles");
        break;
      case "USUARIOS":
        navigate("/users");
        break;
      case "PRUEBAS":
        navigate("/pruebas");
        break;
    }
  }, [myPags]);

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Diversity1Icon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              APP DIGITAL
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleClickNav}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default MyAppBar;
