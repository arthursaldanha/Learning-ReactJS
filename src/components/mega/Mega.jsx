import React, { useState } from 'react'
import "./Mega.css"

const Mega = (props) => {

   function gerarNumerosNaoContidos(min, max, array) {
      const aleatorio = parseInt((Math.random() * (max - min + 1)) + min);

      return array.includes(aleatorio) ?
         gerarNumerosNaoContidos(min, max, array)
         :
         aleatorio;
   }

   function gerarNumeros(qtde) {
      const numeros = Array(qtde)
         .fill(0)
         .reduce((nums) => {
            const novoNumero = gerarNumerosNaoContidos(1, 60, nums)
            return [...nums, novoNumero]
         }, [])
         .sort((a, b) => a - b)

      return numeros
   }

   const [qtde, setQtde] = useState(props.qtde || 6)
   const numerosIniciais = gerarNumeros(qtde)
   const [numeros, setNumeros] = useState(numerosIniciais)

   function bolas() {
      return (
         numeros.map((element, index) => {
            return (
               <span className="Bolas" key={index}><span>{element}</span></span>
            );
         })
      );
   }

   return (
      <div className="Mega">
         <h2>Mega Sena</h2>
         <h3>{bolas()}</h3>
         <div className="inputs">
            <label>Quantidade de Números:</label>
            <input 
               type="number" 
               min={4}
               max={15}
               value={qtde} 
               onChange={e => {
                  setQtde(+e.target.value)
                  setNumeros(gerarNumeros(+e.target.value))
               }} 
            />
         </div>
         <button onClick={() => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
      </div>
   );
}

export default Mega