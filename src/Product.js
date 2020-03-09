import React, { useState, useContext } from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import { ProductContext } from "./ProductContext";

const Product = props => {
  const [disable, setDisable] = useState(false);

const[products,setProducts] = useContext(ProductContext);

  function handleCheckboxClick() {
    setDisable(!disable);
  }
  const handleDeleteProduct = id => {
    setProducts(Product => Product.filter(products => products.id !== id))
  }

  return (
    <div className="Product">
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.type}</p>
      <p>{props.color}</p>
      <p>{props.weight}</p>
      <input onClick={handleCheckboxClick} type="checkbox" defaultChecked />
      <Link to = {`/products/${props.id}`}>
      <button disabled={disable} type="submit" className="viewBtn">VIEW</button>
      </Link>
      <Link to = {`/products/${props.id}/edit`}>
      <button disabled={disable} type="submit" className="editBtn">EDIT</button>
      </Link>   
      <button disabled={disable} onClick={() => handleDeleteProduct(props.id)} type="submit" className="deleteBtn">DELETE</button>
    </div>
  );
};

export default Product;
