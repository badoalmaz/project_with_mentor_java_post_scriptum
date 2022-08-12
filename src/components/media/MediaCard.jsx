import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import deal from "../../assets/icons/Deal.svg";

export default function MediaCard({ product }) {
  console.log(product);
  return (
    <Card className="Card_info" sx={{ width: 270 }}>
      <CardMedia component="img" height="140" image={product.picture} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography className="sale">
          <Typography>{product.price}</Typography>
          <img src={deal} alt="deal" style={{ width: "35%" }} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
