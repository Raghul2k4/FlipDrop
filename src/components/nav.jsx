import React from 'react';
import boxIcon from '../assets/box-icon.svg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" style={{ height: '60px' }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={boxIcon} alt="Brand Logo" width="30" height="30" className="d-inline-block align-text-top" />
          <span className="ms-2 text-light">FLIPDROP</span>
        </a>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Orders</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
