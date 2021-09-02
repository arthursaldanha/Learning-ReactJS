import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho.jsx';

const ComunicacaoIndiretaPai = (props) => {
   const [ nome, setNome ] = useState("");
   const [ idade, setIdade ] = useState(0);
   const [ nerd, setNerd ] = useState(true);
   
   function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
      setNome(nomeParam)
      setIdade(idadeParam)
      setNerd(nerdParam)

      console.log(nome, idade, nerd);
   }
   
   return (
      <div>
         <div>
            <div>Nome: {nome} </div>
            <div> Idade: <strong>{idade}</strong></div>
            <div>É inteligente: {nerd ? "Com certeza!" : "Não tem o dom!"}</div>
         </div>
         <IndiretaFilho quandoClicar={fornecerInformacoes}/>
      </div>
   );
}

export default ComunicacaoIndiretaPai;