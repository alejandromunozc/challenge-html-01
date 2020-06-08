import React from 'react';
import '../styles/estilos.css';

class Navbar extends React.Component {
  render() {
    return (
      <header className="site-head">
        <nav className="container">
          <div>
            <img src="../../resources/imgs/logo.png" alt="Logo" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/">Technology</a>
              </li>
              <li>
                <a href="/">Ideas</a>
              </li>
              <li>
                <a href="/">Leadership</a>
              </li>
              <li>
                <a href="/">Video</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Finance</a>
              </li>
              <li>
                <a href="/">Entertaiment</a>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars burger-button" id="burger-menu"></i>
        </nav>
      </header>
    );
  }
}

export default Navbar;
