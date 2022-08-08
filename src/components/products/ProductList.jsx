import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        mt: 5,
      }}
    >
      {products ? (
        products.map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        <h3>Loading...</h3>
      )}
    </Box>
  );
};

export default ProductList;
