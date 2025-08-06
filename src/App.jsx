import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";

import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a nav link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-logo" onClick={handleLinkClick}>
            UnityWorks
          </Link>

          {/* Mobile menu toggle */}
          <input
            type="checkbox"
            id="menu-toggle"
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>

          <ul className="nav-links">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/volunteer" onClick={handleLinkClick}>
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} UnityWorks. All rights reserved.</p>
      </footer>
    </Router>
  );
}
