import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Trainer from "./Pages/Home/Trainer/Trainer";
import Services from "./Pages/Home/Services/Services";
import RequireAuth from "./Auth/RequireAuth/RequireAuth";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/trainer" element={<Trainer></Trainer>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }
        ></Route>

        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
