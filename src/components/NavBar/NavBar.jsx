import {AppBar, Toolbar, Typography, IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.png';
import useStyle from './style';
const NavBar = ({total_items}) => {
    const classes = useStyle();
    return (
        <>
        <AppBar position='fixed' color='inherit'>            
            <Toolbar>        
                <Typography variant="h6" color='inherit' className={classes.title}>  
                    <img src={logo} height='25px' alt='logo' className={classes.image}></img>
                    DemoEcommerce
                </Typography>   
                <div className={classes.grow} />   
                <div className={classes.button}>
                    <IconButton aria-label='Show card items' color='inherit'>
                        <Badge badgeContent={total_items} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div> 
            </Toolbar>
        </AppBar>
        </>
    );
}

export default NavBar;