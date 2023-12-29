import { generatePath } from 'react-router-dom';
import './App.css'

const RowProduct = (props) =>{
    const id1 = props.seventh;
    const id2 = props.eighth;

    const url1 = generatePath("/product/:id", {
        id: id1
    })

    const url2 = generatePath("/product/:id", {
        id: id2
    })
    return(
      <>
      <div className="row">
          <div className="col-4">
            <a href={url1}><img src={props.first} alt=""/></a>
            <h4>{props.second}</h4>
            <div className="rating">
              <i className="fa fa-star" ></i>
              <i className="fa fa-star" ></i>
              <i className="fa fa-star" ></i>
              <i className="fa fa-star" ></i>
              <i className="fa fa-star" ></i>
            </div>
            <p>₹{props.third}</p>
          </div>
          <div className="col-4">
            <a href={url2}><img src={props.fourth} alt=""/></a>
            <h4>{props.fifth}</h4>
            <div className="rating">
              <i className="fa fa-star" ></i>
              <i className="fa fa-star" ></i>
              <i className="fa fa-star" ></i>
              <i className="fa fa-star" ></i>
              <i className="fa fa-star-o" ></i>
            </div>
            <p>₹{props.sixth}</p>
          </div>        
        </div>
      </>
    )
  }

export default RowProduct;