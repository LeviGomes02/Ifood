
import { dadosRelatorios } from "./mock.js";

let limparVisivelHistorico = false; // Controle para verificar se o botão "Limpar" do histórico está visível

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-month').click();
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-month').click();
});

document.getElementById('procurar').addEventListener('click', function () {
    const tipoRelatorio = document.getElementById('btn-historico').value;
    const dataInicialHistorico = document.getElementById('dataInicialHistorico').value;
    const dataFinalHistorico = document.getElementById('dataFinalHistorico').value;

    // Verifica se uma opção foi selecionada
    if (!tipoRelatorio) {
        alert('Por favor, selecione um tipo de relatório.');
        return;
    }

    // Filtrar os dados por tipo de relatório e intervalo de data
    const dadosFiltrados = dadosRelatorios.filter(item => {
        return item.tipo === tipoRelatorio &&
            item.data1 >= dataInicialHistorico &&
            item.data2 <= dataFinalHistorico;
    });

    // Exibir os resultados
    const resultadoHistorico = document.getElementById('resultadoHistorico');
    resultadoHistorico.innerHTML = ''; // Limpa os resultados anteriores

    if (dadosFiltrados.length > 0) {
        dadosFiltrados.forEach(item => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'd-flex m-3';

            cardDiv.innerHTML = `
                <div class="col-12 my-3">
                    <div class="card">
                        <div class="d-flex card-body p-1 div-arquivo rounded">
                            <div class="m-2">
                                <img class="foto-arquivo" src="../images/imagem-relatorios/files_7515621.png" alt="Duas folhas de papel">
                            </div>
                            <div class="my-2">
                                <div>
                                    <p class="negrito mb-0 my-1">Relatório de ${item.detalhes}</p>
                                    <p class="fonte-pequena">${item.visualizacao}</p>
                                    <div>
                                        <button type="button" class="btn btn-arquivo1">Abrir</button>
                                        <button type="button" class="btn btn-arquivo2">Excluir</button>
                                    </div>
                                </div>
                            </div>
                            <div class="ms-auto">
                                <p class="text-end fonte-pequena mb-0 mt-3 me-2 d-none d-lg-block d-xl-block">Emissão: ${item.data1} ${item.hora1}</p>
                                <p class="fonte-pequena me-2 d-none d-lg-block d-xl-block">Conclusão: ${item.data2} ${item.hora2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            resultadoHistorico.appendChild(cardDiv);
        });

        document.getElementById('limpar-historico').style.display = 'block';

    } else {
        resultadoHistorico.textContent = 'Nenhum resultado encontrado para o período e tipo selecionado.';
    }
});

document.getElementById('limpar-historico').addEventListener('click', function () {
    const resultadoHistorico = document.getElementById('resultadoHistorico');
    resultadoHistorico.innerHTML = ''; // Limpa os resultados
    this.style.display = 'none'; // Esconde o botão "Limpar"
});

document.getElementById('btn-day').addEventListener('click', function () {
    const dataAtual = new Date();
    document.getElementById('dataInicialHistorico').value = dataAtual.toISOString().split('T')[0];
    document.getElementById('dataFinalHistorico').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-week').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicialHistorico = new Date(dataAtual);
    dataInicialHistorico.setDate(dataAtual.getDate() - 7);
    document.getElementById('dataInicialHistorico').value = dataInicialHistorico.toISOString().split('T')[0];
    document.getElementById('dataFinalHistorico').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-month').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicialHistorico = new Date(dataAtual);
    dataInicialHistorico.setMonth(dataAtual.getMonth() - 1);
    document.getElementById('dataInicialHistorico').value = dataInicialHistorico.toISOString().split('T')[0];
    document.getElementById('dataFinalHistorico').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-year').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicialHistorico = new Date(dataAtual);
    dataInicialHistorico.setFullYear(dataAtual.getFullYear() - 1);
    document.getElementById('dataInicialHistorico').value = dataInicialHistorico.toISOString().split('T')[0];
    document.getElementById('dataFinalHistorico').value = dataAtual.toISOString().split('T')[0];
});

console.log(dadosRelatorios);





// Armazena as opções já emitidas
let emitidos = [];
let limparVisivel = false; // Controle para verificar se o botão "Limpar" está visível

// Evento para gerar o relatório
document.getElementById('emitir').addEventListener('click', function() {
    const reportSelect = document.getElementById('reportSelect');
    const selectedReport = reportSelect.value;

    // Verifica se uma opção foi selecionada
    if (!selectedReport) {
        alert('Por favor, selecione um relatório.');
        return;
    }

    // Verifica se o relatório já foi emitido
    if (emitidos.includes(selectedReport)) {
        alert('Este relatório já foi emitido.');
        return;
    }

    // Obtém a data e hora atuais
    const agora = new Date();
    const data1 = agora.toLocaleDateString(); // Data no formato local
    const hora = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Hora no formato HH:mm

    // Calcula a data de conclusão prevista (3 dias após a data atual)
    const dataConclusao = new Date(agora);
    dataConclusao.setDate(agora.getDate() + 3);
    const data2 = dataConclusao.toLocaleDateString();

    // Exemplo de dados simulados para exibição
    const item = {
        detalhes: reportSelect.options[reportSelect.selectedIndex].text,
        visualizacao: 'Visualização de dados do relatório ' + reportSelect.options[reportSelect.selectedIndex].text,
        data1: data1,
        hora: hora,
        data2: data2
    };

    // Gera o conteúdo do card dinamicamente
    const cardHTML = `
        <div class="col-12 my-3">
            <div class="card">
                <div class="d-flex card-body p-1 div-arquivo rounded">
                    <div class="m-2">
                        <img class="foto-arquivo" src="../images/imagem-relatorios/files_7515621.png" alt="Duas folhas de papel">
                    </div>
                    <div class="my-2">
                        <div>
                            <p class="negrito mb-0 my-1">Relatório de ${item.detalhes}</p>
                            <p class="fonte-pequena">${item.visualizacao}</p>
                        </div>
                    </div>
                    <div class="ms-auto">
                        <p class="text-end fonte-pequena mb-0 mt-3 me-2 d-none d-lg-block d-xl-block">Emissão: ${item.data1} ${item.hora}</p>
                        <p class="fonte-pequena me-2 d-none d-lg-block d-xl-block">Conclusão Prevista: ${item.data2}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Insere o card gerado no contêiner de resultados
    const resultadoEmitido = document.getElementById('resultadoEmitido');
    resultadoEmitido.innerHTML += cardHTML;

    // Adiciona o relatório emitido à lista para evitar repetição
    emitidos.push(selectedReport);

    // Torna o botão "Limpar" visível se ainda não estiver visível
    if (!limparVisivel) {
        document.getElementById('limpar-gerador').style.display = 'block';
        limparVisivel = true;
    }
});

// Evento para limpar os relatórios gerados
document.getElementById('limpar-gerador').addEventListener('click', function() {
    // Limpa os resultados
    const resultadoEmitido = document.getElementById('resultadoEmitido');
    resultadoEmitido.innerHTML = '';

    // Limpa a lista de emitidos para permitir novas emissões
    emitidos = [];

    // Oculta o botão "Limpar"
    this.style.display = 'none';
    limparVisivel = false;
});


// Evento para limpar os relatórios gerados
document.getElementById('limpar-gerador').addEventListener('click', function() {
    // Limpa os resultados
    const resultadoEmitido = document.getElementById('resultadoEmitido');
    resultadoEmitido.innerHTML = '';

    // Limpa a lista de emitidos para permitir novas emissões
    emitidos = [];

    // Oculta o botão "Limpar"
    this.style.display = 'none';
    limparVisivel = false;
});



document.getElementById('btn-day').addEventListener('click', function () {
    const dataAtual = new Date();
    document.getElementById('dataInicialGerador').value = dataAtual.toISOString().split('T')[0];
    document.getElementById('dataFinalGerador').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-week').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicialGerador = new Date(dataAtual);
    dataInicialGerador.setDate(dataAtual.getDate() - 7);
    document.getElementById('dataInicialGerador').value = dataInicialGerador.toISOString().split('T')[0];
    document.getElementById('dataFinalGerador').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-month').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicialGerador = new Date(dataAtual);
    dataInicialGerador.setMonth(dataAtual.getMonth() - 1);
    document.getElementById('dataInicialGerador').value = dataInicialGerador.toISOString().split('T')[0];
    document.getElementById('dataFinalGerador').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-year').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicialGerador = new Date(dataAtual);
    dataInicialGerador.setFullYear(dataAtual.getFullYear() - 1);
    document.getElementById('dataInicialGerador').value = dataInicialGerador.toISOString().split('T')[0];
    document.getElementById('dataFinalGerador').value = dataAtual.toISOString().split('T')[0];
});