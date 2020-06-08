import React from 'react';
import '../styles/estilos.css';
import BDArticulos from '../../resources/blogArticles.json';

class Article extends React.Component {
  render() {
    return (
      <div className="container">
      {BDArticulos.map(articulo => {
        return (
          <article className={articulo.classLevel} key={articulo.id}>
            <figure>
              <img
                src={articulo.imgUrl}
                alt="Imagen articulo"
              />
              <span>{articulo.category}</span>
            </figure>
            <section className="content">
              <h2>{articulo.title}</h2>
              <p>
                {articulo.description}
              </p>
            </section>
          </article>
        );
      })}
      </div>
      
    );
  }
}

export default Article;
