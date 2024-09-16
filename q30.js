import {question} from "readline-sync"

function isNumeroValido(numero) {
    return numero >= 1000 && numero <= 9999 && Number.isInteger(numero);
}

function verificaNumero() {
    
    let numero = Number(question("Digite um número de 4 dígitos entre 1000 e 9999:"));

    // Calcula os componentes do número
    const dezenaUnidade = Math.floor(numero % 100);
    const milharCentena = Math.floor(numero / 100);
    const soma = dezenaUnidade + milharCentena;
    const quadradoSoma = Math.pow(soma, 2);

    // Verifica se a condição é atendida
    if (quadradoSoma === numero) {
        console.log(`${numero} atende à condição.`);
    } else {
        console.log(`${numero} não atende à condição.`);
    }
}

verificaNumero();
