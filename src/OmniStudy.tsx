import "./OmniStudy.css";
import { Routes, Route } from "react-router-dom";
import _404 from "./pages/404";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Features from "./pages/Features";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

function OmniStudy() {
  return (
    <div className="App">
      <Navbar />
      <div className="h-full">
        <Routes>
          {/* Show the homepage of the website */}
          <Route path="/" element={<Home />}></Route>

          {/* Show the features page of the website */}
          <Route path="/features" element={<Features />}></Route>

          {/* Show the pricing page of the website */}
          <Route path="/pricing" element={<Pricing />}></Route>

          {/* Show the about page of the website */}
          <Route path="/about" element={<About />}></Route>

          {/* Display a 404 error for all routes not listed above */}
          <Route path="/*" element={<_404 />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default OmniStudy;
