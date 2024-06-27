import { useNavigate } from 'react-router-dom';
import {
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';

import { StyledCard, StyledCardMedia } from '../styled/StyledProductCard';

import { IProduct } from '../types';

const ProductCard = (props: IProduct) => {
  const navigate = useNavigate();

  const { title, desc, id, img } = props;

  return (
    <StyledCard>
      <CardActionArea onClick={() => navigate(`/products/${id}`)}>
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
