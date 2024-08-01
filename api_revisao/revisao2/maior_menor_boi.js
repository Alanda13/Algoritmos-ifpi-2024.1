import {  get_number, print } from '../utils/io_utils.js'

function main(){
    var num_identificacao = get_number('numero de identificacao: ')

    let num_identificacao_mais_magro = 0;
    let peso_mais_magro = 0;
    let num_identificacao_mais_gordo = 0;
    let peso_mais_gordo = 0;


    while(num_identificacao != 0){
        var peso = get_number('peso do boi: ')

        if (peso > peso_mais_gordo || !peso_mais_gordo){
            peso_mais_gordo = peso;
            num_identificacao_mais_gordo = num_identificacao;
        }
        if (peso < peso_mais_magro || !peso_mais_magro){
            peso_mais_magro = peso;
            num_identificacao_mais_magro = num_identificacao;
        }
        num_identificacao = get_number('numero de identificacao: ')     
    }
    const resultado = `
    ------- RESULTADO ---------
    -- BOI MAIS MAGRO:
    -NUM IDENTIFICAÇÃO: ${num_identificacao_mais_magro}
    -PESO: ${peso_mais_magro} kg
    -
    -- BOI MAIS GORDO:
    -NUM IDENTIFICAÇÃO: ${num_identificacao_mais_gordo} 
    -PESO:${peso_mais_gordo} kg
    ----------------------------`

    print(resultado)

}
main()