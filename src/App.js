import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Checkout from "./Components/Checkout/Checkout";
import NotFound from "./Components/NotFound/NotFound";
import MyServices from "./Components/MyServices/MyServices";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        {/* <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route> */}
        <Route path="/myServices" element={<MyServices></MyServices>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
