import React, { useState } from 'react';
import styled from 'styled-components'

function App() {
   const [ contador, setContador ] = useState(89);

   return (
      <>
         <div>{contador} vezes</div>
         <button onClick={() => setContador( contador + 1 )}>Clique para aumentar</button>
      </>
   );
}

export default App;