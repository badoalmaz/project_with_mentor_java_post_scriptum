import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

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
    <Box
      sx={{
        width: "40vw",
        margin: "10vh auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Picture"
        variant="outlined"
        fullWidth
        name="picture"
        onChange={handleInp}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Type"
        variant="outlined"
        fullWidth
        name="type"
        onChange={handleInp}
      />
      <Button
        sx={{
          m: 1,
          bgcolor: "#8C2CEF",
          color: "#fff",
          "&:hover": { bgcolor: "#8125DC" },
        }}
        variant="outlined"
        fullWidth
        size="large"
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
