import React from "react";
import { Link } from "react-router-dom";
import playAudio from "../utils/playmp3";

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
          <Link to="/" onClick={playAudio}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={playAudio}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={playAudio}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
