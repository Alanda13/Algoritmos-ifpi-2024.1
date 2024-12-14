import {question} from "readline-sync"

function calcularIdade(dataNascimento, dataAtual) {
    let idade = {};

    // Calculando a diferença de anos
    idade.anos = dataAtual.ano - dataNascimento.ano;

    // Verifica se já fez aniversário neste ano
    if (dataAtual.mes < dataNascimento.mes || (dataAtual.mes === dataNascimento.mes && dataAtual.dia < dataNascimento.dia)) {
        idade.anos--;
    }

    // Calcula a diferença de meses
    idade.meses = (dataAtual.mes - dataNascimento.mes + 12) % 12;

    // Calcula a diferença de dias
    if (dataAtual.dia < dataNascimento.dia) {
        idade.dias = dataAtual.dia + (30 - dataNascimento.dia);
    } else {
        idade.dias = dataAtual.dia - dataNascimento.dia;
    }

    return idade;
}

function main() {
    // Solicitar data de nascimento ao usuário
    const dataNascimento = {
        dia: parseInt(question("Digite o dia de nascimento:")),
        mes: parseInt(question("Digite o mês de nascimento:")),
        ano: parseInt(question("Digite o ano de nascimento:"))
    };

    const dataAtual = {
        dia: parseInt(question("Digite o dia atual:")),
        mes: parseInt(question("Digite o mês atual:")),
        ano: parseInt(question("Digite o ano atual:"))
    };

    const idadeCalculada = calcularIdade(dataNascimento, dataAtual)
    console.log(`Idade: ${idadeCalculada.anos} anos, ${idadeCalculada.meses} meses e ${idadeCalculada.dias} dias.`);
}
main();
