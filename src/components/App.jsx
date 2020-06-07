import React from 'react';
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
          <div className="container">
            <Article />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
