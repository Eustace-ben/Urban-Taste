import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Orders from "./pages/Orders";
import SignIn from "./pages/SignIn";
import SIgnUp from "./pages/SIgnUp";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from "react-toastify";

const App = () => (
  <Router>
     <ToastContainer />
     <ScrollToTop /> 
    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/foods" element={<Orders />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SIgnUp />} />
      </Routes>
    </div>
  </Router>
);

export default App;
