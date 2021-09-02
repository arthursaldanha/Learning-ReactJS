import React from 'react';

const comunicacaoFilho = (props) => {
   
   return (
      <div>
         <div>Filho</div>
         <button onClick={
            function (e) {
               return props.quandoClicar("Arthur", 19, true)
            }
         }>
            Fornecer Informações
         </button>
      </div>
   );
}

export default comunicacaoFilho;