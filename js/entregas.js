import { dadosEntregas } from "./mock.js";
import { entregadoresCards } from './mock.js';

function gerarEstrelas(estrelas) {
  let estrelasHtml = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(estrelas)) {
      estrelasHtml += '<i class="bi bi-star-fill"></i>';
    } else if (i === Math.ceil(estrelas) && estrelas % 1 !== 0) {
      estrelasHtml += '<i class="bi bi-star-half"></i>';
    } else {
      estrelasHtml += '<i class="bi bi-star"></i>';
    }
  }
  return estrelasHtml;
}

function gerarCards() {
  const container = document.getElementById("produtos-cards");
  container.innerHTML = ""; // Limpa o container

  entregadoresCards.forEach(entregador => {
    const card = document.createElement("div");
    card.classList.add("d-flex", "col-12", "col-lg-5", "col-xl-5", "cards-produtos", "rounded");

    card.innerHTML = `
      <img class="avatar" src="${entregador.imagem}" alt="${entregador.alt}">
      <div class="d-column">
        <div class="d-flex">
          <h5 class="ms-2">${entregador.nome}</h5>
          <div class="d-flex ms-3 estrelas text-warning">
            ${gerarEstrelas(entregador.estrelas)}
          </div>
        </div>
        <div class="d-flex">
          <div>
            <p class="fonte-pequena ms-2 mb-0 text-success">Entregas Concluídas</p>
            <h5 class="ms-2 mt-0">${entregador.entregasConcluidas}</h5>
          </div>
          <div>
            <p class="fonte-pequena ms-5 mb-0 text-danger">Entregas Não Concluídas</p>
            <h5 class="ms-5 mt-0">${entregador.entregasNaoConcluidas}</h5>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", gerarCards);



const tableBody = document.querySelector('tbody');

dadosEntregas.forEach(item => {
  const row = document.createElement('tr');

  // Determine the color based on status
  let statusColor;
  switch (item.status) {
    case 'Pendente':
      statusColor = '#ffc107'; // Cor do text-warning (laranja)
      break;
    case 'Em Andamento':
      statusColor = '#007bff'; // Azul mais escuro
      break;
    case 'Concluído':
      statusColor = 'green'; // Verde para Concluído
      break;
    case 'Cancelado':
      statusColor = 'red'; // Vermelho para Cancelado
      break;
    default:
      statusColor = 'black'; // Cor padrão se o status for desconhecido
  }

  // Determine the rating display
  const ratingDisplay = item.status === 'Concluído' 
    ? `<p class="text-warning">
         ${'<i class="bi bi-star-fill"></i>'.repeat(item.stars)}
         ${'<i class="bi bi-star"></i>'.repeat(5 - item.stars)}
       </p>`
    : ' - ';

  row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.produto}</td>
    <td>${item.name}</td>
    <td>${ratingDisplay}</td>
    <td>${item.endereco}</td>
    <td>${item.dataHora}</td>
    <td style="color: ${statusColor};">${item.status}</td>
  `;
  
  tableBody.appendChild(row);
});

