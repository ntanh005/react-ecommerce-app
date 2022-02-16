import React from 'react'
import {Typography, Grid, Container, Button} from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import useStyle from './style'

export const Cart = ({cart}) => {
    const classes = useStyle();
    
    const EmptyCart = () => (
        <Typography variant='subtitle1' >You have no items in shopping cart. Start adding some.</Typography>
    );

    const FilledCart = () => (
        <>
             <Grid container spacing={3}>
                 {cart.line_items.map(item => (
                     <Grid item xs={12} sm= {4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                 ))}
             </Grid>
             <div className={classes.cartDetails}>
                <Typography variant='h4' >Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} 
                        size='large'
                        type='button'
                        variant='contained'
                        color='secondary'>Empty Cart</Button>
                    <Button className={classes.checkoutButton}
                        size='large'
                        type='button'
                        variant='contained'
                        color='primary'>Checkout</Button>
                </div>
             </div>
        </>
    );
    if (!cart.line_items) {
        return 'Loading';
    }
    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Typography variant='h3' className={classes.title} gutterBottom >Your shopping cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </Container>
    )
}
