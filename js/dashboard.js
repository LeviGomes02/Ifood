import { dadosTabela } from "./mock.js";
import { dadosCards } from "./mock.js";
import { produtosMaisPedidos } from "./mock.js";

const layout = dadosCards
  .map(
    (item) => `
            <div class="col-md-12 col-lg-6 col-xl-3 my-3">
                <div class="card">
                    <div class="card-body p-1">
                        <p class="mb-0 my-1">${item.title}</p>
                        <h5>R$ ${item.value}</h5>
                    </div>
                </div>
            </div>`
  )
  .join("");

document.querySelector(".row").innerHTML = layout;

function gerarTabela() {
  const tabelaCorpo = document.getElementById("tabela-corpo");

  tabelaCorpo.innerHTML = "";

  dadosTabela.forEach((item) => {
    const novaLinha = document.createElement("tr");

    let corStatus = "";
    if (item.status === "Pendente") {
      corStatus = "text-warning";
    } else if (item.status === "Concluído") {
      corStatus = "text-success";
    } else if (item.status === "Cancelado") {
      corStatus = "text-danger";
    }

    novaLinha.innerHTML = `
            <td>${item.id}</td>
            <td>${item.quantidade}</td>
            <td>${item.valor}</td>
            <td class="${corStatus}">${item.status}</td>
        `;

    tabelaCorpo.appendChild(novaLinha);
  });
}

gerarTabela();

const ctx = document.getElementById("graficoPedidos");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Oct",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Pedidos",
        data: [350, 320, 400, 450, 500, 480, 520, 530, 490, 510],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Concluídos",
        data: [320, 290, 360, 410, 460, 434, 460, 500, 456, 470],
        borderWidth: 1,
        backgroundColor: "rgba(75, 192, 75, 0.6)",
      },

      {
        label: "Cancelados",
        data: [30, 30, 40, 40, 40, 44, 60, 30, 34, 40],
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  },
  options: {
    cales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("graficoFaturamento");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Oct",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Saldo",
        data: [16.0, 14.5, 18.0, 20.5, 23.0, 22.0, 24.0, 24.5, 22.5, 23.5],
        borderWidth: 1,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Lucro",
        data: [6.4, 5.8, 7.2, 8.2, 9.2, 8.8, 9.6, 9.8, 9.0, 9.4],
        borderWidth: 1,
        backgroundColor: "rgba(75, 192, 75, 0.6)",
      },

      {
        label: "Despesas",
        data: [9.6, 8.7, 10.8, 12.3, 13.8, 13.2, 14.4, 14.7, 13.5, 14.1],
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


function gerarProdutosMaisPedidos() {
  
  const container = document.getElementById('produtos-mais-vendidos'); // Seleciona o contêiner para os produtos

  produtosMaisPedidos.forEach(produto => {
      const produtoDiv = document.createElement('div');
      produtoDiv.className = 'd-flex mt-3'; // Classe para estilo

      produtoDiv.innerHTML = `
          <div class="d-flex my-1">
              <img src="${produto.imagem}" alt="${produto.descricaoImagem}" class="me-3">
              <div class="column">
                  <div class="d-flex">
                      <p class="ms-2 escuro">${produto.nome}</p>
                      <p class="ms-2 text-warning">
                          ${(produto.estrela1)}
                          ${(produto.estrela2)}
                          ${(produto.estrela3)}
                          ${(produto.estrela4)}
                          ${(produto.estrela5)}
                      </p>
                  </div>
                  <div class="d-flex">
                      <div>
                          <p class="fonte-pequena ms-2 mb-0">Unidades Vendidas</p>
                          <h5 class="ms-2 mt-0">${produto.unidadesVendidas}</h5>
                      </div>
                      <div>
                          <p class="fonte-pequena ms-5 mb-0">Preço</p>
                          <h5 class="ms-5 mt-0">${produto.preco}</h5>
                      </div>
                  </div>
              </div>
          </div>
      `;

      container.appendChild(produtoDiv); // Adiciona o produto ao contêiner
  });
}

gerarProdutosMaisPedidos();
