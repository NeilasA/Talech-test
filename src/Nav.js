import React, {useContext} from 'react';
import {ProductContext} from './ProductContext';
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const[products, setProducts] = useContext(ProductContext);
   
    return(
        <div>
            <nav className = "Nav">
            <ul className = "nav-links">       
            <Link to='/products'>
                <li>LIST</li>
            </Link>
            <Link to = {`/products/${products.id}`}>
                <li>PREVIEW</li>
            </Link>    
            <Link to = '/products/create'>
                <li>NEW</li>
            </Link>
            <Link to = {`/products/${products.id}/edit`}>
                <li>EDIT</li>
            </Link>

            </ul>
        </nav>
        </div>
    );
};

export default Nav;