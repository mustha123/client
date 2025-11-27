import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../../../Contextprovider';

export default function Viewproduct() {
   const {host}=useContext(UserContext);
    const[products,setProducts]=useState([]);
    useEffect(()=>{
     
      fetchusers();
      },[])
       const fetchusers=async()=>{
        try {
          const response=await axios.get(`${host}/api/product/Getproduct`)
          setProducts(response.data.getproducts)
          console.log("product fetched",response.data.getproducts)
          
        } catch (error) {
          console.log(error)
        }
      }
      const HandleDelete=(pid)=>{
        console.log("product_id" +pid)
    
        // axios.delete('http://localhost:7000/api/category/Deletecategory/'+cid)
           axios.delete(`${host}/api/product/Deleteproduct/${pid}`)
        .then(()=>{
    
            alert("product deleted successfully")
             fetchusers();
        })
        .catch((err)=>{
            console.log(err)
            
        })
    
      }
  return (
    <div>

      <Typography variant='h4' fontFamily='fantasy'> View Products</Typography>
      <TableContainer>
      <Table style={{marginLeft:'250px',width:'1300px'}}>
        <TableHead style={{backgroundColor:'black'}}>
            <TableRow>
            <TableCell align='right' style={{color:'white'}}>SLNO</TableCell>
            <TableCell align='right' style={{color:'white'}}>Product Name</TableCell>
            <TableCell align='right' style={{color:'white'}}>Product Description</TableCell>
            <TableCell align='right' style={{color:'white'}}>Product Price</TableCell>
            <TableCell align='right' style={{color:'white'}}>Product QTY</TableCell>
            <TableCell align='right' style={{color:'white'}}>Product Category</TableCell>
            <TableCell align='right' style={{color:'white'}}>Product Image</TableCell>
            <TableCell align='right' style={{color:'white'}}>Action</TableCell>


            </TableRow>
        </TableHead>
        <TableBody>
            {products.map((prod,index)=>(
                <TableRow>
                    <TableCell align="right">{index+1 }</TableCell>
                <TableCell align="right">{prod.product_name }</TableCell>
                <TableCell align="right">{prod.product_desc}</TableCell>
                <TableCell align="right">{prod.product_price}</TableCell>
                <TableCell align="right">{prod.product_qty}</TableCell>
                <TableCell align="right"> {prod.categoryId?.catogary_name}</TableCell>
               
                 
                <TableCell align='right'>
                  <img src={`http://localhost:7000/api/image/${prod.product_image}`} alt={prod.product_name} style={{width:'100px'}}/>
                </TableCell>
                 <TableCell align="right">
                  <Button sx={{ml:2}} variant='contained' component={Link} to={`/admin/updateproduct/${prod._id}` }>Update</Button>
                  <Button sx={{ml:4}} variant='contained' color="error" onClick={()=>HandleDelete(prod._id)}><DeleteIcon/>Delete</Button>
                </TableCell>

                </TableRow> 
            ))}
        </TableBody>
        
      </Table>

      </TableContainer>

    </div>
  )
}
