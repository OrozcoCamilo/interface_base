// src/components/Counter.js
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`El contador ahora es: ${count}`);
  }, [count]);

  return (
    <div>
      <p>El contador está en: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Counter;
