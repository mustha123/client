import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
   const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value})

   }
   
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f0f0",
      }}
    >
      <Paper sx={{ p: 4, width: 400, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Admin Login
        </Typography>

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          onChange={handleChange}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          // onClick={handleLogin}
        >
          Login
        </Button>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button
            variant="text"
            fullWidth
            sx={{ mt: 2 }}
          >
          </Button>
        </Link>
      </Paper>
    </Box>
  );
}
