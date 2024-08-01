import {  get_number, print } from '../utils/io_utils.js'

function main(){
    let pop_A = 200000
    let pop_B = 800000

    let qtd_anos = 0;

    

    while(pop_A <= pop_B){
        const taxa_anual_A = calcular_taxa_anual_A(pop_A)
        pop_A = pop_A + taxa_anual_A
        const taxa_anual_B = calcular_taxa_anual_B(pop_B)
        pop_B = pop_B + taxa_anual_B
        qtd_anos += 1;
    }

    const resultado = `Serão necessários ${qtd_anos} anos para a população da cidade A ultrapassar a população da cidade B.`
    print(resultado)

}
function calcular_taxa_anual_A(a){
    return (3.5 / 100) * a
}
function calcular_taxa_anual_B(b){
    return (1.35 / 100) * b
}
main()