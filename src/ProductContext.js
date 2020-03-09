import React,{useState, createContext, useEffect} from 'react';


export const ProductContext = createContext()

export const ProductProvider = props =>{

    const { uuid } = require('uuidv4')

    const [product, setProduct] = useState(() => {       
        const localData = localStorage.getItem('product');
       return (localData ? JSON.parse(localData) : [
        {
            name: "OnePlus 7T PRO",
            EAN: "6905443264988",
            type:"Android",
            weight:"206 g",
            color:"Black",
            price: "$759",
            id: uuid()
        },
        {
            name: "Samsung Galaxy S10 Plus",
            EAN: "8801643654009",
            type:"Android",
            weight:"315 g",
            color:"White",
            price: "$810",
            id: uuid()
        },
        {
            name: "Huawei P30 Pro",
            EAN: "6901443284658",
            type:"Android",
            weight:"192 g",
            color:"Breathing Crystal",
            price: "$920",
            id: uuid()
        },
        {
            name: "Apple iPhone 11 PRO",
            EAN: "6921643984658",
            type:"iOS",
            weight:"178 g",
            color:"Gold",
            price: "$1100",
            id: uuid()
        },
        {
            name: "Xiaomi Mi 9T Pro",
            EAN: "6901443284152",
            type:"Android",
            weight:"215 g",
            color:"Blue",
            price: "$300",
            id: uuid()
        },
       ]);
    });

    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(product))
    }, [product]);

    return (
        <ProductContext.Provider value={[product,setProduct]}>
            {props.children}
        </ProductContext.Provider>
        );

}