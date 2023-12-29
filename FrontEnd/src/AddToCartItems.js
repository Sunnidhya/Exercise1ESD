import { useEffect, useState } from 'react'
import './App.css'
import men1 from './resources/men1.jpeg'
import women3 from './resources/women3.jpg'
import React from 'react'

const AddToCart = (props) =>{
  const [cartItems, setCartItems] = useState([]);
  let index = props.second;
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(storedItem)
  },[]);
  const removeFromCart = (index) => {
      const updatedCart = [...cartItems];
      updatedCart.splice(index,1);
      setCartItems(updatedCart);
      localStorage.setItem('Cart', JSON.stringify(updatedCart));
      window.location.reload(false);
  }
    return(
      <>
      <div className="cart-item">
            <img src={props.first} alt="Item 1" className="item-image"/>
            <div className="item-details">
                <div className="item-name">{props.third}</div>
                <div className="item-price">₹{props.fourth}</div>
                <div className="item-size"><b>Size: </b>L</div>
                <button onClick={() => removeFromCart(index)}>Remove Item</button>
            </div>
        </div>
      </>
    )
  }

export default AddToCart;