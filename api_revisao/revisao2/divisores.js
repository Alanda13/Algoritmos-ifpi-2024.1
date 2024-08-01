//Faça um programa que receba um número N positivo e escreva todos os seus divisores.

import {  get_number, print } from '../utils/io_utils.js'

function main(){
    const n = get_number('digite um numero: ')


    const divisores = mostrar_divisores(n)
    print(divisores)




}
function mostrar_divisores(n){
    print(`DIVISORES DE ${n}: `)
    let a = n;
    let divisores = '';

    while(a > 0){
        if(eh_divisor(n,a)){
            divisores += `${a}`
        }
    print(divisores);
    }

}
function eh_divisor(n, a){
    return n % a === 0;
}
main()