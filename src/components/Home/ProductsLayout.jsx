import React from 'react';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import ProductCard from '../../components/Home/ProductCard';
import Box from '@mui/material/Box';
import products from '../../data/products';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProductsLayout = () => {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: 'relative',
        marginTop: '-350px',
        backgroundColor: 'transparent',
        flexGrow: 1,
        display: 'flex',
        padding: 2,
      }}>
      <Grid
        item
        container
        rowSpacing={4}
        justifyContent="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product, index) => (
          <Grid item xs={4} key={index}>
            <Item>
              <ProductCard product={product} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsLayout;
