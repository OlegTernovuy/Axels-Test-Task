import React from 'react';
import { Box, Grid } from '@mui/material';

import { GridStyle, StyledDiv } from '../../styled/StyledProductsPage';
import { ProductCard, ProductModal } from '../../components';

const ProductsPage = () => (
  <StyledDiv>
    <Box>
      <ProductModal />
      <Grid container spacing={3} columns={{ xs: 4, sm: 9, md: 12 }}>
        {Array.from(Array(24)).map((_, index) => (
          <GridStyle item xs={2} sm={3} md={3} key={index}>
            <ProductCard />
          </GridStyle>
        ))}
      </Grid>
    </Box>
  </StyledDiv>
);

export default ProductsPage;
