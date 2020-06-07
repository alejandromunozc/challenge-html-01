import React from 'react';
import '../styles/estilos.css';

class Article extends React.Component {
  render() {
    return (
      <article className="item level-1">
        <figure>
          <img
            src="../resources/imgs/dose-media-344938.png"
            alt="Imagen articulo"
          />
          <span>Technology</span>
        </figure>
        <section className="content">
          <h2>Using banner stands to increase show traffic</h2>
          <p>
            There is a lot of exciting stuff going on in the stars above us that
            make astronomy so much fun.
          </p>
        </section>
      </article>
    );
  }
}

export default Article;
