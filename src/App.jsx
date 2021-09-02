import React from 'react';
import "./App.css"

import Card from "./components/layout/Card.jsx";
import Input from "./components/formulario/Input.jsx"
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx"
import DiretaPai from "./components/comunicacao/DiretaPai.jsx"
import UsuarioInfo from "./components/condicional/UsuarioInfo.jsx";
import ParOuImpar from "./components/condicional/ParOuImpar.jsx";
import TabelaProdutos from "./components/repeticao/Produtos";
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
            <Card titulo="#11 - Controlando Componentes (Input)" color="#3CD500">
               <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#3813C2">
               <IndiretaPai />
            </Card>
            
            <Card titulo="#09 - Comunicação Direta" color="#32CCBC">
               <DiretaPai />
            </Card>
            
            <Card titulo="#08 - Renderização Condicional" color="#FD6E6A">
               <ParOuImpar numero={19} />
               <UsuarioInfo  usuario={{ nome: "Arthur" }}/>
            </Card>
            
            <Card titulo="#07 - Desafio de Repetição" color="#8EC5FC">
               <TabelaProdutos />
            </Card>
            
            <Card titulo="#06 - Repetição" color="#CA26FF">
               <ListaAlunos />
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