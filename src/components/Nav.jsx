import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
    style={{
      borderBottom: "solid 1px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  ><ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/portfolio">Portfolio</NavLink></li>
  </ul>
  </nav>
  )
}

export default Nav