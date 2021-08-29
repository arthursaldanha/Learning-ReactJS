import React from 'react';

const Aleatorio = (props) => {
   console.log(props);
   const { min, max } = props

   const sorteado = Math.floor(Math.random() * (max - min + 1) + min)
   return (
      <div>
         <h3>Um número será sorteado entre {min} e {max}</h3>
         <p>{sorteado}</p>
      </div>
   );
}

export default Aleatorio