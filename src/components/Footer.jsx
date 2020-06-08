import React from 'react';
import '../styles/estilos.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
      <div className="container">
        <div className="item company">
          <img src="../resources/imgs/logo_bw.png" alt="" /> 
          <p>© 2018 Deck <br />Componente based UI Kit</p>
        </div>
        <div className="item nav">
          <div className="menu">
            <ul>
              <li><a href="/">Technology</a></li>
              <li><a href="/">Ideas</a></li>
              <li><a href="/">Leadership</a></li>
              <li><a href="/">Video</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Finance</a></li>
              <li><a href="/">Entertaiment</a></li>
            </ul>
          </div>
        </div>
        <div className="item social">
          <div className="social">
            <a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="/"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
            <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="item suscribete">
          <form className="form-email" action="">
            <input type="text" id="email" placeholder="Your E-mail" />
            <button type="button" name="button">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;