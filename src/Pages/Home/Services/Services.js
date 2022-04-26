import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";


const Services = () => {
  const [services, setServices] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [des, setDes] = useState('');
  useEffect(() => {
    axios.get("services")
      .then((res) => setServices(res.data));
  }, []);


  const submitHandler = event => {
    event.preventDefault()
    if (name && image && des) {
      const newService = {
        name, image, des
      }
      axios.post('/services', newService)
        .then((res) => {
          setServices(res.data)
          alert('create successfully')
          setName('')
          setImage('')
          setDes('')

        });
    } else {
      alert('please fill the form')
      return
    }


  }


  
  return (
    <div className="container my-5">

      <form onSubmit={submitHandler} className="mb-5  w-50 mx-auto">
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          className="form-control mb-3"
          name="name"
          placeholder="Name"
          id="name "
          value={name}
        />
        <input
          type="text"
          onChange={e => setDes(e.target.value)}
          className="form-control mb-3"
          name="des"
          placeholder="des"
          id="des "
          value={des}
        />
        <input
          type="text"
          onChange={e => setImage(e.target.value)}
          className="form-control mb-3"
          name="img"
          placeholder="Image link"
          id="img"
          value={image}
        />
        <button className="btn btn-success"> create a new services </button>
      </form>



      <div className="card-compo">
        {services.map(
          (item, index) =>
            <Cart key={index} product={item} setServices={setServices} ></Cart>
        )}
      </div>
    </div>
  );
};

export default Services;
