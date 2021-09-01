import React from 'react'

const comunicacaoFilho = (props) => {
   return (
      <div>
         <span>{props.nome} </span>
         <span><strong>{props.idade}</strong> </span>
         <span>{props.nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
   );
}

export default comunicacaoFilho;