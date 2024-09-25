import { writeToFile, readFromFile } from './utils.js';
import { ulid } from 'ulidx';
import {question} from "readline-sync"

let modelos = [];

export function carregar_modelos() {
    const dados = readFromFile('data/modelos.txt');
    if (dados) {
        modelos = dados.map(line => {
            const [id, nome, montadora_id, valor_referencia, motorizacao, turbo, automatico] = line.split('|');
            return {
                id,
                nome,
                montadora_id,
                valor_referencia: Number(valor_referencia),
                motorizacao: Number(motorizacao),
                turbo: turbo === 'true',
                automatico: automatico === 'true',
            };
        });
    }
}

export function cadastrar_modelo(nome, montadora_id, valor_referencia, motorizacao, turbo, automatico) {
    const novoModelo = { id: ulid(), nome, montadora_id, valor_referencia, motorizacao, turbo, automatico };
    modelos.push(novoModelo);
    writeToFile('data/modelos.txt', modelos);
}

export function listar_modelos() {
    return modelos;
}

export function atualizar_modelo(id) {
    const modelo = modelos.find(m => m.id === id);
    if (!modelo) {
        console.log("Modelo não encontrado.");
        return;
    }

    const novoNome = get_text(`Novo nome (atual: ${modelo.nome}): `) || modelo.nome;
    const novoValor = get_number(`Novo valor (atual: ${modelo.valor_referencia}): `) || modelo.valor_referencia;
    const novaMotorizacao = get_number(`Nova motorização (atual: ${modelo.motorizacao}): `) || modelo.motorizacao;
    const novoTurbo = get_text(`Turbo (atual: ${modelo.turbo ? 'Sim' : 'Não'}): `) === 'Sim';
    const novoAutomatico = get_text(`Automático (atual: ${modelo.automatico ? 'Sim' : 'Não'}): `) === 'Sim';

    modelo.nome = novoNome;
    modelo.valor_referencia = novoValor;
    modelo.motorizacao = novaMotorizacao;
    modelo.turbo = novoTurbo;
    modelo.automatico = novoAutomatico;
    writeToFile('data/modelos.txt', modelos);
    console.log("Modelo atualizado com sucesso!");
}

export function remover_modelo(id) {
    const modelo = modelos.find(m => m.id === id);
    if (!modelo) {
        console.log("--------Modelo não encontrado----------");
        return;
    }

    const confirmar = get_text("Tem certeza que deseja remover? (s/n): ");
    if (confirmar.toLowerCase() === 's') {
        modelos = modelos.filter(m => m.id !== id);
        writeToFile('data/modelos.txt', modelos);
        print("-------Modelo removido com sucesso!----------");
    }
}
