import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';

const ProductList = () => {

  const { products, getProducts } = useProducts();

  useEffect(()=>{
    getProducts();
  }, [])

  console.log(products)

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', mt: 3}}>
      { products ? (
        products.map((item, ind) => (
          <ProductCard item={item} key={ind} />
        ))
      ) : (<h3>Loading</h3>)}
    </Box>
  );
};

export default ProductList;