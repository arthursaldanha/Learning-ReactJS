import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

function App() {
   const [ contador, setContador ] = useState(0);

   const aumentarContador = () => {
      setContador( contador + 1)
   }

   useEffect(() => {
      if (contador === 0) {
         document.title = "Inicie o contador ...";
      } else {
         document.title = `Contagem: ${contador}`;
      }
   }, [ contador ])

   return (
      <>
         <h1>Contagem Atual: {contador}</h1>
         <button onClick={aumentarContador}>Aumentar</button>
      </>
   );
}

export default App;