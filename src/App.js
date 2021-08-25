import React from 'react';
import styled from 'styled-components'

const Site = styled.div`
   width: 500px;
   height: 500px;
   background-color: #ccc;
`;

const Button = styled.button`
   padding: 10px 15px;
   font-size: 18px;
   background-color: #fff;
   border: 3px solid red;
   margin: 5px;
   border-radius: 7px;
`;

const BotaoPequeno = styled(Button)`
   padding: 5px 10px;
   font-size: 14px;
`;

function App() {
   return (
      <Site>
         <Button>Clique Aquiiii!</Button>
         <BotaoPequeno>Clique Aquiiii!</BotaoPequeno>
      </Site>
   );
}

export default App;