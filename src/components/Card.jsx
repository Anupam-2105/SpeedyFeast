import React from 'react'
import { useDispatch, useCart } from './ContextReducer'

const Card = (props) => {

  let options = props.options
  let price = Object.keys(options)

  const handleAddToCart = () =>{
    
  }

  return (
    <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          {/* Enter style within {{ "" : "" }} as ke-value pair Also everthing should be in camel case, ex-fontFamily*/}
          <img src={props.foodItems.imgSrc} className="card-img-top" alt="..." style={{height:"200px", objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItems.Name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                {price.map((data) => {
                  return <options key={data} value={data}>{data}</options>
                })}
              </select>
              <div className="d-inline" h-100 fs-5>
                Total Price
              </div>
            </div>
            <hr />
            <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  )
}

export default Card