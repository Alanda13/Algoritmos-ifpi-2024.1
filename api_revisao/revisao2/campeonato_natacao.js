import {  get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    var num_prova = get_number('numero da prova: ')
    var qtd_nadadores = get_number('quantidade de nadadores: ')

    let total_pontos_a = 0;
    let total_pontos_b = 0;

    while( num_prova != 0 && qtd_nadadores != 0){
        let contador = 0;
        while(contador< qtd_nadadores){
        let nome = get_text('nome do nadador: ')
        let classificacao = get_number('classificação: ')
        let tempo = get_number('tempo: ')
        let clube = get_text('clube: (a ou b)')

        const pontos_obtidos = calcular_pontos(classificacao);

        if (clube === 'a'){
            total_pontos_a = pontos_obtidos
        }else if(clube === 'b'){
            total_pontos_b = pontos_obtidos
        }
        contador++
        }
        num_prova = get_number('numero da prova: ')
        qtd_nadadores = get_number('quantidade de nadadores: ')
    }
    const vencedor = calcular_vencedor(total_pontos_a, total_pontos_b);

    const resultado = `
    ------- RESULTADO ---------
    CLUBE A: ${total_pontos_a}
    CLUBE B: ${total_pontos_b}
    VENCEDOR: ${vencedor}!!!!
    ---------------------------`
    print(resultado)
    
}
function calcular_pontos(classificacao){
    if(classificacao === 1){
        return 9;
    }else if(classificacao === 2){
        return 6;
    }else if(classificacao === 3){
        return 4;
    }else{
        return 3;
    }
}
function calcular_vencedor(total_pontos_a, total_pontos_b){
    if (total_pontos_a > total_pontos_b){
        return 'Clube a'
    }else if(total_pontos_b > total_pontos_a){
        return 'Clube b'
    }else{
        'Empate'
    }
}
main()