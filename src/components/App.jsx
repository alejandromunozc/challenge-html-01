import React from 'react';
import '../styles/estilos.css';
import '../styles/components/App.styl';
import Navbar from './Navbar';
import Article from './Article';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="site-main">
            <Article />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;