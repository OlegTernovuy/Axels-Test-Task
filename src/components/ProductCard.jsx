import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import prodImage from "../img/prodImage.webp";
import React from "react";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={prodImage}
          alt="product title"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            Lorem
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            repellat.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;