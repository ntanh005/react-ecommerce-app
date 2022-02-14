import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const prods = [
    { id : 1, name : 'Shoes', description : 'Running Shoes', price:'$5'},
    { id : 2, name : 'Macbooks', description : 'Apple Macbooks', price:'$10'}
];

const Products = () => {
  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {prods.map(prod => (
                <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={prod}></Product>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products;