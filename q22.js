import {question} from "readline-sync"

function main() {
    console.log('---Calculando a duração do jogo---')
    const inicio_hora = parseInt(question("Digite a hora de inicio do jogo:"));
    const inicio_minuto = parseInt(question("Digite os minutos de inicio do jogo:"));
    const fim_hora = parseInt(question("Digite a hora de fim do jogo:"));
    const fim_minuto = parseInt(question("Digite os minutos de fim do jogo:"));

    // Converte as horas e minutos para minutos totais
    const inicioTotalMinutos = inicio_hora * 60 + inicio_minuto;
    const fimTotalMinutos = fim_hora * 60 + fim_minuto;

    // Calcula a diferença em minutos
    let duracaoTotal = fimTotalMinutos - inicioTotalMinutos;

    // Garante que a duração seja positiva
    if (duracaoTotal < 0) {
        duracaoTotal += 24 * 60;
    }

    // Converte a duração total de minutos para horas e minutos
    const duracaoHoras = Math.floor(duracaoTotal / 60);
    const duracaoMinutos = duracaoTotal % 60;

    // Exibe a duração do jogo
    console.log(`A duração do jogo é de ${duracaoHoras} horas e ${duracaoMinutos} minutos.`);
}
main();
