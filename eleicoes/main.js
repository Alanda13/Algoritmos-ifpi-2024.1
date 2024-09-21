import { print } from "../utils/io_utils.js"; 
import { readFileSync } from 'fs'; 

function readCSV(filePath) {
    const data = readFileSync(filePath, 'utf-8'); 
    return data.trim().split('\n').map(line => line.split(';').map(item => item.trim())); 
}

function main() {
    const partidosData = readCSV('partidos_coligacoes_the_2012.csv'); 
    const candidatosData = readCSV('candidatos_e_votos_vereador_THE_2012.csv'); 

    let coligacoes = partidosData.map(partido => ({   //inicializando coligações
        coligacao: partido[0],
        total_votos: 0,
        qtd_vagas: 0, 
        votos_sobra_total: 0 
    }));

    print('=============================');
    print('Coligações:', coligacoes); 
    print('=============================');

    let candidatos = candidatosData.map(candidato => ({   //candidatos
        nome: candidato[0],
        numero: parseInt(candidato[1]), 
        partido: candidato[2], 
        coligacao: candidato[3], 
        total_votos: parseInt(candidato[4]) 
    })).sort((a, b) => b.total_votos - a.total_votos); 

    print('Candidatos:', candidatos); 
    print('=============================');

    const totalVotos = candidatos.reduce((sum, candidato) => sum + candidato.total_votos, 0);  //total de votos
    console.log('Total de Votos válidos:', totalVotos); 

    const vagas = 29;     //quociente eleitoral
    const quocienteEleitoral = Math.floor(totalVotos / vagas); 
    console.log('Quociente Eleitoral:', quocienteEleitoral); 
    print('=============================');

    coligacoes.forEach(coligacao => {
        coligacao.total_votos = candidatos
            .filter(c => c.coligacao === coligacao.coligacao)
            .reduce((sum, c) => sum + c.total_votos, 0); 
        console.log(`Total de Votos - ${coligacao.coligacao}:`, coligacao.total_votos);
    });
    
    print('=============================');

    // Cálculando as vagas 
    let vagasRestantes = vagas; 
    coligacoes.forEach(coligacao => {
        if (coligacao.total_votos >= quocienteEleitoral) {
            coligacao.qtd_vagas = Math.floor(coligacao.total_votos / quocienteEleitoral); 
            vagasRestantes -= coligacao.qtd_vagas; 
            coligacao.votos_sobra_total = coligacao.total_votos % quocienteEleitoral; 
        }
    });

    console.log('Coligações após QP:', coligacoes); 
    console.log('Vagas restantes:', vagasRestantes); 
    print('=============================');

    // Vagas de Sobra
    while (vagasRestantes > 0) { 
        coligacoes.forEach(coligacao => {
            if (coligacao.qtd_vagas > 0 || coligacao.votos_sobra_total > 0) {
                coligacao.media = coligacao.total_votos / (coligacao.qtd_vagas + 1); 
            } else {
                coligacao.media = 0;
            }
        });
        
        coligacoes.sort((a, b) => b.media - a.media);
        
        if (coligacoes[0].media > 0) { 
            coligacoes[0].qtd_vagas += 1; 
            coligacoes[0].votos_sobra_total = coligacoes[0].total_votos % (coligacoes[0].qtd_vagas + 1);
            vagasRestantes--; 
        }
    }

    console.log('Coligações após distribuição de sobras:', coligacoes); 
    print('=============================');

    const vereadoresEleitos = [];  //vereadores eleitos vai ser quardado aqui 
    coligacoes.forEach(coligacao => {
        const eleitos = candidatos.filter(c => c.coligacao === coligacao.coligacao)
                                   .sort((a, b) => b.total_votos - a.total_votos) 
                                   .slice(0, coligacao.qtd_vagas); 
        vereadoresEleitos.push(...eleitos); 
    });
    print('Vereadores eleitos:', vereadoresEleitos); 
    print('=============================');

    const vereadoresNaoProporcionais = candidatos.slice(0, vagas); 
    print('Vereadores se não fosse proporcional:', vereadoresNaoProporcionais); 
    print('=============================');

    const posicionamento = `
    O modelo de eleição proporcional, como o aplicado nas eleições para vereador no Brasil, busca refletir a diversidade política da sociedade. Este sistema tem como principal vantagem a possibilidade de minorias terem representação, permitindo que partidos menores tenham uma voz no legislativo. Isso contrasta com o sistema majoritário, onde apenas os candidatos mais votados são eleitos, potencialmente excluindo segmentos da população. No entanto, um dos problemas do sistema proporcional é a fragmentação do legislativo, resultando em dificuldades para formar governabilidades estáveis. Além disso, o uso de coligações pode distorcer a vontade popular, já que os eleitos não são necessariamente os mais votados. Portanto, embora o modelo proporcione uma representatividade maior, é crucial pensar em reformas que melhorem sua eficiência e clareza, garantindo que a voz do eleitor seja realmente refletida nas decisões políticas.`;
    
    print('=============================');
    print(posicionamento);
    print('=============================');
}

main();
