import { get_number, get_text, print } from '../utils/io_utils.js'; //FUNÇÕES RECURSIVAS 

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
            print("Sequência (recursiva):", sequenciaAateB(a, b));
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
        } else if (opcao === 7){
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
    if (n <= 1) {
        return 1;
    }
    return n * calcular_fatorial(n - 1);
}

function imprimir_sequencia_fibonacci(c, a = 0, b = 1) {
    if (c <= 0) {
        return [];
    }
    return [a].concat(imprimir_sequencia_fibonacci(c - 1, b, a + b));
}

function sequenciaAateB(a, b) {
    if (a > b) {
        return [];
    }
    return [a].concat(sequenciaAateB(a + 1, b));
}

function produto_forma_sucessiva(a, b) {
    if (b <= 0) {
        return 0;
    }
    return a + produto_forma_sucessiva(a, b - 1);
}
function calcular_exponencia(n, e) {
    if (e <= 0) {
        return 1;
    }
    return n * calcular_exponencia(n, e - 1);
}

function calcular_somatorio(a, b, n, soma = 0) {
    if (n <= 0) {
        return soma;
    }
    let valor = Math.floor(Math.random() * (b - a + 1)) + a;
    return calcular_somatorio(a, b, n - 1, soma + valor);
}
function contar_vogais(frase, index = 0, numero_vogais = 0) {
    if (index >= frase.length) {
        return numero_vogais;
    }
    const vogais = "aeiouAEIOU";
    let char = frase[index];
    if (vogais.includes(char)) {
        numero_vogais++;
    }
    return contar_vogais(frase, index + 1, numero_vogais);
}

function contar_consoantes(frase, index = 0, numero_consoantes = 0) {
    if (index >= frase.length) {
        return numero_consoantes;
    }
    const vogais = "aeiouAEIOU";
    let char = frase[index];
    if (
        (char >= 'a' && char <= 'z') || 
        (char >= 'A' && char <= 'Z')
    ) {
        if (!vogais.includes(char)) {
            numero_consoantes++;
        }
    }
    return contar_consoantes(frase, index + 1, numero_consoantes);
}

menu();
