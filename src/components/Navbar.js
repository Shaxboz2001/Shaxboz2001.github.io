import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
        alt=""
        width="50px"
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
