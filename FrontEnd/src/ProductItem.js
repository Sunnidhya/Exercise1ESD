import men1 from './resources/men1.jpeg'
import './App.css'
import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';

const ProductItem = () =>{
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  const addToCart = (name, price, imagePathVal) => {
      let existCartItems = JSON.parse(localStorage.getItem('Cart')) || [];
      let newItem = { prodName: name, prodPrice: price, path:imagePathVal };
      existCartItems = [...existCartItems, newItem];
      localStorage.setItem('Cart', JSON.stringify(existCartItems));

      alert('Product has been added to the Cart!!');
      
  }

  const apiCall = async () => {
      let result = await fetch("http://localhost:3001/products");
      result = await result.json();
      setData(result)
  } 
  useEffect( ()=> {
      apiCall();
  },[]);

  let {id} = useParams();

  useEffect(() => {
    const foundItem = data.flat().find((inItem) => id == inItem.productId);
    setItem(foundItem);
  }, [data, id]);
    return(
        <div className="small-container1">
      <div className="row1">
        <div className="col-5">
        {item && item.imagePath && <a href=""><img src={item.imagePath} alt="" /></a>}
          <div className="row2">
            <div className="col-6" onClick={() => addToCart(item.prodName, item.prodPrice, item.imagePath)}>
              <h3>Add to Cart</h3>
            </div>
            <div className="col-6_2">
              <h3>Buy Now</h3>
            </div>
          </div>
        </div>
        <div className="col-5">
          {item && item.imagePath && <h2>{item.prodName}</h2>}
          {item && item.imagePath && <h3>₹{item.prodPrice}</h3>}
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <span><h6>(5993 Ratings, 1230 Reviews)</h6></span>
          </div>
          <div className="productDetails">
            <h3>Product Details</h3>
            <p><b>Name :</b> Polo Tshirts for mens</p>
            <p><b>Fabric :</b> Cotton Blend</p>
            <p><b>Sleeve Length :</b> Long Sleeves</p>
            <p><b>Pattern :</b> Striped</p>
            <p><b>Net Quantity (N) :</b> 1</p>
            <p><b>Sizes :</b></p>
            <p><b>S, M, L, XL, XXL</b></p>
            <p>
              At , we understand that to look the part you have to dress the
              part!
            </p>
            <p>
              combines a refined design with tailor-made fabrics to create a
            </p>
            <p>
              functional yet polished look, letting any shirt, t-shirt, suit or
              blazer
            </p>
            <p>
              speak for you. ensures that you’re the style statement, the alpha,
            </p>
            <p>and the omega!</p>
            <p>Country of Origin : India</p>
            <a href="">More Information</a>
          </div>
          <div className="sizeDetails">
            <h4>Sizes</h4>
            <div className="row2">
              <div className="col-7">
                <h3>S</h3>
              </div>
              <div className="col-7">
                <h3>M</h3>
              </div>
              <div className="col-7">
                <h3>L</h3>
              </div>
              <div className="col-7">
                <h3>XL</h3>
              </div>
              <div className="col-7">
                <h3>XXL</h3>
              </div>
            </div>
          </div>
          <div className="userReviews">
            <h4>User Reviews(Top Ones)</h4>
            <div className="review-container">
              <div className="review">
                <div className="user-info">Chad Giga</div>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="review-text">
                  "Quality is awesome such a nice product"
                </div>
              </div>
              <div className="review">
                <div className="user-info">Vikram Chouhan</div>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="review-text">
                  "The fabric is quite soft and it feels light while wearing, a must buy"
                </div>
              </div>
              <div className="review">
                <div className="user-info">Sam Bhaumik</div>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <div className="review-text">
                  "I bought this for a friend and he loved it. Nice Product."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProductItem;