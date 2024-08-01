// Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
//pode levantar voo ou não.

import {  get_number, get_positive_number, get_text, print } from '../utils/io_utils.js'

function main(){
    const num_containers = get_number('numero de containers: ')
    const peso_carga= computar_peso_containers(num_containers) 

    let num_bilhete = get_number('numero do bilhete: ')
    let contador_bagagem = 0;
    let contador_passageiros = 0;

    while(num_bilhete != 0){
        contador_passageiros++
        const quantidade_bagagem = get_number('quantidade de bagagem: ')
        contador_bagagem += quantidade_bagagem

        num_bilhete = get_number('numero do bilhete: ')
    }

    const peso_passageiros = (contador_passageiros * 70) + (contador_bagagem * 10)
    const combustivel_possivel = 500000 - (peso_carga + peso_passageiros)
    const combustivel_possivel_l = peso_combustivel_possivel / 1.5
    const decolagem_autorizada = combustivel_possivel_l >= 10_000 ? 'SIM' : 'NÃO'
    


    const resultado = `
    --------------------------------------------
    QUANTIDADE DE PASSAGEIROS: ${contador_passageiros}
    TOTAL DE VOLUME DE BAGAGEM: ${contador_bagagem}
    PESO DOS PASSAGEIROS: ${peso_passageiros}
    PESO DA CARGA: ${peso_carga}
    QUANTIDADE POSSÍVEL DE COMBUSTÍVEL: ${combustivel_possivel_l}
    LIBERAÇÃO DE DECOLAGEM: ${decolagem_autorizada}
    ---------------------------------------------`
    print(resultado)
    

}
function computar_peso_containers(quantidade){
    let num_containers_lidos = 0;
    let peso_total = 0;

    while(num_containers_lidos < quantidade){
        const peso = get_positive_number('peso container: ')
        peso_total = peso_total + peso

        num_containers_lidos += 1
    }

    return peso_total;
}
main()