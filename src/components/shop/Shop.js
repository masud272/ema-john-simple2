import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Products from "../Products/Products";
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    

    const handleAddProduct = (product) => {
        console.log('product added', product);

        const newCart = [...cart, product]
        setCart(newCart);
    }
    const [cart, setCart] = useState([]);
    
    

    
    return (
        <div className="shop-container">
            <div className="products-container">   
                    {
                        products.map ( prod => <Products handleAddProduct={handleAddProduct} product ={prod}></Products>)
                    }     
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
            
            
        </div>
    );
};

export default Shop;