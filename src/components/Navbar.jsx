import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  Mail,
  Notifications,
} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/profile.png";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  // const {theme} = useSelector((state) => state);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: theme.palette.background.alt,
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius='9px'
            gap='3rem'
            p='0.1rem 1.5rem'
          >
            <InputBase placeholder='Search...' />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap='1.5rem'>
          <IconButton
            onClick={() => console.log("Notification Button clicked!!")}
          >
            {theme.palette.mode === "dark" ? (
              <Notifications sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <Mail sx={{ fontSize: "25px" }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component='img'
                alt='profile'
                src={profileImage}
                height='32px'
                width='32px'
                borderRadius='50%'
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign='left'>
                <Typography
                  fontWeight='bold'
                  fontSize='0.85rem'
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {/* {user.name} */}
                </Typography>
                <Typography
                  fontSize='0.75rem'
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {/* {user.occupation} */}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Link
                to={"/logout"}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </Link>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
