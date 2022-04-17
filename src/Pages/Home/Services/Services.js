import { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  return (
    <div className="card-compo">
    {services.map(
      (item, index) =>
         <Cart key={index} product={item}></Cart>
    )}
  </div>
  );
};

export default Services;
