//Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos

import { get_number, print } from '../utils/io_utils.js'

function main(){
    const limite_superior = get_number('valor do limite superior: ')
    const limite_inferior = get_number('valor do limite inferior: ')

    let i = limite_inferior

    while(i < limite_superior){
        if(i % 2 != 0){
            print(i)
        }
        i++;
    }
    
    
}
main()