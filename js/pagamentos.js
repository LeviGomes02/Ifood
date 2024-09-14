import { pagamentos } from "./mock.js";
import {cardsPagamentos} from "./mock.js";

const dataPagamentos = pagamentos;

function calcularValorTaxaIfood(valor) {
return valor * 0.3;
}

function preencherTabela() {
  const tablebody = document.getElementById("table-body");
  tablebody.innerHTML = '';
  dataPagamentos.forEach((item) => {

    let valorNumerico = parseFloat(item.valor.replace('R$', '').replace(',', '.').trim());

    let valorTaxaIfood = calcularValorTaxaIfood(valorNumerico);
    let valorLiquido = valorNumerico - valorTaxaIfood;

    let row = `
            <tr>
              <td>
                <input class="form-check-input rounded-0 " type="checkbox" value="" id="flexCheckDefault">
              </td>
              <td class="escuro">${item.transacao}</td>
              <td>${item.valor}</td>
              <td class="">R$ ${valorTaxaIfood.toFixed(2)}</td>
              <td>R$ ${valorLiquido.toFixed(2)}</td>
              <td>
                <i class="bi bi-calendar-event-fill text-primary"></i> ${item.data}
              </td>
              <td>
                <p class="">${item.formaDePagamentos}</p>
              </td>
              <td>
                <p class=" text-${getStatusClass(item.status)}">${item.status}</p>
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
    case "Em Andamento":
      return "warning";
    case "Estorno":
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
