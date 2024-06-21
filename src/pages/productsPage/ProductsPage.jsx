import { GridStyle, StyledDiv } from "../../styled/StyledProductsPage";
import { Box, Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { Outlet } from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/ducks/productsSlice";
import Selectors from "../../redux/selectors";

const ProductsPage = () => {
  const productsList = useSelector(Selectors.products);
  const loading = useSelector(Selectors.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <StyledDiv>
      <Box>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <Grid container spacing={3} columns={{ xs: 4, sm: 9, md: 12 }}>
            {productsList && productsList.map((product) => (
              <GridStyle item xs={2} sm={3} md={3} key={product.id}>
                <ProductCard title={product.title} desc={product.desc} />
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
