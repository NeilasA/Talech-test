import React, {Component, useState} from 'react';
import './App.css';
import ProductList from './ProductList';
import Nav from './Nav';
import {ProductProvider} from './ProductContext';
import AddProduct from './AddProduct';
import ListBar from './ListBar';
import Preview from './Preview';
import EditProductList from './EditProductList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <ProductProvider>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/products" exact render={props => 
      <div>
        <ListBar/>
        <ProductList/>
      </div>}/>
      <Route path="/products/create" component={AddProduct}/>
      <Route path="/products/:id" exact component={Preview}/>     
      <Route path="/products/:id/edit"exact component={EditProductList}/>
      </Switch>
    </div>
    </ProductProvider>
    </Router>
  );
}

export default App;
