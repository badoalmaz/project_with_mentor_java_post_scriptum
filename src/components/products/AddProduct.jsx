import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  console.log(product);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ width: "50vw", margin: "10vh auto" }}>
      <TextField
        id="standard-basic"
        label="NAME"
        variant="standard"
        fullWidth
        name="name"
        onChange={handleInp}
      />
      <TextField
        id="standard-basic"
        label="DESCRIPTION"
        variant="standard"
        fullWidth
        name="description"
        onChange={handleInp}
      />
      <TextField
        id="standard-basic"
        label="PRICE"
        variant="standard"
        fullWidth
        name="price"
        onChange={handleInp}
      />
      <TextField
        id="standard-basic"
        label="PICTURE"
        variant="standard"
        fullWidth
        name="picture"
        onChange={handleInp}
      />
      <TextField
        id="standard-basic"
        label="TYPE"
        variant="standard"
        fullWidth
        name="type"
        onChange={handleInp}
      />
      <Button
        variant="outlined"
        fullWidth
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
