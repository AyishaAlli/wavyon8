import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage"
import AboutUsPage from "./pages/AboutUsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" exact element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/about' element={<AboutUsPage/>} />
          {/*
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
