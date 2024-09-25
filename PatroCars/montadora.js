import {print, get_number, writeToFile,readFromFile, get_number_in_range} from "./utils.js"
import { ulid } from 'ulidx';
import {question} from "readline-sync"

let montadoras = [];

export function carregar_montadoras() {
    const dados = readFromFile('data/montadoras.txt');
    if (dados) {
        montadoras = dados.map(line => {
            const [id, nome, pais, ano] = line.split('|');
            return { 
                   id, 
                   nome, 
                   pais,
                   ano: isNaN(Number(ano)) ? null : Number(ano)  //verifica se ano é número
            };
        });
        print(montadoras);
    }else{
        montadoras = []
    }
}

export function cadastrar_montadora(nome, pais, ano) {
    const nova_montadora = {
        id: ulid(), 
        nome,
        pais,
        ano,
    };

    montadoras.push(nova_montadora); // Adiciona a nova montadora ao vetor
    writeToFile('data/montadoras.txt', montadoras); // Grava no arquivo
    print("Montadora cadastrada com sucesso!");
}


export function atualizar_montadora(id){
    const montadora = montadoras.find(m => m.id === id)

    if(!montadora){
        print("Montadora não encontrada!!")
        return;
    }

    const novo_nome = get_text(`Novo nome (atual: ${montadora.nome}): `) || montadora.nome;
    const novo_pais = get_text(`Novo país (atual: ${montadora.pais}): `) || montadora.pais;
    const novo_ano = get_number(`Novo ano de fundação (atual: ${montadora.ano_fundacao}): `) || montadora.ano_fundacao;
    
    montadora.nome = novo_nome;
    montadora.pais = novo_pais;
    montadora.ano = novo_ano;
    writeToFile('data/montadoras.txt', montadoras);
    console.log("Montadora atualizada com sucesso!");

}

export function remover_montadora(id){
    const montadora = montadoras.find( m => m.id === id);
    if (!montadora){
        console.log("-------MONTADORA-NÃO-FOI-ENCONTRADA!!!--------");
        return;
    }
    const confirmar = get_text("Tem certeza que deseja remover? (s/n)");
    if (confirmar.toLowerCase() === 's'){
        montadoras = montadoras.filter(m => m.id !== id);
        writeToFile('data/montadoras.txt', montadoras);
        print("-------MONTADORA REMOVIDA COM SUCESSO!!!-----------")
    }

}
//aqui vai verificar se a lista de montadora está vazia
export function listar_montadoras(){
    if (!montadoras || montadoras.length === 0){     
        print("NENHUMA MONTADORA FOI CADASTRADA!!!")
        return [];
    }
    //aqui ele irá perguntar ao usuário, se ele deseja ordenar a lista de montadoras, se sim, será ordenada de acordo com a escolha do usuário
    const ordenar = get_number_in_range(`--------------------------
        Ordenar montadoras por: 
        1 - Nome
        2 - País
        3 - Ano de fundação
        0 - Não ordenar
        Sua opção: 
        --------------------------`, 0, 3);

        let montadoras_ordenadas = [...montadoras];  //cópia da lista original

        if (ordenar === 1){
            montadoras_ordenadas.sort((a,b) => {
                if (a.nome < b.nome) return -1;
                if (a.nome > b.nome) return 1;
                return 0;
            //compara os nomes da montadora, se a.nome for menor que b.nome, a vai vir antes retornando -1
            //se for maior, retorna 1 e se for iguais retorn 0
            });
        }else if (ordenar === 2){  //vai funcionar da mesma forma, porém, usa o atributo pais
            montadoras_ordenadas.sort((a,b) => {
                if (a.pais < b.pais) return -1; 
                if (a.pais > b.pais) return 1;
                return 0;
            });
        }else if (ordenar === 3){    //como aqui o atributo "ano" é número, basta fazer a subtração para determinar a ordem
            montadoras_ordenadas.sort((a,b) => a.ano - b.ano);
        }
        print(montadoras_ordenadas.map(m => `${m.id} - ${m.nome} - ${m.pais} - ${m.ano}`).join('\n'));

}
