import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}

function main() {
    console.log('---Arredondamento---')
    const numero = get_number("Digite um numero:");

    if (numero != 0){
        // Realiza o arredondamento utilizando a regra usual da matemática
        const numeroArredondado = Math.round(numero);

        console.log(`O número ${numero} arredondado é ${numeroArredondado}.`);
    } else {
        console.log("Por favor, insira um número válido.");
    }
}

main()
