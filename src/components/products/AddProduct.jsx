import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {

  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const textFieldStyle = {
    m: 2, 
    width: '100%',
  }

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    margin: '5vmin auto',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    picture: '',
    type: '',
  });

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      }
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      }
      setProduct(obj);
    }
  }

  const handleAdd = (newProduct) => {
    addProduct(newProduct);
    product.name = '';
    product.description = '';
    product.price = '';
    product.picture = '';
    product.type = '';
  }

  console.log(product)
  return (
    <Box sx={boxStyle}>
      <TextField sx={textFieldStyle} value={product.name} onChange={handleInp} name="name" id="standard-basic" label="Name" variant="standard" />
      <TextField sx={textFieldStyle} value={product.description} onChange={handleInp} name="description" id="standard-basic" label="Description" variant="standard" />
      <TextField sx={textFieldStyle} value={product.price} onChange={handleInp} name="price" type="number" id="standard-basic" label="Price" variant="standard" />
      <TextField sx={textFieldStyle} value={product.picture} onChange={handleInp} name="picture" id="standard-basic" label="Picture" variant="standard" />
      <TextField sx={textFieldStyle} value={product.type} onChange={handleInp} name="type" id="standard-basic" label="Type" variant="standard" />
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={()=>{
        handleAdd(product);
        navigate('/products')
      }}>Add</Button>
    </Box>
  );
};

export default AddProduct;