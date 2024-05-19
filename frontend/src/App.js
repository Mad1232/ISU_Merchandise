import './App.css';
import { ShoeView } from "./shoeview.js";
import { WatchView } from "./watchview.js";
import { AboutView } from "./aboutview.js";
import { CheckoutView } from "./checkoutview.js";
import DeleteView from './deleteview.js';
import PersonView from "./personview";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from "react";
import { UpdateView } from './updateview';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]); // State to manage cart items

  const updateCart = (newItem) => {
    setCart(prevCart => [...prevCart, newItem]);
  };

  const updateCartFromCheckout = (newCart) => {
    setCart(newCart);
  };

  return (
    <Router>
      <div className="App">
        <div style={{ backgroundColor: "#F2F2F2" }}>
          {/* Navbar */}
          <nav className="navbar navbar-expand-md navbar-dark mb-4" style={{ backgroundColor: "#c0354c" }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">SoleElegance</Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shoes">Shoes</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/watches">Watch</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/update">Update Info</Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex">
                <Link className="nav-link" to="/checkout">
                  <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: 'black' }} />
                </Link>
                <Link className="nav-link" to="/personview">
                  <FontAwesomeIcon icon={faUser} size="lg" style={{ color: 'black' }} />
                </Link>
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="container">
            <Routes>
              <Route path="/home" element={
                <div className="p-5 rounded text-center">
                  <h1>Iowa State Merchandise</h1>
                  <a href="https://ibb.co/N7Jcf4w"><img src="https://i.ibb.co/Tr79JCz/Homepage2.jpg" alt="Homepage2" className="img-fluid" /></a>
                  <p className="lead mt-4">Welcome to SoleElegance, your one-stop destination for Iowa State products tailored to college students. We pride ourselves on offering a wide variety of merchandise at affordable prices, ensuring that every student can represent their school with pride without breaking the bank. Conveniently located on campus, our store provides easy access for students, supporting and promoting local businesses while offering the best deals on Iowa State essentials. Shop now and show your Cyclone spirit with style!</p>
                  <Link className="btn btn-lg btn-primary" to="/watches">View products &raquo;</Link>
                </div>
              } />
              <Route path="/shoes" element={<ShoeView updateCart={updateCart}/>} />
              <Route path="/watches" element={<WatchView updateCart={updateCart} cart={cart} />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/update" element={<UpdateView />} />
              <Route path="/personview" element={<PersonView />} />
              <Route path="/deleteview" element={<DeleteView />} />
              <Route path="/checkout" element={<CheckoutView cart={cart} updateCart={updateCartFromCheckout} />} />
            </Routes>
          </main>



          {/* Footer */}
          <footer className="footer mt-auto py-3 bg-light">
            <div className="container text-center">
              <span className="text-muted"><a href="about"> Contact us:</a></span><br />
              <span>Email: <u>info@soleelegance.com</u></span><br />
              <span>Phone: +1 (555) 555-5555</span><br />
              <span>Developed by <a href="about">Prakarsha Poudel</a></span>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
