import React, { useState } from "react";
import "../pages/landingPage/landingPage.css";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/unnamed.png";

import { useSelector } from "react-redux";
import { Logout, Person2Rounded } from "@mui/icons-material";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
function HeaderLand() {
  const { open, setOpen } = useState(false);
  const { token, fName } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openD = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <header>
        <div className='header'>
          <div className='navbar'>
            <div className='logo'>
              <img src={Logo} />
              <img src={Logo2} style={{ height: "60px", width: "60px" }} />
            </div>

            <ul>
              <li>
                <a href='/#!'>Home</a>
              </li>
              <li>
                <a href='#service'>Services</a>
              </li>

              <li>
                <a href='#about'>About Us </a>
              </li>
              <li>
                <a href='#contact'> Contact Us</a>
              </li>
              <li>
                {token ? (
                  <a>
                    <span
                      id='basic-button'
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup='true'
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      {fName}
                      <Person2Rounded />
                    </span>
                  </a>
                ) : (
                  <a href='/login'> Login/Register</a>
                )}
              </li>
            </ul>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={openD}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar
                  style={{ width: "25px", height: "25px", marginRight: "2px" }}
                />
                Profile
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
              <Link
                to={"/logout"}
                style={{ color: "#000", textDecoration: "none" }}
              >
                <MenuItem onClick={handleClose}>
                  <Logout fontSize='small' /> Logout
                </MenuItem>
              </Link>
            </Menu>
            {/* 
            <div className="button">
              <h2>Login</h2>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderLand;
