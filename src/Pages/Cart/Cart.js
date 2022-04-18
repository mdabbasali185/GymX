import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { name, about, picture } = props.product;
  return (
    <div className="col">
      <div className="card h-100 mx-auto">
        <img className="user-img mb-4" src={picture} alt="" />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">{about}</p>
        </div>
        <Link className="allButton text-decoration-none text-center " to="checkout">
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default Cart;
