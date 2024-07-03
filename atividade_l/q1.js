//. Leia N e escreva todos os números inteiros de 1 a N.//
import {get_number, print} from '../utils/io_utils.js'

function main(){
    var n = get_number('Digite um numero: ')
    let contador = 1;
    let resultado = '';

    while(contador<n){
        resultado += contador + ', ';
        contador++
    }
    print(resultado)

}
main()