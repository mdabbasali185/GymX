import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { name, about, picture } = props.product;
  return (
    <div class="col">
      <div class="card">
        <img className="user-img mb-4" src={picture} alt="" />
        <div class="card-body">
          <h5 class="card-title">Name: {name}</h5>
          <p class="card-text">{about}</p>
        </div>
        <Link className="allButton text-decoration-none" to="checkout">
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default Cart;
