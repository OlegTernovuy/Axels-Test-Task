import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Box, Grid } from '@mui/material';

import { GridStyle, StyledDiv } from '../styled/StyledProductsPage';
import { ProductCard } from '../components/index';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchProducts } from '../redux/ducks/products';
import Selectors from '../redux/ducks/selectors';

const ProductsPage = () => {
  const productsList = useAppSelector(Selectors.products);  
  const loading = useAppSelector(Selectors.prodLoading);
  const errors = useAppSelector(Selectors.errors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <StyledDiv>
      <Box>
        {loading ? (
          <span>Loading...</span>
        ) : errors.length > 0 ? (
          <>{errors}</>
        ) : (
          <Grid container spacing={3} columns={{ xs: 4, sm: 9, md: 12 }}>
            {productsList &&
              productsList.map((product) => (
                <GridStyle item xs={2} sm={3} md={3} key={product.id}>
                  <ProductCard
                    title={product.title}
                    img={product.img}
                    desc={product.desc}
                    id={product.id}
                  />
                </GridStyle>
              ))}
          </Grid>
        )}
      </Box>
      <Outlet />
    </StyledDiv>
  );
};

export default ProductsPage;
