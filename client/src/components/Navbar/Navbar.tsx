import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Avatar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import {
  toolbarStyles,
  logoStyles,
  avatarStyles,
  userNameStyles,
} from "./Navbar.styles";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    navigate("/login");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={toolbarStyles}>
        <Typography variant="h6" component="div" sx={logoStyles} onClick={() => navigate("/")}>
          CalibraPro
        </Typography>

        {isLoggedIn && user ? (
          <Box>
            <IconButton onClick={handleMenuOpen} color="inherit">
              <Avatar sx={avatarStyles}>
                {user.display_name?.charAt(0).toUpperCase()}
              </Avatar>
              <Typography sx={userNameStyles}>{user.display_name}</Typography>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={() => navigate("/my-devices")}>My Devices</MenuItem>
              <MenuItem onClick={() => navigate("/add-report")}>Add Report</MenuItem>
              <MenuItem onClick={() => navigate("/add-device")}>Add New Device</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
