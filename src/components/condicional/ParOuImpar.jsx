import React from 'react';

const isParOuImpar = (props) => {
   const isPar = props.numero % 2 === 0;
   
   return (
      <div>
         { isPar ? 
            <span>Par</span> :
            <span>Ímpar</span> 
         }  
      </div>
   );
}

export default isParOuImpar;