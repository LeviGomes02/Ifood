
import { dadosRelatorios } from "./mock.js";

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-month').click();
});

document.getElementById('procurar').addEventListener('click', function () {
    const tipoRelatorio = document.getElementById('reportSelect').value;
    const dataInicial = document.getElementById('dataInicial').value;
    const dataFinal = document.getElementById('dataFinal').value;

// Filtrar os dados por tipo de relatório e intervalo de data
const dadosFiltrados = dadosRelatorios.filter(item => {
    return item.tipo === tipoRelatorio &&
        item.data1 >= dataInicial &&
        item.data2 <= dataFinal;
});

// Exibir os resultados
const resultadoContainer = document.getElementById('resultadoContainer');
resultadoContainer.innerHTML = ''; // Limpa os resultados anteriores

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
        resultadoContainer.appendChild(cardDiv);
    });

        document.getElementById('limpar').style.display = 'block';

    } else {
        resultadoContainer.textContent = 'Nenhum resultado encontrado para o período e tipo selecionado.';
    }
});

document.getElementById('limpar').addEventListener('click', function () {
    const resultadoContainer = document.getElementById('resultadoContainer');
    resultadoContainer.innerHTML = ''; // Limpa os resultados
    this.style.display = 'none'; // Esconde o botão "Limpar"
});

document.getElementById('btn-day').addEventListener('click', function () {
    const dataAtual = new Date();
    document.getElementById('dataInicial').value = dataAtual.toISOString().split('T')[0];
    document.getElementById('dataFinal').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-week').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicial = new Date(dataAtual);
    dataInicial.setDate(dataAtual.getDate() - 7);
    document.getElementById('dataInicial').value = dataInicial.toISOString().split('T')[0];
    document.getElementById('dataFinal').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-month').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicial = new Date(dataAtual);
    dataInicial.setMonth(dataAtual.getMonth() - 1);
    document.getElementById('dataInicial').value = dataInicial.toISOString().split('T')[0];
    document.getElementById('dataFinal').value = dataAtual.toISOString().split('T')[0];
});

document.getElementById('btn-year').addEventListener('click', function () {
    const dataAtual = new Date();
    const dataInicial = new Date(dataAtual);
    dataInicial.setFullYear(dataAtual.getFullYear() - 1);
    document.getElementById('dataInicial').value = dataInicial.toISOString().split('T')[0];
    document.getElementById('dataFinal').value = dataAtual.toISOString().split('T')[0];
});

console.log(dadosRelatorios);
