import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import  { useState } from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../Contextprovider';
export default function Updatecategory() {
  const {host}=useContext(UserContext);
   const[update,setUpdate]=useState({
          update_name:'',
          update_description:''
      });
      
   const handleChange=(e)=>{
      setUpdate({...update,[e.target.name]:e.target.value})
      console.log({...update,[e.target.name]:e.target.value})
    }
  
  useEffect(()=>{
    axios.get(`http://localhost:7000/api/category/GetcategoryById/${cid}`)
    .then((res)=>{
      const cat =res.data.onecategory;
     setUpdate({
      update_name:cat.catogary_name || '',
      update_description:cat.catogary_desc || ''
     })
    })
    .catch((error)=>{
        console.log(error)
    })
    },[])
  
  const navigate=useNavigate();
  const{cid}=useParams();
     console.log(cid)
  const HandleUpdate=()=>{
    const updatedcat={
      catogary_name:update.update_name,
      catogary_desc:update.update_description
    }
    console.log("data", updatedcat)
    axios.put(`${host}/api/category/Updatecategory/${cid}`,updatedcat)
    .then((res)=>{
      alert("updated successfully")
      navigate('/admin/viewcategory')
    })
    .catch((error)=>{
      console.log(error)
  })
  }
    return (
      <div>
           <Box style={{display:'flex',justifyContent:'center',Margin:'30px'}}>
              <Paper elevation={4} style={{width:'600px',padding:'20px'}}>
          <Typography><h1>Update Catogary</h1></Typography>
          <TextField variant='outlined' label='Update Name' onChange={handleChange} value={update.update_name}  name='update_name' fullWidth sx={{mb:3}}/>
          <TextField variant='outlined' label='Update Description' onChange={handleChange} value={update.update_description} name='update_description' fullWidth sx={{mb:3}}/>
          <Button variant='contained' onClick={HandleUpdate} color='error'>Update Categary</Button>
     </Paper>   
        </Box>
  
      </div>
    
    )
  }
  
    
 

