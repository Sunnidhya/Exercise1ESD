import './App.css'

const RowHome = (props) =>{
    return(
      <>
      <div className="row">
        <div className="col-1">
          <img src={props.first} alt="" />
        </div>
        <div className="col-1">
          <img src={props.second} alt="" />
        </div>
      </div>
      </>
    )
  }

export default RowHome;