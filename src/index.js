import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import Primeiro from "./components/basics/Primeiro.jsx";
import ComParametro from "./components/basics/ComParametro.jsx";

ReactDOM.render(
   <div id="app">
      <Primeiro></Primeiro>
      <ComParametro
         titulo="Segundo Componente"
         aluno="Arthur Saldanha"
         nota={9.3}
         status="aprovado"
      />
   </div>, 
   document.querySelector('#root')
)