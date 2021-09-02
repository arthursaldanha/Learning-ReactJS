import React, { useState } from 'react'
import "./Input.css"

const Input = (props) => {
   const [ valor, setValor ] = useState("");

   return (
      <div className="Input">
         <input type="text" value={valor} placeholder="Digite aqui..." onChange={ (e) => { setValor(e.target.value) }}/>
         <div>O que foi digitado: <strong>{valor}</strong></div>
      </div>
   );
}

export default Input;