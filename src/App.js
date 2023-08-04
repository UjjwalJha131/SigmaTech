import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Services from "./components/Services/Services";
import Footer from './components/Footer/Footer'


import "./App.css"

function App() {
  return (

   <Router>
    <Navbar />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/services" element={<Services />} />
    </Routes>
    <Contact />
    <Services />
    <Footer />
   </Router>

  );
}

export default App;
