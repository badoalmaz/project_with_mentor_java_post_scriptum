import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../contexts/ProductContextProvider';

const ProductCard = ({item}) => {

  const { deleteProduct } = useProducts();

  return (
    <Card sx={{ maxWidth: 345, m: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.picture}
        alt="item picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" color="warning" onClick={()=> deleteProduct(item.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;