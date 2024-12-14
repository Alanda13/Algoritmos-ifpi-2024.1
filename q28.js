import{question} from "readline-sync"

function calcularAreaRetangulo(x1, y1, x2, y2) {
    const largura = Math.abs(x2 - x1);
    const altura = Math.abs(y2 - y1);
  
    const area = largura * altura;
  
    return area;
  }
  
  
  function validarAreaNaoNegativa(area) {
    // Se a área for negativa, retorna 0, caso contrário, retorna a área
    return area < 0 ? 0 : area;
  }
  
  function calcularEExibirAreaRetangulo() {
    const x1 = Number(question("Digite a coordenada x do primeiro ponto:"));
    const y1 = Number(question("Digite a coordenada y do primeiro ponto:"));
    const x2 = Number(question("Digite a coordenada x do segundo ponto:"));
    const y2 = Number(question("Digite a coordenada y do segundo ponto:"));
  
    const areaRetangulo = calcularAreaRetangulo(x1, y1, x2, y2);
  
    const areaNaoNegativa = validarAreaNaoNegativa(areaRetangulo);
  
    console.log(`A área do retângulo é: ${areaNaoNegativa}`);
  }
  calcularEExibirAreaRetangulo();
  