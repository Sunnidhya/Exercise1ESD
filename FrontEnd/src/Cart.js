import './App.css'
import AddToCart from './AddToCartItems'
import React,{useState, useEffect} from 'react'

const Cart = () =>{
    const [cartItems, setCartItems] = useState([]);
    let sum=0;
    useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(storedItem)
  },[]);
    return(
        <div className="cart-container">
        <h3>User Cart</h3>
        {
            cartItems.map((item, index) => {
                sum = sum + parseInt(item.prodPrice);
                console.warn("res",item);
                return(
                <AddToCart 
                  first={item.path}
                  second={index}
                  third={item.prodName}
                  fourth={item.prodPrice}
                />
                );
            })
        }
        <div className="total-price">
            Total: Rs. {sum}
        </div>
        <button className="proceed-to-checkout">Proceed to Checkout</button>
    </div>
    )
}

export default Cart;