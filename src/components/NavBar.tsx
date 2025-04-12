import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { NavLink } from "react-router-dom";

// Assets
import NavLogo from "../assets/TCP LOGO.webp";

import "../css/index.css"


const pages = [
  { name: "Home", path: "/", id: "001" },
  { name: "About", path: "/about", id: "002" },
  { name: "Services", path: "/services", id: "004" },
  { name: "Projects", path: "/projects", id: "003" },
  { name: "Career", path: "/career", id: "005" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="relative" className="AppBar">
      <Container maxWidth="xl">
        <Toolbar>
          <Box>
            <img
              src={NavLogo}
              alt="TCP International Logo"
              className="NavLogo"
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "block" }, bgColor: "#063a86 !important" }}
            >
              {pages.map((navLink) => (
                <MenuItem key={navLink.id} onClick={handleCloseNavMenu} >
                  {/* <Typography  sx={{ textAlign: "center" }}>{page}</Typography> */}
                  <NavLink
                    to={`${navLink.path.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit", width: "100%" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{navLink?.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#063a86 !important",
                  fontSize: "18px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  fontFamily: "Nunito, sans-serif",
                  margin: "0 8px",
                  "&:hover": {
                    background: "transparent",
                    color: "#2B7DCD",
                    fontWeight: "800",
                  },
                }}
              >
                <a href={page.path} style={{ color: '#063a86' }}>
                  {page.name}
                </a>
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              width: "200px",
              height: "60px",
              fontSize: "17px",
              fontWeight: "600",
              textTransform: "capitalize",
              fontFamily: "Nunito, sans-serif",
              background: "#2B7DCD",
              borderRadius: "35px",
              boxShadow: "none",
              color: '#fff'
            }}
          >
            <a href="/contact-us" style={{ color: '#fff' }}>
              Contact
            </a>

          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
