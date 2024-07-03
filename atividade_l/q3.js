//Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão import { get_number, print } from '../utils/io_utils.js'

import { get_number, print } from '../utils/io_utils.js'

function main() {
    let A0 = get_number("valor inicial: ")
    let Limite = get_number("limite: ")
    let R = get_number("razao: ")

    let valor = A0
    while (valor < Limite) {
        print(valor)
        valor += R
    }
}

main()