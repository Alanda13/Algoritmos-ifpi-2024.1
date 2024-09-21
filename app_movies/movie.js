import { clear_screen, enter_to_continue, get_number, get_number_in_range, get_text, print } from '../utils/io_utils.js'

// APP FILMES

function main() {
    let filmes = [];
    let escolha = 1;
    while (escolha !== 0) {
        mostrarMenu();
        escolha = get_number_in_range("Escolha: ", 0, 5);
        filmes = executar(escolha, filmes);
    }
}

function mostrarMenu() {
    print(`======== ROGER FILMES =======
    1 - Cadastrar filme
    2 - Listar filmes
    3 - Remover um filme da lista
    4 - Atualizar um filme
    5 - Filtrar filmes
    
    0 - Sair`);
}

function executar(escolha, lista) {
    if (escolha === 1) {
        let novoFilme = criarFilme();
        lista.push(novoFilme);
        print("Filme cadastrado com sucesso!");
    } else if (escolha === 2) {
        listarFilmes(lista);
    } else if (escolha === 3) {
        lista = removerFilme(lista);
        print("Filme removido com sucesso!");
    } else if (escolha === 4) {
        lista = atualizarFilme(lista);
    } else if (escolha === 5) {
        let filmesFiltrados = filtrarFilmes(lista);
        listarFilmes(filmesFiltrados);
    }
    enter_to_continue();
    clear_screen();
    return lista;
}

function criarFilme() {
    let filme = {};
    filme["nome"] = get_text("Nome: ");
    filme["ano"] = get_number("Ano de lançamento: ");
    filme["IMDB"] = get_number("Nota na IMDB: ");
    filme["bilheteira"] = get_number("Arrecadação: ");
    return filme;
}

function listarFilmes(filmes) {
    if (filmes.length === 0) {
        print("Nenhum filme cadastrado.");
        return;
    }
    for (let i = 0; i < filmes.length; i++) {
        let filme = filmes[i];
        print(`${i + 1} - Nome: ${filme["nome"]} | Ano: ${filme["ano"]} | Nota IMDB: ${filme["IMDB"]} | Bilheteira: R$${filme["bilheteira"].toFixed(2)}`);
    }
}

function removerFilme(filmes) {
    listarFilmes(filmes);
    let escolhaRemover = get_number_in_range("Qual filme deseja remover? ", 1, filmes.length);
    return filmes.filter((_, index) => index !== escolhaRemover - 1);
}

function atualizarFilme(filmes) {
    listarFilmes(filmes);
    let escolhaAtualizar = get_number_in_range("Qual filme deseja atualizar? ", 1, filmes.length);
    let filmeParaAtualizar = filmes[escolhaAtualizar - 1];
    
    console.log(`Atualizando o filme: ${filmeParaAtualizar.nome}`);
    filmeParaAtualizar.nome = get_text("Novo nome: ", filmeParaAtualizar.nome);
    filmeParaAtualizar.ano = get_number("Novo ano de lançamento: ", filmeParaAtualizar.ano);
    filmeParaAtualizar.IMDB = get_number("Nova nota na IMDB: ", filmeParaAtualizar.IMDB);
    filmeParaAtualizar.bilheteira = get_number("Nova arrecadação: ", filmeParaAtualizar.bilheteira);
    
    print("Filme atualizado com sucesso!");
    return filmes;
}

function filtrarFilmes(filmes) {
    let escolhaFiltro = get_number_in_range(`Filtrar filmes por:
    1 - Ano
    2 - Nota IMDB
    3 - Bilheteira
    Escolha: `, 1, 3);
    
    let filmesFiltrados = [];
    
    if (escolhaFiltro === 1) {
        let ano = get_number("Digite o ano: ");
        filmesFiltrados = filmes.filter(filme => filme.ano === ano);
    } else if (escolhaFiltro === 2) {
        let notaIMDB = get_number("Digite a nota mínima na IMDB: ");
        filmesFiltrados = filmes.filter(filme => filme.IMDB >= notaIMDB);
    } else if (escolhaFiltro === 3) {
        let minBilheteira = get_number("Digite a arrecadação mínima: ");
        filmesFiltrados = filmes.filter(filme => filme.bilheteira >= minBilheteira);
    }
    
    return filmesFiltrados;
}

function gerarRelatorios(filmes) { // relatórios
    if (filmes.length === 0) {
        console.log("Nenhum filme cadastrado para gerar relatórios.");
        return;
    }
    
    let totalIMDB = filmes.reduce((soma, filme) => soma + filme.IMDB, 0);
    let mediaIMDB = totalIMDB / filmes.length;
    console.log(`Média das notas IMDB: ${mediaIMDB.toFixed(2)}`);
    
    // Total da bilheteira
    let totalBilheteira = filmes.reduce((soma, filme) => soma + filme.bilheteira, 0);
    console.log(`Total da bilheteira: R$${totalBilheteira.toFixed(2)}`);
}

main();

