import { get_number, get_number_positive } from "./utilss.js";

////// VERSÃO   TRADICIONAL //////

 export function inicializar_automatico(tamanho, min, max) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * (max - min + 1)) + min);   
    }
    return vetor;
}
export function inicializar_com_valores_informados() {
    const tamanho = get_number_positive('Número de elementos para o vetor: ');

    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        let valor = get_number(`Valor para o índice ${i}: `);
        vetor.push(valor);
    }
    return vetor;
}
export function resetar_vetor(){
    const valor_padrao = get_number('Digite um valor padrão: ')
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao;
    }
    print(`Vetor resetado: [${vetor.join(', ')}]`)
}
export function somatorio_valores(){
    let somatorio = 0
    for (let i = 0; i < vetor.length; i++){
        somatorio = somatorio + vetor[i]
    }
}
export function media_valores(){
    return somatorio_valores() / vetor.length;
}
export function valores_positivos(){
    let positivos = [];
    for (let i = 0; i < vetor.length; i++ ){
        if (vetor[i] > 0){
            positivos.push(vetor[i]);
        }
    }
    //mostrando o resultado
    print(`Valores positivos: [${positivos.join(', ')}]`)
    print(`Quantidade de positivos: ${positivos.length}`)
}
export function valores_negativos(){
    let negativos = [];
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            negativos.push(vetor[i])
        }
    }
    print(`Valores negativos: [${negativos.join(', ')}] `)
    print(`Quantidade de negativos: ${negativos.length}`)
}
export function multiplicar_por_um_valor(){
    const numero = get_number('Valor a qual será multiplicado: ')
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i] * numero
    }
    print(`Valores multiplicados: [${vetor.join(', ')}]`)
}
export function elevar_a_um_valor(){
    const numero2 = get_number('Valor a qual será elevado: ')
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i] ** numero2
    }
    print(`Valores elevados: [${vetor.join(', ')}] `)
}
export function substituir(){
    const minimo = get_number('Valor minimo: ')
    const maximo = get_number('Valor maximo: ')
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            vetor[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    print(`Valores negativos substituidos: [${vetor.join(', ')}]`)
}
export function ordenar_valores(){

}
export function embaralhar_valores(){

}
export function adicionar_valores(){

}
export function salvar_valores_arquivo() {
    const nome_arquivo = get_number('Nome do arquivo: ');
    fs.writeFileSync(nome_arquivo, JSON.stringify(vetor));
    print(`Valores salvos em ${nome_arquivo}`);
}