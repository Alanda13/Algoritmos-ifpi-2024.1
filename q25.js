import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Verificando a validade de uma senha---')
    var senha = get_number('Digite uma senha de 4 digitos: ')

    var resultado = eh_valido(senha)
    console.log(resultado)
}
function eh_valido(senha){
    if (senha === 1234){
        return 'Acesso Permitido!'
    }else{
        return 'Acesso Negado! Senha incorreta.'
    }
}
main()
