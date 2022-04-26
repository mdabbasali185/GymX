import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ product, setServices }) => {
  const { _id, name, about, picture } = product;
  const deleteHandler = id => {
    axios.delete(`services/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
          axios.get("services")
            .then((res) => setServices(res.data));
        }
      })
  }
  return (
    <div className="col">
      <div className="card h-100 mx-auto">
        <img className="user-img mb-4" style={{height:'200px'}} src={picture} alt="" />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">{about}</p>
        </div>
        <div className="d-flex">
          <Link className="allButton w-50 text-decoration-none text-center " to="checkout">
            CheckOut
          </Link>
          <button className="allButton w-50 btn bg-danger" onClick={() => deleteHandler(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
