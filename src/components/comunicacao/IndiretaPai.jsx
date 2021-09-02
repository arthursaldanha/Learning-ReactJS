import React from 'react';
import IndiretaFilho from './IndiretaFilho.jsx';

const comunicacaoPai = (props) => {
   let nome = "";
   let idade = 0;
   let nerd = true;
   
   function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
      nome = nomeParam;
      idade = idadeParam;
      nerd = nerdParam;
      
      console.log(nomeParam, idadeParam, nerdParam);
   }
   
   return (
      <div>
         <div>
            <span>{nome} </span>
            <span><strong>{idade}</strong></span>
            <span> {nerd}</span>
         </div>
         <IndiretaFilho quandoClicar={fornecerInformacoes}/>
      </div>
   );
}

export default comunicacaoPai;