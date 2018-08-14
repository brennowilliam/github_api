import React from "react"
import { NavLink } from "react-router-dom";

const styles = {
  headerContainer: {
    color: '#8bddf7',
  },
  header: {
    textAlign: 'center',
    paddingTop: '2rem',
  },
  mainHeader: {
    marginTop: 0
  },
  navContainer: {

  },
  nav: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  navItems: {
    padding: '20px 40px',
    border: '1px solid #fff',
    width: 100,
    textAlign: 'center',
    marginRight: 10,
    color: 'red'
  },
  navLink: {
    textDecoration: 'none',
    color: 'red',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#8bddf7'
  }
}

const Header = () => (
  <div style={styles.headerContainer}>
    <div style={styles.header}>
      <h1 style={styles.mainHeader}> GitHub Repos Project </h1>
      <h3> By Brenno Ferreira </h3>
    </div>
    <div style={styles.navContainer}>
      <ul style={styles.nav}>
        <li style={styles.navItems}>
          <NavLink to="/" exact={true} style={styles.navLink}> Home </NavLink>
        </li>
        <li style={styles.navItems}>
          <NavLink to="/bookmarks" exact={true} style={styles.navLink}> Bookmarks </NavLink>
        </li>
      </ul>
    </div>
  </div>
)

export default Header