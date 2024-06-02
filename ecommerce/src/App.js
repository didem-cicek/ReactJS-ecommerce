import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/WishList/WishList";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";



function App() {
  return (

    <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;