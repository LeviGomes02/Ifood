function sortTable(colIndex) {
    const table = document.getElementById("tabela-produtos");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.rows);
    const asc = table.dataset.sortOrder === "asc" ? "desc" : "asc";
    table.dataset.sortOrder = asc;
  
    rows.sort((a, b) => {
      const cellA = a.cells[colIndex].innerText.trim().toLowerCase();
      const cellB = b.cells[colIndex].innerText.trim().toLowerCase();
  
      if (!isNaN(cellA) && !isNaN(cellB)) {
        // Se forem números, realizar comparação numérica
        return asc === "asc" ? cellA - cellB : cellB - cellA;
      }
  
      // Se forem strings, realizar comparação alfabética
      return asc === "asc" ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
  
    // Adiciona as linhas de volta ao tbody na nova ordem
    tbody.innerHTML = "";
    rows.forEach(row => tbody.appendChild(row));
  }
  