import { cardPedidos } from './mock.js';
import {tabelaPedidos} from './mock.js';

document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-pedidos");

    cardPedidos.forEach(data => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-12", "col-lg-6", "col-xl-3", "my-3", "text-center");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", data.classe);

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body", "p-1");

        const p = document.createElement("p");
        p.classList.add("mb-0", "my-1");
        p.textContent = data.categoria;

        const h5 = document.createElement("h5");
        h5.textContent = data.quantidade;

        cardBodyDiv.appendChild(p);
        cardBodyDiv.appendChild(h5);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);
        cardContainer.appendChild(colDiv);
    });
});

// Função para gerar o conteúdo da tabela
function populateTable(data) {
    const tableBody = document.getElementById('tabela');
    tableBody.innerHTML = ''; // Limpa o conteúdo existente

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.numero}</td>
            <td>${item.produto}</td>
            <td>${item.valor}</td>
            <td>${item.pagamento}</td>
            <td>${item.entregador}</td>
            <td class="${item.status === 'Entregue' ? 'text-success' : item.status === 'Pendente' ? 'text-warning' : 'text-danger'}">${item.status}</td>
            <td>${item.dataHora}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Inicializa a tabela com os dados do mock
populateTable(tabelaPedidos);

// Filtros
const pagamentoFiltro = document.getElementById('pagamentoFiltro');
const entregadorFiltro = document.getElementById('entregadorFiltro');
const statusFiltro = document.getElementById('statusFiltro');
let selectedPayment = '';
let selectedDelivery = '';
let selectedStatus = '';

function filterTable() {
    const rows = document.querySelectorAll('#tabela tr');
    rows.forEach(row => {
        const payment = row.children[3].textContent;
        const delivery = row.children[4].textContent;
        const status = row.children[5].textContent;

        const paymentMatches = selectedPayment === '' || payment === selectedPayment;
        const deliveryMatches = selectedDelivery === '' || delivery === selectedDelivery;
        const statusMatches = selectedStatus === '' || status.includes(selectedStatus);

        if (paymentMatches && deliveryMatches && statusMatches) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

pagamentoFiltro.addEventListener('click', function (e) {
    if (e.target.matches('a')) {
        selectedPayment = e.target.getAttribute('data-filter');
        filterTable();
    }
});

entregadorFiltro.addEventListener('click', function (e) {
    if (e.target.matches('a')) {
        selectedDelivery = e.target.getAttribute('data-filter');
        filterTable();
    }
});

statusFiltro.addEventListener('click', function (e) {
    if (e.target.matches('a')) {
        selectedStatus = e.target.getAttribute('data-filter');
        filterTable();
    }
});