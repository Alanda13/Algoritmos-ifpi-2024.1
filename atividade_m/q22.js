import { print, get_number } from "../utils/io_utils.js";

function main() {
    const N = get_number('Digite o número de fichas: ');

    let boi_maismagro = { identificacao: null, peso: Infinity };
    let boi_maisgordo = { identificacao: null, peso: -Infinity };

    let i = 1;
    while (i <= N) {
        const identificacao = get_number('Número de identificação do boi:');
        const peso = get_number('Peso do boi (em kg): ');

        if (peso < boi_maismagro.peso) {
            boi_maismagro = { identificacao, peso };
        }

        if (peso > boi_maisgordo.peso) {
            boi_maisgordo = { identificacao, peso };
        }

        i++;
    }

    print('----------------------------------------------');
    print(`Peso do boi mais gordo (em Kg): ${boi_maisgordo.peso}`);
    print(`Nº de Identificação do boi mais gordo: ${boi_maisgordo.identificacao}`);
    print(`Peso do boi mais magro (em Kg): ${boi_maismagro.peso}`);
    print(`Nº de Identificação do boi mais magro: ${boi_maismagro.identificacao}`);
    print('----------------------------------------------');
}

main();
