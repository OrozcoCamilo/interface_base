// src/components/Counter.js
import React, { useState } from 'react';
import './Counter.css'; // Asegúrate de tener el archivo de estilos

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Contador de Páginas</h2>
      <p className="count-display">El contador está en: <span>{count}</span></p>
      <div className="buttons">
        <button className="increment" onClick={() => setCount(count + 1)}>Incrementar</button>
        <button className="decrement" onClick={() => setCount(count - 1)}>Decrementar</button>
        <button className="reset" onClick={() => setCount(0)}>Restablecer</button>
      </div>
    </div>
  );
}

export default Counter;


