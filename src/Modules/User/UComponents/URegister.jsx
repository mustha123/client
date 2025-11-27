import { Margin } from '@mui/icons-material'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../../Contextprovider';

export default function URegister() {
     const {host}=useContext(UserContext);
    const[user,setUser]=useState({
        uname:'',
        uemail:'',
        upassword:'',
        uphone:'',
        uaddress:''
    });
//to handle updates in state
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value})
    }
    const handlesubmit =()=>{
        console.log(user);
        axios.post(`${host}/api/user/adduser`,user)
        .then((res)=>{
            console.log("user details",res.data);
            alert("user registered successfully")
        })
        .catch((err)=>{
          console.log(err)
          alert("server error")
        })
    }
  return (
    <div>
        <Box style={{display:'flex',justifyContent:'center',Margin:'30px'}}>
            <Paper elevation={4} style={{width:'600px',padding:'20px'}}>
                <Typography><h4>REGISTER PAGE</h4></Typography>
                <TextField varient='outlined' label='Name' onChange={handleChange} value={user.uname} name='uname' fullWidth sx={{mb:3}}/>
                <TextField varient='outlined' label='Email'onChange={handleChange} value={user.uemail} name='uemail' fullWidth sx={{mb:3}}/>
                <TextField varient='outlined' label='Password' onChange={handleChange} value={user.upassword} name='upassword' fullWidth sx={{mb:3}}/>
                <TextField varient='outlined' label='Phone' onChange={handleChange} value={user.uphone} name='uphone' fullWidth sx={{mb:3}}/>
                <TextField varient='outlined' label='Address' onChange={handleChange} value={user.uaddress} name='uaddress' fullWidth sx={{mb:3}}/>
                <Button varient='contained' onClick={handlesubmit} color='error'>REGISTER</Button>
            </Paper>
        </Box>
      
    </div>
  )
}

