import {question} from "readline-sync"

export function get_number(mensagem){
    return Number(question(mensagem))
}
export function get_number_positive(mensagem){  //pedindo um número positivo
    const numero = get_number(mensagem)

    if (numero<= 0){
        print('Esse valor é inválido!')
        return get_number_positive
    }
    return numero
}
export function get_number_negative(){   //pedindo um número negativo
    const numero = get_number(mensagem)

    if(numero >= 0){
        print('Esse valor é inválido!')
        return get_number_negative
    }
    return numero 
}
export function print(mensagem){  //função print
    console.log(mensagem)
}