import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Correctly import the CSS file

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const showNavbar = (event) => {
    event.preventDefault();
    setIsVisible(true);
  };

  const hideNavbar = (event) => {
    event.preventDefault();
    setIsVisible(false);
  };

  return (
    <div>
      {/* Navbar toggle button */}
      <ul>
        <li onClick={showNavbar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>

      {/* Navbar itself */}
      {isVisible && (
        <ul className="navbar">
          <li onClick={hideNavbar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </a>
          </li>
          <li><Link to = "/Home">Michael</Link></li>
          <li><Link to = "/Contact">Contact</Link></li>
          <li><Link to = "/Gallery">Gallery</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
