import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";

const setting=['Login','Register'];
export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Handle avatar click to open dropdown
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    handleCloseMenu();
    navigate(path);
  };
  return (
    <div
      style={{
        backgroundColor: "#9e3f3f9d",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
      }}
    >
      {/* 🔹 Branding / Title Section */}
      <h1 style={{ color: "#171313b0", margin: 0 }}>Creating New Things 😎</h1>

      {/* 🔹 Top-Right Buttons + Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          }}
        >
          Login
        </Button>

        <Button
          component={Link}
          to="/register"
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          }}
        >
          Register
        </Button>

        {/* 🔹 Avatar Dropdown Menu */}
        <IconButton onClick={handleOpenMenu}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>N</Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleNavigate("/login")}>Login</MenuItem>
          <MenuItem onClick={() => handleNavigate("/register")}>Register</MenuItem>
        </Menu>
      </div>
    </div>

)}
