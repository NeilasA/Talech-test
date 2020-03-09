import React,{useState, useContext} from 'react';
import EditProduct from './EditProduct';
import './App.css'
import {ProductContext} from './ProductContext'

const EditProductList = () => {
    const [products, setProducts]= useContext(ProductContext);

    return(
        <div>
        {products.map(product => (
            <EditProduct name={product.name} price={product.price} type={product.type} weight={product.weight}
            color={product.color} id={product.id}/>     
        ))}     
        </div>

    );
};

export default EditProductList;