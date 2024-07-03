import { print, get_number } from "../utils/io_utils.js";

function main() {
    const N = get_number('Número de habitantes: ');

    let totalSalario = 0;
    let totalFilhos = 0;
    let contadorSalarioAteMil = 0;

    let i = 1;
    while (i <= N) {
        const salario = get_number('Salário do habitante (em R$): ');
        const numFilhos = get_number('Número de filhos do habitante:  ');

        totalSalario += salario;
        totalFilhos += numFilhos;

        if (salario <= 1000) {
            contadorSalarioAteMil++;
        }

        i++;
    }

    const mediaSalario = totalSalario / N;
    const mediaFilhos = totalFilhos / N;
    const percentualSalarioAteMil = (contadorSalarioAteMil / N) * 100;

    print('Média de salário da população: R$ ' + mediaSalario.toFixed(2));
    print('Média de número de filhos: ' + mediaFilhos.toFixed(2));
    print('Percentual de pessoas com salário de até R$ 1.000,00: ' + percentualSalarioAteMil.toFixed(2) + '%');
}

main();
