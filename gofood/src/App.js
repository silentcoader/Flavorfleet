import React from 'react'
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './screens/Home';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
// import Payment from './screens/Payment';
import Address from './screens/Address';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';


function App() {
  return (
    
    <CartProvider>
    <Router>
       <div>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/login" element={<Login />} />
           <Route exact path="/creatuser" element={<Signup />} />
           <Route exact path="/myOrder" element={<MyOrder />} />
           <Route exact path="/address" element={<Address />} />
           <Route exact path="/contact" element={<Contact />} />
           <Route exact path="/about" element={<AboutUs />} />
           {/* <Route exact path="/payment" element={<Payment />} /> */}
          </Routes>
       </div>
     </Router>
    </CartProvider>
    
  );
}

export default App;