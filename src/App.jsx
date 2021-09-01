import React from 'react';
import "./App.css"

import Card from "./components/layout/Card.jsx";
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from "./components/basics/Familia.jsx";
import FamiliaMembro from "./components/basics/FamiliaMembro.jsx";
import Primeiro from "./components/basics/Primeiro.jsx";
import ComParametro from "./components/basics/ComParametro.jsx";
import Fragmento from "./components/basics/Fragmento.jsx";
import Aleatorio from "./components/basics/Aleatorio.jsx";

const App = (props) => {
   return (
      <div className="App">
         <h1>Fundamentos React</h1>
         
         <div className="Cards">
            <Card titulo="#06 - Repetição" color="#CA26FF">
               <ListaAlunos></ListaAlunos>
            </Card>
            
            <Card titulo="#05 - Componente com Filhos" color="#F8D800">
               <Familia sobrenome="Saldanha">
                  <FamiliaMembro nome="Arthur" />
                  <FamiliaMembro nome="Ana" />
                  <FamiliaMembro nome="Pedro" />
               </Familia>
            </Card>
            
            <Card titulo="#04 - Desafio Aleatório" color="#08AEEA">
               <Aleatorio 
                  min={1}
                  max={60}
               />
            </Card>
            
            <Card titulo="#03 - Fragmento" color="#FBAB7E">
               <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#2AF598">
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
      </div>
   );
}

export default App;