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
         return [ ...nums, novoNumero]
      }, [])
      .sort((a, b) => a - b)

   return numeros
}

console.log(gerarNumeros(6))