import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Trainer from "./Pages/Home/Trainer/Trainer";
import About from "./Pages/About/About";
import Classes from "./Pages/Home/Classes/Classes";
import Services from "./Pages/Home/Services/Services";
import Elements from "./Pages/Home/Elements/Elements";
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/trainer" element={<Trainer></Trainer>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/classes"
          element={
            <RequireAuth>
              <Classes></Classes>
            </RequireAuth>
          }
        ></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/elements" element={<Elements></Elements>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
