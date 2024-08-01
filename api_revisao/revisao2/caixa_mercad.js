import {  get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    const nome_produto = get_text('nome do produto: ')
    const preco = get_number('preço do produto: ')
    const quantidade = get_number('quantidade comprada: ')

    while(nome_produto != 'FIM'){
        let valor_total = quantidade * preco
        const desconto = calcular_desconto(quantidade, valor_total);
        valor_total = valor_total + desconto      
    }

    const resultado = `
    ---------RECIBO----------------
    - PRODUTO: ${nome_produto}
    - PREÇO: ${preco}
    - QUANTIDADE: ${quantidade}
    - DESCONTO: ${desconto}
    - VALOR TOTAL DA COMPRA: ${valor_total} 
    -------------------------------`
    print(resultado)

}
function calcular_desconto(quantidade, valor_total){
    if(quantidade <= 10){
        return 0
    }else if(11 <= quantidade <= 20){
        return (10/100) * (valor_total)
    }else if(21 <= quantidade <= 50){
        return (20/100) * (valor_total)
    }else if(quantidade > 50){
        return (25/100) * (valor_total)
    }
}
main()