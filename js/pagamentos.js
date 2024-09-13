import { pagamentos } from "./mock.js";
import {cardsPagamentos} from "./mock.js";

const dataPagamentos = pagamentos;

function preencherTabela() {
  const tablebody = document.getElementById("table-body");
  dataPagamentos.forEach((item) => {
    let row = `

            <tr>
              <td><input class="form-check-input rounded-0 " type="checkbox" value="" id="flexCheckDefault"></td>
              <td class="escuro">${item.transacao}</td>
              <td>${item.tipo}</td>
              <td class="escuro">${item.conta}</td>
              <td>R$ ${item.valor}</td>
              <td><i class="bi bi-calendar-event-fill text-primary"></i> ${
                item.data
              }</td>
              <td>
                <p class="escuro text-${getStatusClass(item.status)}">${
      item.status
    }</p>
              </td>
              <td><button class="btn btn-secondary btn-3pontos negrito " type="button"><img class="img-3pontos"
                    src="../images/imagem-pagamentos/tres-pontos.png" alt="3 pontos"></button></td>
            </tr>
            
            `;
    tablebody.innerHTML += row;
  });
}
preencherTabela();
function getStatusClass(status) {
  switch (status) {
    case "Concluída":
      return "success";
    case "Pendente":
      return "warning";
    case "Cancelada":
      return "danger";
    default:
      return "";
  }
}

const dataCards = cardsPagamentos;

function gerarDivsComDados() {
    const container = document.getElementById('divContainer');
    
    container.innerHTML = '';

    cardsPagamentos.forEach(item => {
        // Cria a estrutura da div
        const novaDiv = document.createElement('div');
        novaDiv.className = 'col-md-12 col-lg-6 col-xl-3 my-3';
        novaDiv.innerHTML = `
            <div class="card">
                <div class="card-body p-1">
                    <p class="mb-0 my-1 ">${item.descricao}</p>
                    <h5>${item.valor}</h5>
                </div>
            </div>
        `;
        container.appendChild(novaDiv);
    });
}
gerarDivsComDados();
