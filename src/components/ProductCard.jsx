import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="" alt="product title" />
        <CardContent>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            illo.
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
