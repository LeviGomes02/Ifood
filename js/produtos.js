// script.js
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
            let valueA, valueB;

            if (column === 'avaliacao') {
                valueA = getStarRating(a.cells[index]);
                valueB = getStarRating(b.cells[index]);
            } else {
                valueA = a.cells[index].innerText;
                valueB = b.cells[index].innerText;
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
