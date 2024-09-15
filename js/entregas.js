import { dadosEntregas } from "./mock.js";

const tableBody = document.querySelector('tbody');

dadosEntregas.forEach(item => {
  const row = document.createElement('tr');
  
  row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>
      <p class="text-warning">
        ${'<i class="bi bi-star-fill"></i>'.repeat(item.stars)}
        ${'<i class="bi bi-star"></i>'.repeat(5 - item.stars)}
      </p>
    </td>
    <td>${item.endereco}</td>
    <td>${item.dataHora}</td>
    <td>${item.status}</td>
  `;
  
  tableBody.appendChild(row);
});