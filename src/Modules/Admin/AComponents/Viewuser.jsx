import React, { useContext, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Button, IconButton, Tab, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { UserContext } from '../../../Contextprovider';


export default function Viewuser() {
   const {host}=useContext(UserContext);
  const[allusers,setAllusers]=useState([]);
    
  useEffect(()=>{
     fetchusers();
  },[])
  const fetchusers=async()=>{
    try {
      const response=await axios.get(`${host}/api/user/getuser`)
      setAllusers(response.data)
      console.log("All Users",response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const HandleDelete=(mid)=>{
    console.log("user_id" +mid)
    axios.delete(`${host}/api/user/Deleteuser/${mid}`)
    .then(()=>{
  alert("Category deleted successfully")
         fetchusers();
    })
    .catch((err)=>{
      console.log(err)
    }
  )
  }

  console.log(host)
  
  return (
    <div>
      <TableContainer>
        <Typography variant='h4'>VIEW USERS</Typography>
        <Table style={{marginLeft:'250px',width:'1300px'}}>

          <TableHead style={{backgroundColor:'black',color:'white'}}>

            <TableRow>
              <TableCell align="right" style={{color:'white'}}>SL.NO</TableCell>
              <TableCell align="right" style={{color:'white'}}>Name</TableCell>
              <TableCell align="right" style={{color:'white'}}>Email</TableCell>
              <TableCell align="right" style={{color:'white'}}>Phone</TableCell>
              <TableCell align="right" style={{color:'white'}}>Address</TableCell>
              <TableCell align="right" style={{color:'white'}}>Action</TableCell>
              </TableRow>
           </TableHead>
           <TableBody>
            {allusers.map((userdata,index)=>(
            <TableRow key={userdata._id}>
              <TableCell align="right">{index+1 }</TableCell>
              <TableCell align="right">{userdata.name}</TableCell>
              <TableCell align="right">{userdata.email}</TableCell>
              <TableCell align="right">{userdata.phone}</TableCell>
              <TableCell align="right">{userdata.address}</TableCell>
              <TableCell align="right">
              <Button variant='contained'><EditIcon/>Update</Button>
              
                  <Button variant='contained' color="error" onClick={()=>HandleDelete(userdata._id)}><DeleteIcon/>Delete</Button>
                  </TableCell>
            </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
