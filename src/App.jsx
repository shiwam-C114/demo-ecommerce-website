import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import {Cart} from "./Pages/Cart";
import {Home} from "./Pages/Home";
import Login from "./Pages/Login";
import Porduct from "./Pages/Porduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="product/:id" element={<Porduct />} />

      </Routes>
    </>
  );
}

export default App;
