import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="banner">
          <h1 className="custom-style ">JUST DON'T GIVE UP</h1>
      </div>
      {
        <div className="container mb-5">
          <h1 className="text-center text-secondary fw-bold mt-5">
          WHAT WE CAN OFFER <span className="d-block services">OUR SERVICES</span> 
          </h1>
          <div className="card-compo">
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
      <div className="trainer mb-5 ">
          
          <h1 className="custom-style">PARTNER UP - DOUBLE POWER</h1>
          <Link className="allButton text-decoration-none" to='trainer'> CHOOSE YOUR TRAINER</Link>

      </div>
    </div>
  );
};

export default Home;
