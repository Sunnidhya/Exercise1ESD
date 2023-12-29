import './App.css'
import men1 from './resources/men1.jpeg'
import women3 from './resources/women3.jpg'
import men2 from './resources/men2.jpeg'
import women2 from './resources/women2.jpg'
import women1 from './resources/women1.png'
import men3 from './resources/men3.jpeg'
import men4 from './resources/men4.jpg'
import women4 from './resources/women4.jpg'
import men5 from './resources/men5.jpg'
import women5 from './resources/women5.jpg'
import men6 from './resources/men6.jpg'
import women6 from './resources/women6.jpg'
import { Link, Router, Routes } from 'react-router-dom'
import ProductItem from './ProductItem'
import RowProduct from './RowProduct'
import React,{useState, useEffect} from 'react'

const Product = () =>{
    const [data, setData] = useState([]);
    const apiCall = async () => {
        let result = await fetch("http://localhost:3001/products");
        result = await result.json();
        setData(result);
        return;
    } 
    useEffect( ()=> {
        apiCall();
        return;
    },[])
    console.warn("res",data);
    return(
      <>
        <div className="small-container">
          {
              data.map((item) => {
                  const itemsVal = []
                  item.map((inItem) =>{
                      itemsVal.push(inItem);
                  })
                  
                  return(
                  <RowProduct 
                    first={itemsVal[0].imagePath} 
                    second={itemsVal[0].prodName} 
                    third={itemsVal[0].prodPrice}
                    fourth={itemsVal[1].imagePath} 
                    fifth={itemsVal[1].prodName} 
                    sixth={itemsVal[1].prodPrice}
                    seventh={itemsVal[0].productId}
                    eighth={itemsVal[1].productId}
                  />
                  );
              })
          }
      </div>
      </>
    )
}

export default Product;