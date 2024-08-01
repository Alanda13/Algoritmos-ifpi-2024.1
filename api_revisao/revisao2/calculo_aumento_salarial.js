import {  get_number, print } from '../utils/io_utils.js'

function main(){
    const valor_hora_trabalho = get_number('valor da hora de trabalho: ')
    const horas_trabalhadas = get_number('quantidade de horas trabalhadas: ')
    const salario = valor_hora_trabalho * horas_trabalhadas
    const acrescimo_alimentacao = 10/100 * salario 
    const acrescimo_transporte = 20/100 * salario
    const valor_salario = salario + acrescimo_alimentacao + acrescimo_transporte
    
    print(`o salário do funcionário é igual a: ${valor_salario}`)

}
main()