

import React, { useContext, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, IconButton, Tab, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Contextprovider';


export default function ViewCategory() {
  const {host}=useContext(UserContext);
  const[allcat,setAllcat]=useState([]);
    
  useEffect(()=>{
 
  fetchusers();
  },[])
   const fetchusers=async()=>{
    try {
      const response=await axios.get(`${host}/api/category/Getcategory`)
      setAllcat(response.data.getcategory)
      console.log("All Users",response.data.getcategory)
      
    } catch (error) {
      console.log(error)
    }
  }
  const HandleDelete=(cid)=>{
    console.log("category_id" +cid)

    // axios.delete('http://localhost:7000/api/category/Deletecategory/'+cid)
       axios.delete(`${host}/api/category/Deletecategory/${cid}`)
    .then(()=>{

        alert("Category deleted successfully")
         fetchusers();
    })
    .catch((err)=>{
        console.log(err)
        
    })

  }
  return (
    <div>
       <Link to={"/admin/addcatogary"}> <Button variant='contained' style={{marginLeft:"700px"}}>ADD CATEGORY</Button></Link>
      <TableContainer>

        <Typography variant='h4'>VIEW CATEGORY</Typography>
        <Table style={{marginLeft:'250px',width:'1300px'}}>

          <TableHead style={{backgroundColor:'black',color:'white'}}>

            <TableRow>
              <TableCell align="right" style={{color:'white'}}>SL.NO</TableCell>
              <TableCell align="right" style={{color:'white'}}>CATEGORY Name</TableCell>
              <TableCell align="right" style={{color:'white'}}>Category description</TableCell>
              <TableCell align="right" style={{color:'white'}}>date</TableCell>
              <TableCell align="right" style={{color:'white'}}>Action</TableCell>
            
              </TableRow>
           </TableHead>
           <TableBody>
            {allcat.map((userdata,index)=>(
            <TableRow>
              <TableCell align="right">{index+1 }</TableCell>
              <TableCell align="right">{userdata.catogary_name}</TableCell>
              <TableCell align="right">{userdata.catogary_desc}</TableCell>
              <TableCell align="right">{userdata.date}</TableCell>
                <TableCell align="right">
                    <Button variant='contained' component={Link} to ={`/Admin/updatecategory/${userdata._id}`}>Update</Button>
        
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
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

