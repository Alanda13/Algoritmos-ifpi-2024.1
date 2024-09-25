import { writeToFile, readFromFile} from './utils.js';  
import { ulid } from 'ulidx';
import {question} from "readline-sync"

let veiculos = []

export function carregar_veículos(){
    const dados = readFromFile('data/veiculos.txt')

    if (dados) {
        veiculos = dados.map(line => {
            const [id, modelo_id, cor, ano_fabricacao, ano_modelo, valor, placa, vendido] = line.split('|');
            return {
                id,
                modelo_id,
                cor,
                ano_fabricacao: Number(ano_fabricacao),
                ano_modelo: Number(ano_modelo),
                valor: Number(valor),
                placa,
                vendido: vendido === 'true',
            };
        });
    }
}
export function cadastrar_veiculo(modelo_id, cor, ano_fabricacao, ano_modelo, valor, placa){
    const novo_veiculo = { id: ulid(), modelo_id, cor, ano_fabricacao, ano_modelo, valor, placa, vendido: false };
    veiculos.push(novo_veiculo); 
    //objeto novo veiculo criado, o id vai ser criado a partir da  função ulid que vai criar um  identificador unico 
    //atributo "vendido" iniciado com False para indicar que o veiculo ainda nao foi vendido 
    writeToFile('data/veiculos.txt', veiculos);

}
export function atualizar_veiculo(id){
    const veiculo = veiculos.find(v => v.id === id);
    if(!veiculo){
        print("Veículo não foi encontrado!!!!")
        return;
    }
    const nova_cor = getText(`Nova cor (atual: ${veiculo.cor}): `) || veiculo.cor;
    const novo_ano_de_fabricacao = getNumber(`Novo ano de fabricação (atual: ${veiculo.ano_fabricacao}): `) || veiculo.ano_fabricacao;
    const novo_ano_modelo = getNumber(`Novo ano modelo (atual: ${veiculo.ano_modelo}): `) || veiculo.ano_modelo;
    const novo_valor = getNumber(`Novo valor (atual: ${veiculo.valor}): `) || veiculo.valor;
    const nova_placa = getText(`Nova placa (atual: ${veiculo.placa}): `) || veiculo.placa;

}

export function listar_veiculos(){
    return veiculos
}
export function remover_veiculo(){
    const veiculo = veiculos.find(v => v.id === id);
    if (!veiculo) {
        console.log("Veículo não encontrado.");
        return;
}
const confirmar = getText("Tem certeza que deseja remover? (s/n): ");
if (confirmar.toLowerCase() === 's') {
    veiculos = veiculos.filter(v => v.id !== id);
    writeToFile('data/veiculos.txt', veiculos);
    console.log("Veículo removido com sucesso!");
}
}

export function vender_veiculo(){
    const veiculo = veiculos.find(v => v.id == id);
    if(!veiculo){
        print("Veículo não foi encontrado!")
        return;
    }
    veiculo.vendido = true;
    writeToFile('data/veiculos.txt', veiculos);
    print("Veículo vendido com sucesso!");
}
