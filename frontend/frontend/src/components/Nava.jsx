import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import out from '../assets/out.png';
import sonnav from '../assets/sonnav.png'
 
const Navbara = () => {

  const Logout = () => {
    localStorage.clear();
  };

  return(
    <nav className="navbar ">
      <div className="all navbar-expand">
        <Link className="logo" target="_blank" to="https://sonatrach.com/">
          <img src={sonnav} alt="Logo Sonatrach" />
        </Link>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admindev">My Devices</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adminhis">History</Link>
          </li>
          <li className="nav-item2">
           <Link className="nav-link" to="/adminpro">Myprofile</Link>
          </li>
        </ul>
        <Link className="btn ml-auto " to="/login" onClick={Logout} title="Déconnexion">
          <img src={out} alt="Logout" />
        </Link>
      </div>

    
    </nav>
  )
}

export default Navbara;