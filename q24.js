import {question} from "readline-sync"

function obterCoeficientes() {
    const A = parseFloat(question("Digite o coeficiente A (diferente de zero):"));
    const B = parseFloat(question("Digite o coeficiente B:"));
    const C = parseFloat(question("Digite o coeficiente C:"));

    return { A, B, C };
}

function calcularRaizes(coeficientes) {
    const { A, B, C } = coeficientes;

    const discriminante = Math.pow(B, 2) - 4 * A * C;

    if (discriminante > 0) {
        const raiz1 = (-B + Math.sqrt(discriminante)) / (2 * A);
        const raiz2 = (-B - Math.sqrt(discriminante)) / (2 * A);
        return { tipo: "Duas raízes reais distintas", raiz1, raiz2 };
    } else if (discriminante === 0) {
        const raiz = -B / (2 * A);
        return { tipo: "Uma raiz real", raiz };
    } else {
        const parteReal = -B / (2 * A);
        const parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * A);
        return { tipo: "Duas raízes complexas", raiz1: `${parteReal} + ${parteImaginaria}i`, raiz2: `${parteReal} - ${parteImaginaria}i` };
    }
}

function resolverEquacao() {
    const coeficientes = obterCoeficientes();

    if (coeficientes.A !== 0) {
        const raizes = calcularRaizes(coeficientes);

        console.log(`Tipo de raízes: ${raizes.tipo}`);

        if (raizes.tipo.includes("real")) {
            console.log(`Raiz: ${raizes.raiz1}, ${raizes.raiz2}`);
        } else {
            console.log(`Raiz: ${raizes.raiz1} e ${raizes.raiz2}`);
        }
    } else {
        console.log("O coeficiente A deve ser diferente de zero.");
    }
}

resolverEquacao();
