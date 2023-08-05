import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./Components/Home";
import Account from "./Components/Account";
import Cart from "./Components/Cart";

import Footer from "./Components/Footer";

import "./Styles/App.scss";
import "./Styles/Home.scss";
import "./Styles/Mixins.scss";
import "./Styles/Utilities.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
