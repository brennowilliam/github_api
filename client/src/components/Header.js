import React from "react"
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1> GitHub Repos Project </h1>
    <h3> By Brenno Ferreira </h3>
    
    <ul>
      <li>
        <NavLink to="/" exact={true}> Home </NavLink>
      </li>
      <li>
        <NavLink to="/bookmarks" exact={true}> Bookmarks </NavLink>
      </li>
    </ul>
    
  </div>
)

export default Header