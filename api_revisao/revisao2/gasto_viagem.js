import {  get_number, print } from '../utils/io_utils.js'

function main(){
    const distancia = get_number('distancia entre sua cidade e a cidade destino em km: ')
    const valor_gasolina =  get_number('valor da gasolina em L: ')
    const gasto_gasolina = calcular_valor_gasto_gasolina(distancia, valor_gasolina)
    const acrescimo = calcular_acrescimo(distancia)
    const gasto_total_R$= (gasto_gasolina * 2) + acrescimo

    print(`o valor total gasto na viagem em R$ será: ${gasto_total_R$.toFixed(2)}`)

}
function calcular_valor_gasto_gasolina(distancia, valor_gasolina){
    return (distancia/12) * valor_gasolina
}
function calcular_acrescimo(distancia){
    return (20/100) * distancia

}
main()