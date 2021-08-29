import React from 'react';

const ComParametro = (props) => {
   console.log(props);

   const min = props.min;
   const max = props.max;

   const sorteado = Math.floor(Math.random() * (max - min + 1) + min)
   return (
      <div>
         <h3>Um número será sorteado entre {props.min} e {props.max}</h3>
         <p>{sorteado}</p>
      </div>
   );
}

export default ComParametro;