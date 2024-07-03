//Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...). 
import { get_number, print } from '../utils/io_utils.js';

function main() {
    const N = get_number('valor de N: ');
    let contador = 0;
    let resultado = '';

    let i = 1;
    while (i <= N) {
        contador += i; 
        resultado += contador; 
        }
        i++;
    

    print(resultado);
}

main();
