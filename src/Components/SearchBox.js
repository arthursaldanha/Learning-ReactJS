import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
   border: 2px solid #000;
   border-radius: 5px;
   padding: 10px;
   font-size: 18px;
   width: 300px;
`;

function SearchBox(props) {

   const [texto, setTexto] = useState("");

   useEffect( () => {
      props.onChangeText(texto)
   }, [texto] )

   return (
      <InputText 
         type="text" 
         value={texto}
         onChange={ (e) => setTexto(e.target.value) }
         placeholder={ props.frase ?? "Digite aqui!" } 
      />
   );
}

export default SearchBox