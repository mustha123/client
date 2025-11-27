import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../Contextprovider';

const VisuallyHiddenInput = styled('input')({
  position: 'absolute',
  width: 0,
});

export default function Updateproduct() {
  const {host}=useContext(UserContext);
  const { pid } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    pname: '',
    pdesc: '',
    pprice: '',
    pqty: '',
    catid: ''
  });

  const [categories, setCategories] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  // ---------------- GET PRODUCT BY ID ----------------
  useEffect(() => {
    axios
      .get(`${host}/api/product/GetproductById/${pid}`)
      .then((res) => {
        const data = res.data.oneproduct;

        setProduct({
          pname: data.product_name,
          pdesc: data.product_desc,
          pprice: data.product_price,
          pqty: data.product_qty,
          catid: data.categoryId?._id || ""
        });
      })
      .catch((error) => console.log(error));

    // ---------------- GET CATEGORY LIST ----------------
    axios
      .get(`${host}/api/category/Getcategory`)
      .then((res) => {  
        setCategories(res.data.getcategory); // FIXED
      })
      .catch((err) => console.log(err));
  }, [pid]);

  // ------------------- HANDLE INPUTS -------------------
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };


  // ------------------- UPDATE PRODUCT -------------------
//  const HandleUpdate = () => {
//   axios
//     .put(`http://localhost:7000/api/product/Updateproduct/${pid}`, {
//       product_name: product.pname,
//       product_desc: product.pdesc,
//       product_price: product.pprice,
//       product_qty: product.pqty,
//       categoryId: product.catid
//     })
//     .then(() => {
//       alert("Product updated successfully");
//       navigate("/admin/viewproduct");
//     })
//     .catch((error) => console.log(error));
// };

  const HandleUpdate = () => {
    const Data = new FormData();
    Data.append("product_name", product.pname);
    Data.append("product_desc", product.pdesc);
    Data.append("product_price", product.pprice);
    Data.append("product_qty", product.pqty);
    Data.append("categoryId", product.catid);

    if (imageFile) {
      Data.append("pimage", imageFile);
    }

    axios
      .put(
        `${host}/api/product/Updateproduct/${pid}`,
        Data)
      .then(() => {
        alert("Product updated successfully");
        navigate("/admin/viewproduct");
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <Paper elevation={4} style={{ width: "600px", padding: "20px" }}>
          <Typography>
            <h4>UPDATE PRODUCT</h4>
          </Typography>

          <TextField
            variant="outlined"
            label="Product Name"
            name="pname"
            value={product.pname}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 3 }}
          />

          <TextField
            variant="outlined"
            label="Product Description"
            name="pdesc"
            value={product.pdesc}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 3 }}
          />

          <TextField
            variant="outlined"
            label="Product Price"
            name="pprice"
            type="number"
            value={product.pprice}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 3 }}
          />

        

          <TextField
            variant="outlined"
            label="Product Qty"
            name="pqty"
            type="number"
            value={product.pqty}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 3 }}
          />

          <FormControl sx={{ minWidth: 560 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={product.catid}
              onChange={handleChange}
              name="catid"
              label="Category"
            >
              {categories &&
                categories.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.catogary_name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ mb: 3 }}
          >
            Upload Image
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2, mb: 4 }}
            onClick={HandleUpdate}
          >
            UPDATE PRODUCT
          </Button>
        </Paper>
      </Box>
    </div>
  );
}
