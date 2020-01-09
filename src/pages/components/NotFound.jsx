import React from 'react';
import './generic-page.css';

const NotFound = (props) => {

  const random = Math.round(Math.random() * (10-1) + 1);

  const handleBackClick = () => {
    props.history.goBack();
  }

  const handleRandomClick = () => {
    props.history.push(`/videos?id=${random}`);
  }

  const handleForwardClick = () => {
    props.history.go(1);
  }

  return(
    <div className="Page">
      <h1>404 pagina no encontrada</h1>

      <button onClick={handleBackClick} className="Button">ir a la ruta anterior</button>
      <button onClick={handleRandomClick} className="Button">ver video random</button>
      <button onClick={handleForwardClick} className="Button">ir a la ruta siguiente</button>
    </div>

  )

}

export default NotFound