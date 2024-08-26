import { get_number_positive,get_number, print } from "./utilss.js"
import { inicializar_automatico, inicializar_com_valores_informados, resetar_vetor, somatorio_valores, media_valores, valores_positivos, valores_negativos, multiplicar_por_um_valor, elevar_a_um_valor, substituir } from "./vetor_funcionalidades.js"; 

let vetor = [];

/// VERSÃO TRADICIONAL 

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
        Inicializar();
    }
    else if(opcao === 2){
        print(`Vetor: [${vetor.join(', ')}]`);
    
    }else if(opcao === 3){  //resetar o vetor ---> vai pedir um número padrão e modificar a lista para ter todos os valores iguais
        resetar_vetor();
    }
    else if(opcao === 4){ //qtd de itens
        print(`Quantidade de itens do vetor: ${vetor.length}`)
    }
    else if(opcao === 5) {

    }
    else if(opcao === 6){
        somatorio_valores();
    }
    else if (opcao === 7){   //média dos valores
        let media = media_valores();
        print(`Média dos valores: ${media}`)
    }
    else if(opcao === 8){   //mostrar valores positivos e quantidade
       valores_positivos();
    }
    else if(opcao === 9){  //valores negativos
        valores_negativos();   
    }
    else if(opcao === 10){
        atualizar_valores();
    }
    else if(opcao === 11){
        adicionar_valores();
    }
    else if(opcao === 12){
        remover_itens();      //
    }
    else if(opcao === 13){
        remover_por_posicao();
    }
    else if(opcao === 14){
        editar_valor_especifico();
    }
    else if(opcao === 15){
        salvar_valores_arquivo();
    } 
    else if(opcao === 16){  //sair
         print('---VOCÊ ESTÁ SAINDO------')
         const sair_ou_nao = get_number_positive('Tem certeza que deseja sair?  (1 - sim (encerrar) ou 2 - não (voltar ao menu)')
         if (sair_ou_nao === 1){
            process.exit(0);
         }
         else if(sair_ou_nao === 2){
            print(menu);
            opcao = get_number_positive('Escolha sua opcão: ')
         }
         else{
            print('OPÇÃO INVÁLIDA!!')
         }
    }
}
function Inicializar(){
    print(`-----Informe como você quer INICIALIZAR:------
        1 - Vetor com dados automáticos
        2 - Informar valores
        3 - Carregar arquivo
        --------------------------------------------------`)
        const opcao_inicializar = get_number_positive('Escolha sua opção: ')
    

        if(opcao_inicializar === 1){ //vetor com dados automaticos
            let tamanho = get_number_positive('Tamanho do vetor: ')
            let minimo = get_number('Minimo: ')
            let maximo = get_number('Maximo: ')
            vetor = inicializar_automatico(tamanho, minimo, maximo)

        }else if(opcao_inicializar === 2){ //informar valores
            vetor = inicializar_com_valores_informados();
        }
        else if(opcao_inicializar === 3){ //carregar arquivos
            let nome_arquivo = get_number('Nome do arquivo: ')
            vetor = JSON.parse(fs.readFileSync(nome_arquivo));
        }
        else{
            print('Opção Inválida!!')
        }
        print(`Vetor inicializado: ${vetor}`)
        
}
function atualizar_valores(){
    print(`
        ------Atualizar todos os valores por uma das regras:------------------
        1 - Multiplicar por um valor
        2 - Elevar a um valor (exponenciação)
        3 - Reduzir a uma fração
        4 - Substituir valores negativos por um número aleatório de uma faixa
        5 - Ordenar valores
        6 - Embaralhar valores
        ----------------------------------------------------------------------`)
        const opcao_atualizar = get_number('Escolha sua opção: ')

        if (opcao_atualizar === 1){
            multiplicar_por_um_valor();
        }
        else if(opcao_atualizar === 2){
            elevar_a_um_valor();
        }
        else if(opcao === 3){
            reduzir_a_uma_fracao();   //não entendi 
        }
        else if(opcao === 4){
            substituir();
        }
        else if(opcao === 5){
            ordenar_valores();      //tentar dnv
        }
        else if(opcao === 6){
            embaralhar_valores();   //incompleta
        }else{
            print('-----OPÇÃO INVÁLIDA!!!------')
        }
}
menu()