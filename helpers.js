function getWindowsSize() {
    const ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    return [ancho, alto];
}

const undoStack = [];

// Función para activar o desactivar una celda en ambas tablas
function toggleCellState(cellId) {
    const horizontalCell = document.getElementById(`horizontal_${cellId}`);
    const verticalCell = document.getElementById(`vertical_${cellId}`);

    if (horizontalCell && verticalCell) {
        horizontalCell.classList.toggle('active');
        verticalCell.classList.toggle('active');
    }
}

// Función para cambiar el estado de una celda al hacer clic
function changeCellState() {
    const input = document.getElementById('cellInput').value;
    const cellId = input.replace(/\D/g, ''); // Obtener solo los dígitos del input

    if (cellId) {
        toggleCellState(cellId);
        undoStack.push(cellId); // Agregar a la pila para deshacer
    }

    document.getElementById('cellInput').value = ''; // Limpiar el input
}

// Función para restablecer todas las celdas
function resetAllCells() {
    const activeCells = document.querySelectorAll('.bingo-cell.active');
    activeCells.forEach(cell => {
        const cellId = cell.id.replace('horizontal_', '').replace('vertical_', '');
        toggleCellState(cellId);
    });
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
