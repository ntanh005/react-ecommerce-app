import React, { useEffect, useState } from 'react'
import { NavBar, Products} from './components'
import  {commerce} from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
       const {data} = await commerce.products.list();
        setProducts(data);
    }
    const fetchCart = async() => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }
    const handleAddToCart = async (productId, quantity) => {
         const {cart} = await commerce.cart.add(productId, quantity);
         setCart(cart);
    }
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart)
    return (
    <div>
        <NavBar total_items={cart.total_items} />
        <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
    ) ;
}

export default App;