import React, { useState } from 'react';
import styled from 'styled-components'

const Title = styled.h1``;

const Input = styled.input`

`;

function App() {
   const [ pct, setPct ] = useState(10);
   const [ conta, setConta ] = useState(0);

   return (
      <>
         <Title>Calculadora de Gorjeta</Title>

         <p>Quanto deu a conta?</p>
         <Input type="number" value={conta} onChange={(e) => { setConta(e.target.value) }}></Input>

         <p>Qual a porcentagem de gorjeta?</p>
         <Input type="number" value={pct} onChange={(e) => { setPct(e.target.value) }}></Input>

         <hr />

         { conta > 0 &&
            <>
               <p>Sub-total: R$ {conta}</p>
               <p>Gorjeta ({pct}%): R$ {(parseFloat((pct / 100) * conta)).toFixed(1)}</p>
               <p>Total: R$ {(parseFloat((pct / 100) * conta) + parseInt(conta)).toFixed(1)}</p>
            </>
         }
      </>
   );

}

export default App;