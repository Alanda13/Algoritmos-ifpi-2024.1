import { get_number, get_text, print } from '../utils/io_utils.js';   //WHILE

function menu() {
    let menu = `
    ====================================MENU=============================================
    1 - Calcular o Fatorial de um número N.
    2 - Imprimir uma Sequência Fibonacci de comprimento C.
    3 - Função que imprime uma Sequência Simples de A até B.
    4 - Calcular o Produto (multiplicação) nas forma de somas sucessivas.
    5 - Calcular Exponencial de um Número N elevado a expoente E.
    6 - Dado um intervalo A e B, calcular o somatório de um Vetor de N Elementos Aleatórios.
    7 - Contar Vogais e Consoantes de Frase.
    ========================================================================================
    `;

    let opcao = get_number("Escolha sua opção: ");

    while (opcao !== 0) {
        if (opcao === 1) {
            let n = get_number("Número para calcular a fatorial: ");
            print("Fatorial: ", calcular_fatorial(n));
        } else if (opcao === 2) {
            let c = get_number("Digite o comprimento: ");
            print("Sequência Fibonacci: ", imprimir_sequencia_fibonacci(c));
        } else if (opcao === 3) {
            let a = get_number("Digite A: ");
            let b = get_number("Digite B: ");
            print("Sequência (while):", sequenciaAateB(a, b));
        } else if (opcao === 4) {
            let a = get_number("Digite o número A: ");
            let b = get_number("Digite o número B: ");
            print("Produto:", produto_forma_sucessiva(a, b));
        } else if (opcao === 5) {
            let n = get_number("Digite o número N: ");
            let e = get_number("Digite o expoente E: ");
            print("Exponencial:", calcular_exponencia(n, e));
        } else if (opcao === 6) {
            let a = get_number("Digite o intervalo A: ");
            let b = get_number("Digite o intervalo B: ");
            let n = get_number("Digite o número de elementos N: ");
            print("Somatório:", calcular_somatorio(a, b, n));
        } else if (opcao === 7) {
            let frase = get_text("Digite a frase: "); 
            print("Número de Vogais:", contar_vogais(frase));
            print("Número de Consoantes:", contar_consoantes(frase));
        } else {
            print("========= Opção Inválida!!!! ============");
        }
        opcao = get_number("Escolha sua opção: ");
    }
    print("===== Saindo...... =======");
}
function calcular_fatorial(n) {
    let resultado = 1;
    while (n > 1) {
        resultado *= n;
        n--;
    }
    return resultado;
}
function imprimir_sequencia_fibonacci(c) {
    let a = 0, b = 1, temp;
    let vetor_resultado = [];
    while (vetor_resultado.length < c) {
        vetor_resultado.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }
    return vetor_resultado;
}
function sequenciaAateB(a, b) {
    let resultado = [];
    while (a <= b) {
        resultado.push(a);
        a++;
    }
    return resultado;
}
function produto_forma_sucessiva(a, b) {
    let resultado = 0;
    while (b > 0) {
        resultado += a;
        b--;
    }
    return resultado;
}
function calcular_exponencia(n, e) {
    let resultado = 1;
    while (e > 0) {
        resultado *= n;
        e--;
    }
    return resultado;
}
function calcular_somatorio(a, b, n) {
    let soma = 0;
    while (n > 0) {
        let valor = Math.floor(Math.random() * (b - a + 1)) + a;
        soma += valor;
        n--;
    }
    return soma;
}
function contar_vogais(frase) {
    const vogais = "aeiouAEIOU";
    let numero_vogais = 0;
    let i = 0;

    while (i < frase.length) {
        let char = frase[i];
        if (vogais.includes(char)) {
            numero_vogais++;
        }
        i++;
    }

    return numero_vogais;
}
function contar_consoantes(frase) {
    const vogais = "aeiouAEIOU";
    let numero_consoantes = 0;
    let i = 0;

    while (i < frase.length) {
        let char = frase[i];
        if (char.match(/[a-zA-Z]/) && !vogais.includes(char)) {
            numero_consoantes++;
        }
        i++;
    }

    return numero_consoantes;
}

menu();
