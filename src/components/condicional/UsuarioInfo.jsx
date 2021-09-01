import React from 'react';
import If from './If.js'

const user = (props) => {
   const usuario = props.usuario || {};
   
   return (
      <If test={usuario && usuario.nome}>
         Seja bem vindo<strong> { usuario.nome }</strong>!
      </If>
   );
}

export default user;