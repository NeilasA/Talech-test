import React, {useState,useContext} from 'react';
import "./App.css"
import {ProductContext} from './ProductContext';  


const AddProduct = () => {

    const {uuid} = require('uuidv4');

    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[type, setType] = useState("");
    const[color, setColor] = useState("");
    const[weight, setWeight] = useState("");
    
    const[products,setProducts] = useContext(ProductContext);

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

    const addProduct = e => {
        e.preventDefault();
        setProducts(prevProducts => [...prevProducts, {name: name, price: price, type: type, color: color, weight: weight, id:uuid()}])
        
    };

    return(
        <form onSubmit={addProduct}>
            <input type="text" name="name" value={name} onChange={updateName} placeholder ="Name" />
            <input type="text" name="price" value= {price} onChange={updatePrice} placeholder ="Price"/>
            <input type="text" name="type" value={type} onChange={updateType}   placeholder="Type"/>
            <input type="text" name="color" value= {color} onChange={updateColor} placeholder="Color"/>
            <input type="text" name="weight" value={weight} onChange={updateWeight} placeholder="Weight"/>
            <button>Submit</button>
       </form>

    );
}

export default AddProduct;