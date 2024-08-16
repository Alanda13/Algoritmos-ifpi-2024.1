import {question} from "readline-sync"

export function print(mensagem){
    console.log(mensagem)
  }

export function qual_opcao(){
    menu();

    let opcao = Number(question('Qual sua opção: '))
    return opcao
}