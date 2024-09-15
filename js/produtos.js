
document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('tabela-produtos');
  const headers = table.querySelectorAll('th');
  let sortDirection = {};

  headers.forEach(header => {
      header.addEventListener('click', () => {
          const column = header.id;
          const direction = sortDirection[column] = sortDirection[column] === 'asc' ? 'desc' : 'asc';
          sortTable(column, direction);
      });
  });

  function sortTable(column, direction) {
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      const index = Array.from(headers).findIndex(th => th.id === column);

      rows.sort((a, b) => {
          let valueA = a.cells[index].innerText.trim();
          let valueB = b.cells[index].innerText.trim();

          // Se estivermos ordenando a coluna 'avaliacao', usaremos a função específica
          if (column === 'avaliacao') {
              valueA = getStarRating(a.cells[index]);
              valueB = getStarRating(b.cells[index]);
          } else if (column === 'preco') {
              // Converte o preço para número removendo o símbolo de moeda e usando ponto como separador decimal
              valueA = parseFloat(valueA.replace('R$ ', '').replace(',', '.'));
              valueB = parseFloat(valueB.replace('R$ ', '').replace(',', '.'));
          } else if (column === 'vendidos') {
              // Converte unidades vendidas para número
              valueA = parseInt(valueA.replace(/\./g, ''), 10);
              valueB = parseInt(valueB.replace(/\./g, ''), 10);
          }

          // Para ordenar a coluna de 'nome' ignorando acentos
          if (column === 'nome') {
              return valueA.localeCompare(valueB, undefined, { sensitivity: 'base' }) * (direction === 'asc' ? 1 : -1);
          }

          if (direction === 'asc') {
              return (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
          } else {
              return (valueA < valueB) ? 1 : (valueA > valueB) ? -1 : 0;
          }
      });

      const tbody = table.querySelector('tbody');
      tbody.innerHTML = '';
      rows.forEach(row => tbody.appendChild(row));
  }

  function getStarRating(cell) {
      const stars = cell.querySelectorAll('.bi-star-fill, .bi-star-half');
      const fullStars = Array.from(stars).filter(star => star.classList.contains('bi-star-fill')).length;
      const halfStar = Array.from(stars).some(star => star.classList.contains('bi-star-half'));
      return fullStars + (halfStar ? 0.5 : 0);
  }
});

function gerarEstrelas(estrelas) {
let estrelasHtml = '';
for (let i = 0; i < 5; i++) {
  if (i < Math.floor(estrelas)) {
    estrelasHtml += '<i class="bi bi-star-fill"></i>';
  } else if (i < estrelas) {
    estrelasHtml += '<i class="bi bi-star-half"></i>';
  } else {
    estrelasHtml += '<i class="bi bi-star"></i>';
  }
}
return estrelasHtml;
}

