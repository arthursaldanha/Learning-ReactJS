import React from 'react';

import Primeiro from "./components/basics/Primeiro.jsx";
import ComParametro from "./components/basics/ComParametro.jsx";
import Fragmento from "./components/basics/Fragmento.jsx";
import Aleatorio from "./components/basics/Aleatorio.jsx";

const App = (props) => {
   return (
      <div id="app">
         <h1>Fragmentos React</h1>
         <Aleatorio 
            min={1}
            max={60}
         />
         <Fragmento />
         <Primeiro></Primeiro>
         <ComParametro
            titulo="Segundo Componente"
            aluno="Arthur Saldanha"
            nota={9.3}
            status="aprovado"
         />
      </div>
   );
}

export default App;