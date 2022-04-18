import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";

import sale from "../../../Images/Sale.jpg";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    // banner add 
    <div>
      <div className="banner">
        <h1 className="custom-style ">JUST DON'T GIVE UP</h1>
      </div>
      {
        <div className="container mb-5">
          <h1 className="text-center text-secondary fw-bold mt-5">
            WHAT WE CAN OFFER
            <span className="d-block services">OUR SERVICES</span>
          </h1>
          
           <div className="row row-cols-md-3">
           {services.map(
              (item, index) =>
                index < 3 && <Cart key={index} product={item}></Cart>
                
            )}
          
            
          </div>
          <div className=" d-flex justify-content-center">
            <Link className="services-container allButton" to="/services">
              See more
            </Link>
          </div>
        </div>
      }
      <div className="trainer">
        <div>
          <h1 className="custom-style py-3">PARTNER UP - DOUBLE POWER</h1>
          <Link className="allButton text-decoration-none" to="trainer">
            CHOOSE YOUR TRAINER
          </Link>
        </div>
      </div>
      <div className="hot-sale py-5">
        <div className="container text-center ">
          <div>
            <img className="img-fluid mx-auto w-50 d-block" src={sale} alt="" />
            <Link className="allButton text-decoration-none" to="blogs">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
