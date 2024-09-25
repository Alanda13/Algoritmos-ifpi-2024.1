//PATROCARS

import {get_number, get_number_in_range, get_text, print} from "./utils.js"
import { carregar_montadoras, cadastrar_montadora, listar_montadoras, atualizar_montadora, remover_montadora } from './montadora.js';
import {atualizar_veiculo, carregar_veículos,cadastrar_veiculo,listar_veiculos, remover_veiculo, vender_veiculo} from "./veiculo.js"
import {carregar_modelos,cadastrar_modelo, listar_modelos, atualizar_modelo, remover_modelo   } from "./modelo.js"

let montadoras = []

function ShowMenu(){
    print(`==========PATROCARS===========
        1 - Cadastrar Montadora
        2 - Listar Montadoras 
        3 - Atualizar Montadora
        4 - Remover alguma montadora
        5 - Cadastrar modelos
        6 - Listar modelos
        7 - Atualizar modelo
        8 - Remover modelo
        9 - Cadastrar veiculo
        10 - Listar veículos 
        11 - Atualizar veículo 
        12 - Remover veículo 
        13 - Vender veículo
        0 - Sair
        ===================================`)
}

function main(){
    carregar_montadoras();
    print('---MONTADORAS CERREGADAS:-----', montadoras)
    carregar_modelos();
    carregar_veículos();

    let escolha = -1;
    while(escolha !== 0){
        ShowMenu();
        escolha = get_number_in_range('Escolha uma opção: ',0,13);
        switch(escolha){
            case 1:    //opção para cadastrar uma montadora
                const nome = get_text("Nome da montadora: ")
                const pais = get_text('País: ')
                const ano = get_number('Ano de fundação: ')
                cadastrar_montadora(nome, pais, ano);
                break;
            case 2: //opção para listar montadoras
                const montadoras = listar_montadoras();
                if (Array.isArray(montadoras) && montadoras.length > 0){
                print(montadoras.map(m => `${m.id} - ${m.nome} - ${m.pais} - ${m.ano != null ? m.ano: 'Ano não disponivel}'}`).join('\n'));
                }else{
                    print('Não há montadoras para listar!!')
                }
                break; //vai mapear o array de mont.adoras e vai criar uma string com oa dados a partir de cada montadora 
            case 3: //opção para atualizar montadoraa
                atualizar_montadora();
                break; 
            case 4:   //opção para remover algma montadora
                const id_remover = get_text('ID da montadora para ser removido: ')
                remover_montadora(id_remover);
                break;
            case 5: //cadastrando modelo
                const modelo = get_text('Modelo: ')
                const id_montadora = get_text('ID da montadora: ')
                const valor_referencia = get_number('Valor de referencia: ')
                const motorizacao = get_number('Motorização: ')
                const turbo = get_text('Turbo? (responda com Sim ou Não): ' === 'Sim')
                const automatico = get_text('Turbo? (responda com Sim ou Não): ' === 'Sim')
                cadastrar_modelo(modelo, id_montadora, valor_referencia, motorizacao, turbo, automatico);
                break;
            case 6:
                const modelos = listar_modelos();
                print(modelos.map(m => `${m.id} - ${m.nome} - ${m.valor_referencia} - ${m.motorizacao}`).join('\n'));
                //vai mapear o array de modelos pra criar uma string formatada com os dados
                break;
            case 7:
                const id_modelo_para_atualizar = get_text('ID do modelo para ser atualizado: ')
                atualizar_modelo(id_modelo_para_atualizar);
                break;
            case 8:
                //opção para remover modelo
                const id_modelo_para_remover = get_text('ID para ser removido: ')
                remover_modelo(id_modelo_para_remover);
                break;
            case 9: //cadastrar veículos
                const modelo_id = get_text('ID do modelo: ')
                const cor = get_text('Cor do veículo')
                const ano_fabricacao = getNumber("Ano de fabricação: ");
                const ano_modelo = getNumber("Ano do modelo: ");
                const valor = getNumber("Valor do veículo: ");
                const placa = getText("Placa do veículo: ");
                cadastrar_veiculo(modelo_id, cor, ano_fabricacao, ano_modelo, valor, placa);
                break;
            case 10:
                const veiculos = listar_veiculos();
                print(veiculos.map(v => `${v.id} - ${v.modelo_id} - ${v.cor} - ${v.ano_fabricacao} - ${v.placa} - ${v.vendido ? 'Vendido' : 'Disponível'}`).join('\n'));
                break;

            case 11: //atualizar veiculo
                const id_veiculo_para_atualizar = get_text('ID do veículo para atualizar: ')
                atualizar_veiculo(id_veiculo_para_atualizar);
                break;
            case 12:
                const id_veiculo_para_remover = get_text('ID do veiculo para remover: ')
                remover_veiculo(id_veiculo_para_remover);
                break;

            case 13:
                const id_veiculo_para_vender = get_text('ID do veiculo para vender: ')
                vender_veiculo(id_veiculo_para_vender);
                break;
            default:
                break;
        }
    }

}
main()
