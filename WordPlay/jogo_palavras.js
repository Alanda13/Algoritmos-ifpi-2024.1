import { question } from 'readline-sync'; 
import {readFileSync} from 'fs';
import { print, qual_opcao } from './utils.js';


function menu(){
    console.clear()

    let opções = `
    --------------------------------MENU-----------------------------------
    1 - Mostrar palavras com mais de 20 caracteres.
    2 - Mostrar apenas as palavras que não tem a letra "e" 
    3 - Quantidade de palavras que não possuem as --letras proibidas--
    4 - uses_only
    5 - uses_all
    6 - is_abecedarian
    7 - Sair
    ------------------------------------------------------------------------
    \n Sua opção: `

    print(opções)

}
function main(){
    let opcao = qual_opcao()

    while(opcao != 0){
        if( opcao == 1){
            let resultado = palavras_maiores_20()
            print(resultado)

        }else if(opcao === 2){
            let palavra = question('Digite uma palavra: ')
            let resultado = palavra_sem_e()
            let resultado2 = resultado? "não possui" : "possui"
            print(`Essa palavra ${resultado2} a letra 'e'.`)
    
        }else if(opcao === 3){
            let resultado3 = palavras_sem_letras_proibidas()
    
        }else if(opcao === 4){
    
        }else if(opcao === 5){
    
        }else if(opcao === 6){
    
        }
    opcao = qual_opcao()
    
    }
}
function palavra_sem_e(word){ //opcao 2
    word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'e') {
            return true;
        }
    }
    return false;

}
function palavras_maiores_20(words) { //opcao 1
    let count = 0;
    console.log("Palavras com mais de 20 letras:");
    lines.forEach(line => {
        const word = line.trim();
        if (word.length >= 20) {
            console.log(`${word.length} letras > ${word}`);
            count++;
        }
    });
    console.log(`Total de palavras com mais de 20 letras: ${count}`);
}
function palavras_sem_letras_proibidas(words){
    const letras_proibidas = question('Letras proibidas: ')

    while(index < data.length){
        const char = data[index];

        if(char === '\n'){
            if(words.lenght > 0){
                let letras_proibidas = false;
                for(let i = 0; i < word.lenght; i++){
                    if (letras_proibidas.includes(words[i])){
                        letras_proibidas = true;
                        break;
                    }
                }
                if(!letras_proibidas){
                    count++;
                    print(words);
                }
            }
        }
    }
    index++
}
main()