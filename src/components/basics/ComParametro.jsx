import React from 'react';

export default function ComParametro(props) {
   console.log(props);

   const notaInt = Math.ceil(props.nota)
   return (
      <div>
         <h2>{props.titulo}</h2>
         <p>
            <strong>{props.aluno} </strong>
            obteve a nota
            <strong> {notaInt} </strong>
            e está 
            <strong> {props.status}</strong>!
         </p>
      </div>
   );
}