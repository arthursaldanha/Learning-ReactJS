import React from 'react';

import Primeiro from "./components/basics/Primeiro.jsx";
import ComParametro from "./components/basics/ComParametro.jsx";
import Fragmento from "./components/basics/Fragmento.jsx";

const App = (props) => {
   return (
      <div id="app">
         <Fragmento />
         <ComParametro
            min={1}
            max={20}
         />
      </div>
   );
}

export default App;