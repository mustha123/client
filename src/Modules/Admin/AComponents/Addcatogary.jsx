import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'


export default function Addcatogary() {
    const[cat,setCat]=useState({
        Category_name:'',
        Category_description:''
    });
  
 const handleChange=(e)=>{
    setCat({...cat,[e.target.name]:e.target.value})
    console.log({...cat,[e.target.name]:e.target.value})
  }


const handlesubmit = () =>{
  console.log(cat)
    axios.post("http://localhost:7000/api/category/AddCategory",cat)
        .then((res)=>{
            console.log("user details",res.data);
            alert("category added successfully")
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
        <Typography><h1>Add Catogary</h1></Typography>
        <TextField variant='outlined' label='Categary Name' onChange={handleChange}  name='Category_name' fullWidth sx={{mb:3}}/>
        <TextField variant='outlined' label='Categary Description' onChange={handleChange} name='Category_description' fullWidth sx={{mb:3}}/>
        <Button variant='contained'onClick={handlesubmit}  color='error'>ADD Categary</Button>
   </Paper>   
      </Box>

    </div>
  )
}
