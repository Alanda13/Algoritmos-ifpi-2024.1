//Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o maior quadrado menor que 38 é 36 (quadrado de 6).

import { get_number, print } from '../utils/io_utils.js'
function main(){
    const N = get_number('digite um numero: ')
    let i = 0;
    let maior_q= 0;

    while((i * i) <= N){
        maior_q = i * i;
        i++
    }
    print(`maior quadrado: ${maior_q}`)

}
main()