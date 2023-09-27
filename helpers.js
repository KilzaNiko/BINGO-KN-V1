const activeCells = new Set();

// Función para activar una celda en ambas tablas
function changeActive(cellId, active) {
    const horizontalCell = document.getElementById(`h_${cellId}`);
    const verticalCell = document.getElementById(`v_${cellId}`);

    if (horizontalCell && verticalCell) {
        if(active){
            horizontalCell.classList.add('active');
            verticalCell.classList.add('active');
            activeCells.add(cellId);
        }else{
            horizontalCell.classList.remove('active');
            verticalCell.classList.remove('active');
            activeCells.delete(cellId);
        }
    }
}

// Función para activar una celda en ambas tablas
function changeActiveTESTA(cellId, active) {
    const horizontalCell = document.getElementById(`h_${cellId}`);
    const verticalCell = document.getElementById(`v_${cellId}`);
    const cellToModify = active ? horizontalCell : verticalCell;

    if (cellToModify) {
        cellToModify.classList[active ? 'add' : 'remove']('active');
        active ? activeCells.add(cellId) : activeCells.delete(cellId);
    }
}

// Función para desactivar una celda en ambas tablas
function deactivateCell(cellId) {
    const horizontalCell = document.getElementById(`h_${cellId}`);
    const verticalCell = document.getElementById(`v_${cellId}`);

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
            const cellId = cell.id.replace('h_', '').replace('v_', '');
            //changeActiveTESTA(cellId, !cell.classList.contains('active'));
            if (cell.classList.contains('active')) {
                changeActiveTESTA(cellId, true);
            } else {
                changeActiveTESTA(cellId, false);
            }
        });
    });
});

// Ejecuta la función al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', checkTableLayout);
window.addEventListener('resize', checkTableLayout);
