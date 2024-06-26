import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Box, Grid } from '@mui/material';

import { GridStyle, StyledDiv } from '../styled/StyledProductsPage';
import { ProductCard } from '../components/index';

import { fetchProducts } from '../redux/ducks/products';
import Selectors from '../redux/ducks/selectors';

const ProductsPage = () => {
  const productsList = useSelector(Selectors.products);
  const loading = useSelector(Selectors.prodLoading);
  const errors = useSelector(Selectors.errors);
  const dispatch = useDispatch();

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
                    prodId={product.id}
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
