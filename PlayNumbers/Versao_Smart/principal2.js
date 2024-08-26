import { get_number_positive,get_number, print } from "./utilss.js"
import {inicializacao, mostrar_valores, resetar, qtd_itens, menor_maior_valor, somatorio, media, valores_posit, valores_neg, atualizar } from "./vetor_funcionalidades_2.js"

/// VERSÃO SMART 
let vetor = []

function menu(){
    let menu = `
    ---------------------MENU------------------------
    1 - Inicializar vetor numérico
    2 - Mostrar todos os valores
    3 - Resetar vetor
    4 - Ver quantidades de itens no vetor
    5 - Ver menor e maior valores e suas posições
    6 - Somatório dos valores
    7 - Média dos valores
    8 - Mostrar valores positivos e quantidade
    9 - Mostrar valores negativos e quantidade
    10 - Atualizar valores
    11 - Adicionar novos valores
    12 - Remover itens pos valor exato
    13 - Remover por posição
    14 - Editar valor específico por posição
    15 - Salvar valores em arquivo
    16 - Sair 
    --------------------------------------------------`
    print(menu)
    let opcao = get_number_positive('Escolha sua opcão: ')

    if (opcao === 1){
        inicializacao();  ///concluido
    }else if(opcao === 2){
        mostrar_valores();  ///concluido
    }else if(opcao === 3){
        const valor = get_number('Valor a qual será resetado: ')   //concluido
        vetor = resetar(vetor, valor);
        resetar();
    }else if(opcao === 4){   //concluido
        print(`Quantidade de itens no vetor: ${qtd_itens(vetor)}`)  //concluido
    }else if(opcao === 5){
        menor_maior_valor();   //concluido
    }
    else if(opcao === 6){   //concluido
        somatorio();
    }else if(opcao === 7){  //concluido
        media();
    }else if(opcao === 8){   //CONCLUIDO
        valores_posit();
    }else if(opcao === 9){  //concluido
        valores_neg();
    }else if(opcao === 10){   
        atualizar();
    }else if(opcao === 11){
        adcionar_novos_valores();   //CONCLUIDO
    }
    else if(opcao === 12){

    }else if(opcao === 13){

    }else if(opcao === 14){

    }else if(opcao === 15){

    }else if(opcao === 16){
        print('-----SAINDO DO PROGRAMA!!!-------')  //CONCLUIDO
        fs.writeFileSync('vetor.json', JSON.stringify(vetor));
        process.exit();
    }
    

}
menu();
