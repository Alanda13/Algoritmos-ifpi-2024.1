//2. Leia N e escreva todos os números inteiros pares de 1 a N.//
import {get_number, print} from '../utils/io_utils.js'

function main(){
    let N = get_number('Escreva um numero: ')
    let contador = 1;
    let resultado = '';

    while(contador < N ){
        contador++;
        if(contador % 2 === 0){
            resultado += contador + ',';
        }
    }
    print(resultado);
}
main()
