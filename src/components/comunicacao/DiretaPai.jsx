import React from 'react';
import DiretaFilho from './DiretaFilho.jsx';

const comunicacaoPai = (props) => {
   return (
      <div>
         <DiretaFilho nome="Arthur" idade={19} nerd={true} />
         <DiretaFilho nome="Pedro" idade={18} nerd={false} />
      </div>
   );
}

export default comunicacaoPai;