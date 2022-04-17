import React from "react";
import './Cart.css'

const Cart = (props) => {
  const { name, about, picture } = props.product;
  return (
    <div className="p-4 user-card mb-4">
      <div className="text-center">
        <img className="user-img mb-4" src={picture} alt="" />
      </div>
      <div className="text-center">
        <h4>Name: {name}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default Cart;
