import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            © 2023 Grupo Embotellador del Nayar <br />
            <PersonIcon />{" "}
            <a
              href="https://www.facebook.com/EmmanueelZ"
              className="link-secondary"
            >
              Ing. Carlos Emmanuel Zambrano
            </a>
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#"></a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#"></a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
              <IconButton>
                <img src="/iconococa.png"></img>
              </IconButton>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
