import {question} from "readline-sync"

function main(){
    const numero = Number(question('Digite um numero de 4 digitos: '))
    if (quadrado_perfeito(numero)) {
        console.log(`${numero} é um quadrado perfeito.`);
      } else {
        console.log(`${numero} não é um quadrado perfeito.`);
      }
}

function calculaRaizQuadrada(numero) {
    return Math.sqrt(numero);
  }
  function quadrado_perfeito(numero) {
    if (numero < 1000 || numero > 9999) {
      console.log("Por favor, insira um número de 4 dígitos.");
      return false;
    }
  
    const raizQuadrada = calculaRaizQuadrada(numero);
    const PrimeirosDigitos = Math.floor(numero / 100);
    const UltimosDigitos = numero % 100;
  
    return raizQuadrada === PrimeirosDigitos + UltimosDigitos;
  } 
  main()
  

  
  