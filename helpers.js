const activeCells = new Set();

// Función para activar una celda en ambas tablas
function activateCell(cellId) {
    console.log("a");
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
    console.log("b");
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

// Agregar eventos clic a las celdas de ambas tablas
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.number').forEach(cell => {
        cell.addEventListener('click', () => {
            const cellId = cell.id.replace('horizontal_', '').replace('vertical_', '');
            if (cell.classList.contains('active')) {
                deactivateCell(cellId);
            } else {
                activateCell(cellId);
            }
        });
    });
});

// Ejecuta la función al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', checkTableLayout);
window.addEventListener('resize', checkTableLayout);
