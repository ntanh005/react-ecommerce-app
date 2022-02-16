import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { NavBar, Products, Cart} from './components'
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

 
    return (
    <div>
        <NavBar total_items={cart.total_items} />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Products  products={products} onAddToCart={handleAddToCart}/>} />
                <Route path='/cart' element={<Cart cart={cart}/>} />
                <Route path='/products' element={<Products  products={products} onAddToCart={handleAddToCart} />} />
            </Routes>
        </BrowserRouter>
    </div>
    ) ;
}

export default App;