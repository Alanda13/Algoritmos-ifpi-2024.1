import {question} from "readline-sync"
import fs from 'fs';

export function writeToFile(filename, data) {    //vai ser utilizado para gravar dados em um arquivo
    const lines = data.map(item => Object.values(item).join('|'));
    fs.writeFileSync(filename, lines.join('\n'), 'utf8');
}

export function readFromFile(filename) {
    if (!fs.existsSync(filename)) return null;
    return fs.readFileSync(filename, 'utf8').split('\n').filter(Boolean);
}

export function get_text(mensagem){
    return question(mensagem)
}
export function get_number(mensagem){
    return Number(question(mensagem))
}
export function get_number_in_range(mensagem, min, max){
    const numero = get_number(mensagem)
  
    if (numero < min || numero > max){
      print('Número inválido! Digite novamente')
      return get_number_in_range(mensagem, min, max)
    }
  
    return numero
  }

  export function print(mensagem){
    console.log(mensagem)
  }