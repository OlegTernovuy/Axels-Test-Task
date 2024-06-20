import React from "react";
import { GridStyle, StyledDiv } from "../../styled/StyledProductsPage";
import { Box, Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { Outlet } from "react-router-dom";

const ProductsPage = () => {
  return (
    <StyledDiv>
      <Box>
        <Grid container spacing={3} columns={{ xs: 4, sm: 9, md: 12 }}>
          {Array.from(Array(24)).map((_, index) => (
            <GridStyle item xs={2} sm={3} md={3} key={index}>
              <ProductCard />
            </GridStyle>
          ))}
        </Grid>
      </Box>
      <Outlet />
    </StyledDiv>
  );
};

export default ProductsPage;
