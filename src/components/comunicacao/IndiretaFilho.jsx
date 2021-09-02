import React from 'react';

const comunicacaoIndiretaFilho = (props) => {
   const min = 20;
   const max = 60;
   
   const gerarIdade = () => {
      return parseInt(Math.floor(Math.random() * (max - min + 1) + min))    
   }
   
   const gerarNerd = () => {
      return Math.random() > 0.5
   }

   const callback = props.quandoClicar;

   return (
      <div>
         <button onClick={ _ => callback("Arthur", gerarIdade(), gerarNerd())}>
            Fornecer Informações
         </button>
      </div>
   );
}

export default comunicacaoIndiretaFilho;