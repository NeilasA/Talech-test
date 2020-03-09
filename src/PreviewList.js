import React ,{useContext, useEffect, useState} from 'react';
import './App.css';
import { ProductContext } from "./ProductContext";
import Preview from './Preview';

const PreviewList = () =>{

    const [products, setProducts]= useContext(ProductContext);
    return(
        <div>
       {products.map(product => (
            <Preview name={product.name} price={product.price} type={product.type} weight={product.weight}
            color={product.color} id={product.id}/>     
        ))} ;      
        </div>
    );
}

export default PreviewList;