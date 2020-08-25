import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './products.css';


const Products = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = (props.product);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-Name">{name}</h3>
                <br />
                <p><small>By :{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - Order Soon</small></p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>

        </div>
    );
};

export default Products;