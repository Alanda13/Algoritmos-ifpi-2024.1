import {question} from "readline-sync"

function main() {
    console.log('---Comparando Datas:---')
    console.log('---Data 1:---')
    const dia1 = parseInt(question("Digite o dia: "));
    const mes1 = parseInt(question("Digite o mes (1 a 12): "));
    const ano1 = parseInt(question("Digite o ano: "));
    console.log('  ')
    console.log('---Data 2: ---')
    const dia2 = parseInt(question("Digite o dia: "));
    const mes2 = parseInt(question("Digite o mes (1 a 12): "));
    const ano2 = parseInt(question("Digite o ano: ")); 

    const resultado = compararDatas(dia1, mes1, ano1, dia2, mes2, ano2)
    console.log(resultado)
}

function compararDatas(dia1, mes1, ano1, dia2, mes2, ano2) {
    if (ano1 > ano2) {
        return "A primeira data é mais recente!";
    } else if (ano1 < ano2) {
        return "A segunda data é mais recente!";
    } else {
        if (mes1 > mes2) {
            return "A primeira data é mais recente!";
        } else if (mes1 < mes2) {
            return "A segunda data é mais recente!";
        } else {
            if (dia1 > dia2) {
                return "A primeira data é mais recente!";
            } else if (dia1 < dia2) {
                return "A segunda data é mais recente!";
            } else {
                return "As datas são iguais!";
            }
        }
    }
}
main()

