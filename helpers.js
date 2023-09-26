function getWindowsSize() {
    const ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    return [ancho, alto];
}

// Agregar eventos clic a las celdas de ambas tablas
document.querySelectorAll('.bingo-cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const cellId = cell.id.replace('horizontal_', '').replace('vertical_', '');
        if (cell.classList.contains('active')) {
            deactivateCell(cellId);
        } else {
            activateCell(cellId);
        }
    });
});

// Función para activar una celda en ambas tablas
function activateCell(cellId) {
    const horizontalCell = document.getElementById(`horizontal_${cellId}`);
    const verticalCell = document.getElementById(`vertical_${cellId}`);

    if (horizontalCell && verticalCell) {
        horizontalCell.classList.add('active');
        verticalCell.classList.add('active');
        activeCells.add(cellId);
    }
}

// Función para desactivar una celda en ambas tablas
function deactivateCell(cellId) {
    const horizontalCell = document.getElementById(`horizontal_${cellId}`);
    const verticalCell = document.getElementById(`vertical_${cellId}`);

    if (horizontalCell && verticalCell) {
        horizontalCell.classList.remove('active');
        verticalCell.classList.remove('active');
        activeCells.delete(cellId);
    }
}

// Función para verificar y cambiar entre las tablas según la resolución de la pantalla
function checkTableLayout() {
    const windowWidth = window.innerWidth;
    const horizontalTable = document.getElementById('horizontalTable');
    const verticalTable = document.getElementById('verticalTable');

    if (windowWidth >= 768) {
        horizontalTable.style.display = 'block';
        verticalTable.style.display = 'none';
    } else {
        horizontalTable.style.display = 'none';
        verticalTable.style.display = 'block';
    }
}
