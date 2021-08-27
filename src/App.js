import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBox from './Components/SearchBox';

function App() {
   
   const [ searchText, setSearchText ] = useState("");

   function handleSearchInput(novoTexto) {
      setSearchText(novoTexto);
   }


   return (
      <>
         <h1>Lista de Tarefas</h1>

         <SearchBox 
            frase="Busque aqui..."
            onChangeText={handleSearchInput}
         />

         <hr />

         Texto procurado: {searchText}
      </>
   );
}

export default App;