import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
          <span class="mb-3 mb-md-0 text-muted">
            © 2023 Grupo Embotellador del Nayar <br />
            <PersonIcon />{" "}
            <a
              href="https://www.facebook.com/EmmanueelZ"
              class="link-secondary"
            >
              Ing. Carlos Emmanuel Zambrano
            </a>
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#"></a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#"></a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
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
                <img src="../../../public/iconococa.png"></img>
              </IconButton>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
