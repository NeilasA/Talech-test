import React,{useState, useContext} from 'react';
import Product from './Product';
import './App.css'
import {ProductContext} from './ProductContext'

const ProductList = () => {
    const [products, setProducts]= useContext(ProductContext);

    return(
        <div>
        {products.map(product => (
            <Product name={product.name} price={product.price} type={product.type} weight={product.weight}
            color={product.color} id={product.id}/>     
        ))}     
        </div>

    );
};

export default ProductList;