//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N = get_number('digite um numero: ')
    let contador = 0;
    let soma = 0;

    while(contador < N){
        let num = get_number('digite um numero: ')
        soma += num
        contador++
    }

    const media = soma/N
    const resultado = `Soma dos numeros: ${soma}\n
                       Média dos numeros ${media}`

    print(resultado)

}
main()