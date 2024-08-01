//Um banco aplica um juro de 0.85% mensal sobre o saldo devedor de um empréstimo (valor ainda a ser pago).
//Com um empréstimo de R$ 3.000,00, um pagamento da parcelade R$ 200,00 é feito todo mês.
//Escreva um programa que calcule quantos meses são necessários para se concluir o pagamento do empréstimo, ou
//seja, zerar o saldo devedor. Exiba também qual o valor total de Juros que foi pago, ou seja, além do valor que foi pego (R$ 3.000).

import {  get_number, print } from '../utils/io_utils.js'

function main(){
    const valor_emprestimo = get_number('valor emprestimo: ')
    const valor_parcela = get_number('valor parcela: ')

    let saldo_devedor = valor_emprestimo;
    let meses = 0;
    let total_juros = 0;

    while(saldo_devedor > 0){
        saldo_devedor *= 0.0085;
        saldo_devedor -= valor_parcela;
        if(saldo_devedor > 0){
            meses++;
        }
        const resultado = `
        --------------------------------------------------
        VALOR EMPRESTIMO : ${valor_emprestimo}
        VALOR DA PARCELA : ${valor_parcela}
        MESES NECESSARIO PARA CONCLUIR PAGAMENTO: ${meses}
        ----------------------------------------------------`
        print(resultado)
    }

}
main()