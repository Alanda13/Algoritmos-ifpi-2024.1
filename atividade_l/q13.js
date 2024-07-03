//Leia N e uma lista de N números e escreva o maior número da lista. 

import { get_number, print } from '../utils/io_utils.js'

function main(){
    let N = get_number('Digite um numero: ')
    let contador = 0
    let maior = 0
    let num = 0

    while(contador <= N ){
        num = get_number('digite um numero: ')
        contador + 1
        if (num > maior){
            maior = num
        }
        contador++
    }
    print(`maior numero: ${maior}`)

}
main()