import { get_number, get_number_positive, print } from "./utilss.js";

/// VERSÃO SMART

export function inicializacao(tamanho = 10, min = 0, max = 100){
    return Array.from({ length: tamanho }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}
export function mostrar_valores(vetor){
    print(`Valores: ${vetor}`)
}
export function resetar(vetor, valor){
    return vetor.map(() => valor);  //função de mapeamento
}
export function qtd_itens(vetor){ //contar a quantidade de itens do vetor
    return vetor.length;
}
export function menor_maior_valor(vetor) {
    const menor = Math.min(...vetor);
    const maior = Math.max(...vetor);
    print(`Menor valor: ${menor}, \n  Maior valor: ${maior}`);
}
export function somatorio(vetor) {
    return vetor.reduce((acc, val) => acc + val, 0);
}
export function media(vetor){
    return somatorio(vetor)/vetor.length
}
export function valores_posit(vetor){
    const positivos = vetor.filter(val => val > 0);
    print(`-----VALORES POSITIVOS-------`)
    print(`--QUAIS SÃO: ${positivos}`)
    print(`--QUANTIDADE: ${positivos.length}`)
    print('-----------------------------')
}
export function valores_neg(vetor){
    const negativos = vetor.filter(val => val < 0);
    print(`-----VALORES NEGATIVOS-------`)
    print(`--QUAIS SÃO: ${negativos}`)
    print(`--QUANTIDADE: ${negativos.length}`)
    print('-----------------------------')
}
export function atualizar(vetor){
    print(`
        ------------------------------------------------
        ATUALIZAR TODOS OS VALORES POR UMA DAS REGRAS: 
        ------------------------------------------------
        1 - Multiplicar por um valor 
        2 - Elevar a um valor 
        3 - Reduzir a uma fração 
        4 - Substituir valores negativos 
        5 - Ordenar valores 
        6 - Embaralhar valores 
        -------------------------------------------------`)
        const opcao2 = get_number_positive('Escolha uma opção: ')

        if(opcao2 === 1){
            return vetor.map(val => val * pedirNumero('Valor para multiplicar: '));
        }
        else if (opcao2 === 2) {
            return vetor.map(val => Math.pow(val, pedirNumero('Valor do expoente: ')));
       } 
       else if (opcao2 === 3) {
          return vetor.map(val => val * pedirNumeroNaFaixa('Valor da fração (por exemplo 1/5): ', 0, 1));
       } 
       else if (opcao2 === 4) {
        const min = pedirNumero('Valor mínimo: ');
        const max = pedirNumero('Valor máximo: ');
        return vetor.map(val => val < 0 ? Math.floor(Math.random() * (max - min + 1)) + min : val);
       } 
       else if (opcao2 === 5) {
           return vetor.sort((a, b) => a - b);
       } 
       else if (opcao2 === 6) {
            return vetor.sort(() => Math.random() - 0.5);
       } 
       else {
        console.log('Opção inválida!');
            return vetor;
        }

}
export function adcionar_novos_valores(){
    const quantidade = pedirNumero('Quantidade de valores a adicionar: ');
    const novosValores = Array.from({ length: quantidade }, () => pedirNumero('Valor: '));
    return vetor.concat(novosValores);
}


