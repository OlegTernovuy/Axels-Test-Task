import { useNavigate } from 'react-router-dom';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { StyledCard } from '../styled/StyledProductCard';
import { IProduct } from '../types';

const ProductCard = (props: IProduct) => {
  const navigate = useNavigate();

  const { title, desc, id, img } = props;

  return (
    <StyledCard>
      <CardActionArea onClick={() => navigate(`/products/${id}`)}>
        <CardMedia
          component='img'
          height='140'
          image={img}
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
