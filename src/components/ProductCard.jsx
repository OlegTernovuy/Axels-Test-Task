import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';

import { StyledCard, StyledCardMedia } from '../styled/StyledProductCard';

const ProductCard = (props) => {
  const navigate = useNavigate();

  const { title, desc, prodId, img } = props;

  return (
    <StyledCard>
      <CardActionArea onClick={() => navigate(`/products/${prodId}`)}>
        <StyledCardMedia
          height='140'
          src={img}
          alt='product title'
        />
        <CardContent>
          <Typography variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2'>{desc}</Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProductCard;
