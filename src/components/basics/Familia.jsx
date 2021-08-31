import React from 'react';

import FamiliaMembro from "./FamiliaMembro"

const Familia = (props) => {
   
   return (
      <div>
         <FamiliaMembro nome="Arthur" sobrenome={props.sobrenome} />
         <FamiliaMembro nome="Ana" {...props} />
         <FamiliaMembro nome="Pedro" sobrenome="Santana" />
      </div>
   );
}

export default Familia;