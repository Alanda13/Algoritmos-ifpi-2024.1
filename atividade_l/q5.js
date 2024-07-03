//5. Leia um número, calcule e escreva seu fatorial//

import { get_number, print } from '../utils/io_utils.js';

function main() {
    let numero = get_number('digite um número: ');
    let fatorial = 1;
    let contador = 1;

    while (contador <= numero) {
        fatorial *= contador;
        contador++;
    }

    print(`O fatorial de ${numero} é ${fatorial}`);
}

main();

