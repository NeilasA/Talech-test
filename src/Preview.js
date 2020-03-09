import React ,{useContext, useEffect, useState} from 'react';
import './App.css';
import { ProductContext } from "./ProductContext";


const Preview = (props) =>  {
      
const[products,setProducts] = useContext(ProductContext);
      

  return (
      
          <div className="Product">
              <h1>Preview</h1>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.type}</p>
            <p>{props.color}</p>
            <p>{props.weight}</p>
          </div>
        );
      }

export default Preview;
