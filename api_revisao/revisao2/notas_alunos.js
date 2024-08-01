import {  get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    var matricula = get_number('matricula: ')

    let total_aprovados = 0;
    let total_reprovados = 0;
    let total_alunos = 0;


    while(matricula != 0){
        var nota1 = get_number('nota 1: ')
        var nota2 = get_number('nota 2: ')
        var nota3 = get_number('nota 3: ')

        const media = (nota1 + nota2 + nota3) / 3

        if(media >= 7){
            total_aprovados += 1;
            total_alunos += 1;
        }else if( media < 7){
            total_reprovados += 1;
            total_alunos += 1;
        }
    matricula = get_number('matricula: ')
    }
    const resultado = `
    --------BOLETIM--------
    APROVADOS: ${total_aprovados}
    REPROVADOS: ${total_reprovados}
    TOTAL DE ALUNOS: ${total_alunos}
    -----------------------`

    print(resultado)


}
main()