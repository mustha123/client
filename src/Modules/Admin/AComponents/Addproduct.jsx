import { Margin } from '@mui/icons-material'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system'; 
const VisuallyHiddenInput = styled('input')({
  position: 'absolute',
  width: 0,
})

export default function Addproduct() {
    const[product,setProduct]=useState({
        pname:'',
        pdesc:'',
        pprice:'',
        pimage:'',
        catid:'',
        pqty:''

    })
    const[categories,setCategories]=useState([]);
    
    useEffect(()=>{

        axios.get('http://localhost:7000/api/category/Getcategory')
        .then((res)=>{
            
            setCategories(res.data.getcategory)
            console.log(res.data)
        })
        .catch((error)=>{
      console.log(error)
        })
    },[])

     const handleChange=(e)=>{
      if(e.target.name =='pimage'){
        setProduct({...product,pimage:e.target.files[0]})
      }else{
        setProduct({...product,[e.target.name]:e.target.value});
        console.log({[e.target.name]:e.target.value})
     }
    }
 
    //  const handleChange=(e)=>{
    //     setProduct({...product,[e.target.name]:e.target.value});
    //     console.log({[e.target.name]:e.target.value})
    //  }
 





     const handleokay =()=>{
      console.log(product);
      const data=new FormData();
      data.append('pname',product.pname)
      data.append('pdesc',product.pdesc)
      data.append('pprice',product.pprice)
      data.append('pimage',product.pimage)
      data.append('catid',product.catid)
      data.append('pqty',product.pqty)
          axios.post("http://localhost:7000/api/product/AddProduct",data,
          {headers:{'Content-Type':'multipart/form-data'}})
        .then((res)=>{
             
            alert("product added successfully")
        })
        .catch((err)=>{
            console.log(err)
        })

     }
  return (
    <div>
        <Box style={{display:'flex',justifyContent:'center',Margin:'30px'}}>
                    <Paper elevation={4} style={{width:'600px',padding:'20px'}}>
                        <Typography><h4>PRODUCT PAGE</h4></Typography>
                        <TextField variant='outlined' label='Product Name' onChange={handleChange}  name='pname' type='text' fullWidth sx={{mb:3}}/>
                        <TextField varient='outlined' label='Product Descriprition'onChange={handleChange}  name='pdesc' type='text' fullWidth sx={{mb:3}}/>
                        
                        <TextField variant='outlined' label='Product Price' onChange={handleChange}  name='pprice' type='number' fullWidth sx={{mb:3}}/>
                        <TextField variant='outlined' label='Product Price' onChange={handleChange}  name='pimage' type='file'  InputLabelProps={{shrink:true}} fullWidth sx={{mb:3}}/>
{/* <Button sx={{mb:2}}
  component="label"
  role={undefined}
  variant="contained"
  InputLabelProps={{shrink:true}}
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={handleChange}
    name='pimage'
    multiple
  />
</Button>                         */}
<TextField varient='outlined' label='Product QTY' onChange={handleChange}  name='pqty'type='number' fullWidth sx={{mb:3}}/>
 <FormControl sx={{  minWidth: 560 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={product.catid}
          onChange={handleChange}
          autoWidth
          name='catid'
          label="Category"
        >
          {categories.map((catdata)=>(
            
           
          <MenuItem key={catdata._id} value={catdata._id}>{catdata.catogary_name}</MenuItem>

          ))}
        </Select>
      </FormControl>
                        
                        <Button variant='contained'  onClick={handleokay} color='error' sx={{ mt: 2, mb: 4 }}   >ADD PRODUCT</Button>
                    </Paper>
                </Box>
      
    </div>
  )
}
