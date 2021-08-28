import React from 'react';

import Primeiro from "./components/basics/Primeiro.jsx";
import ComParametro from "./components/basics/ComParametro.jsx";
import Fragmento from "./components/basics/Fragmento.jsx";

const App = (props) => {
   return (
      <div id="app">
         <h1>Fragmentos React</h1>
         <Fragmento />
         <ComParametro
            titulo="Segundo Componente"
            aluno="Arthur Saldanha"
            nota={9.3}
            status="aprovado"
         />
         <Primeiro></Primeiro>
      </div>
   );
}

export default App;