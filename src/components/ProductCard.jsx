import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { StyledCard } from '../styled/StyledProductCard';

import prodImage from '../img/prodImage.webp';

const ProductCard = () => (
  <StyledCard>
    <CardActionArea>
      <CardMedia
        component='img'
        height='140'
        image={prodImage}
        alt='product title'
      />
      <CardContent>
        <Typography variant='h5' component='h2'>
          Lorem
        </Typography>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
          repellat.
        </Typography>
      </CardContent>
    </CardActionArea>
  </StyledCard>
);

export default ProductCard;
