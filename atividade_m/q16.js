//Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2. 

import { get_number, print } from '../utils/io_utils.js';

function main() {
    const N = get_number('digite um numero: ')

    let num_1 = 0;
    let num_2 = 0;
    let resultado = ''
    let contador = 2;

    while(contador < N){
        let prox_numero = a + b;
        resultado += `${prox_numero}`;
        num_1 = num_2;
        num_2 = prox_numero;
        contador++;
    }
    print(resultado)

}
main()