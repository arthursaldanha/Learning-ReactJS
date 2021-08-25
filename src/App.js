import React from 'react';
import styled from 'styled-components'

const Site = styled.div`
   width: 300px;
   height: 300px;
   background-color: #00ff00;

`;

const Button = styled.button`
   text-align: center;
   padding: 10px 15px;
   font-size: 24px;
   font-weight: 600;
`;

function App() {
   return (
      <Site>
         <Button>Clique Aquiiii!</Button>
      </Site>
   );
}

export default App;