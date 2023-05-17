import "./App.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";



import CartProvider from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import RoutesConfig from "./routes/Routes";



//import RoutesConfig from "./routes/Routes";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Nav />
          <RoutesConfig />
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
