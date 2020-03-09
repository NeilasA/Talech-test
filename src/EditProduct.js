import React, {  useState, useContext, useEffect } from 'react';
import './App.css';
import { ProductContext } from "./ProductContext";

const EditProduct  = (props) =>{
  
    const {uuid} = require('uuidv4');

    const[products,setProducts] = useContext(ProductContext);

    const[name, setName] = useState(products.name);
    const[price, setPrice] = useState(products.price);
    const[type, setType] = useState(products.type);
    const[color, setColor] = useState(products.color);
    const[weight, setWeight] = useState(products.weight);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const updateType = (e) => {
        setType(e.target.value);
    };

    const updateColor = (e) => {
        setColor(e.target.value);
    };

    const updateWeight = (e) => {
        setWeight(e.target.value);
    };

    const changeProduct = (e) => {
        e.preventDefault();
        setProducts(prevProducts => [...prevProducts, {name: name, price: price, type: type, color: color, weight: weight, id:uuid()}])
        
    };

    return(
        <div>
        <form onSubmit={changeProduct}>
            <input type="text" name="name" value={name} onChange={updateName} placeholder ={props.name} />
            <input type="text" name="price" value= {price} onChange={updatePrice} placeholder ={props.price}/>
            <input type="text" name="type" value={type} onChange={updateType}   placeholder={props.type}/>
            <input type="text" name="color" value= {color} onChange={updateColor} placeholder={props.color}/>
            <input type="text" name="weight" value={weight} onChange={updateWeight} placeholder={props.weight}/>
            <button type="submit" className="editBtn" >Edit</button>
       </form>
       </div>

    );
}

export default EditProduct;