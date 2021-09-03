import React, { useState } from 'react';
import "./Contador.css"

const Contador = () => {

   const [contador, setContador] = useState(0);
   const [valorInput, setValor] = useState(0);

   const incrementar = () => {
      setContador(parseInt(contador) + parseInt(valorInput))
   }

   const decrementar = () => {
      setContador(parseInt(contador) - parseInt(valorInput))
   }

   return (
      <div className="Contador">
         <h2>Contador</h2>
         <h3>{contador}</h3>
         <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" value={valorInput} onChange={(e) => { setValor(e.target.value) }}/>
         </div>
         <div>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
         </div>
      </div>
   );
}

export default Contador