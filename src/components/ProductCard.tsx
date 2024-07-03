import { useNavigate } from 'react-router-dom';
import { CardActionArea, CardContent, Typography } from '@mui/material';

import { StyledCard, StyledCardMedia } from '../styled/StyledProductCard';

import { IProduct } from '../types';

interface IProductProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProductProps) => {
    const navigate = useNavigate();

    return (
        <StyledCard>
            <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
                <StyledCardMedia
                    height="140"
                    src={product.img}
                    alt="product title"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography variant="body2">{product.desc}</Typography>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    );
};

export default ProductCard;
