import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
    style={{
      borderBottom: "solid 1px",
      paddingBottom: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: 'center'
    }}
  ><ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
  </ul>
  </nav>
  )
}

export default Nav