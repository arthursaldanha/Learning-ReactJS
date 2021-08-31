import React from 'react';

import Card from "./components/layout/Card.jsx"
import Primeiro from "./components/basics/Primeiro.jsx";
import ComParametro from "./components/basics/ComParametro.jsx";
import Fragmento from "./components/basics/Fragmento.jsx";
import Aleatorio from "./components/basics/Aleatorio.jsx";

const App = (props) => {
   return (
      <div id="app">
         <h1>Fundamentos React</h1>
         <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio 
               min={1}
               max={60}
            />
         </Card>
         
         <Card titulo="#03 - Fragmento">
            <Fragmento />
         </Card>

         <Card titulo="#02 - Com Parâmetro">
            <ComParametro
               titulo="Segundo Componente"
               aluno="Arthur Saldanha"
               nota={9.3}
               status="aprovado"
            />
         </Card>

         <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
         </Card>
      </div>
   );
}

export default App;