import React from 'react';
import produtos from '../../data/produtos.js'
import "./Produto.css"

const TabelaProdutos = (props) => {
   
   function getLinhas() {
      return produtos.map((produto, index) => {
         return (
            <tr key={produto.id} className={index % 2 === 0 ? "Par" : "Impar"}>
               <td>{produto.id}</td>
               <td>{produto.nome}</td>
               <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
         )
      })
   } 
   
   return (
      <div className="Produtos">
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Produto</th>
                  <th>Preço</th>
               </tr>
            </thead>
            <tbody>
               {getLinhas()}               
            </tbody>
         </table>
      </div>
   );
}

export default TabelaProdutos;