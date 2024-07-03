//6. Escreva a tabuada dos números de 1 a 10

import { get_number, print } from '../utils/io_utils.js'

function main(){
    let contador = 1;

    while (contador <= 10){
        let numero = 1;
        let resultado = ' '

        while(numero <= 10){
            resultado += `${contador} x ${numero} = ${contador * numero}`;
            numero++;
        }
        print(resultado);
        contador++
    }
 }
main()