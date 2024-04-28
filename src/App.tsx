import {  BrowserRouter as Router,  Routes, Route, } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage";
import Navbar from "./layout/Navbar";
import About from "./page/LandingPage/About/About";
import Solution from "./page/LandingPage/Solution/Solution";
import Contact from "./page/LandingPage/contact/Contact";
import Register from "./page/auth/signup/Register";
import Login from "./page/auth/login/Login";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
