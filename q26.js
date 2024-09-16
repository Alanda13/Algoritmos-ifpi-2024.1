import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Calculando hipotenusa e catetos do triângulo!---')
    var lado1 = get_number('Digite o 1 lado do triangulo: ')
    var lado2 = get_number('Digite o 2 lado do triangulo: ')
    var lado3 = get_number('Digite o 3 lado do triangulo: ')

    var hipotenusa, cateto1, cateto2;

    if (lado1 >= lado2 && lado1 >= lado3) {
        hipotenusa = lado1;
        cateto1 = lado2;
        cateto2 = lado3;
    } else if (lado2 >= lado1 && lado2 >= lado3) {
        hipotenusa = lado2;
        cateto1 = lado1;
        cateto2 = lado3;
    } else {
        hipotenusa = lado3;
        cateto1 = lado1;
        cateto2 = lado2;
    }

    console.log("Hipotenusa:", hipotenusa);
    console.log("Cateto 1:", cateto1);
    console.log("Cateto 2:", cateto2);

}
main()