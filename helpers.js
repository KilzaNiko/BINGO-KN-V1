function getWindowsSize() {
    const ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    return [ancho, alto];
}

const undoStack = [];
function changeCellState() {
    const input = document.getElementById('cellInput').value;
    const cellId = input.replace(/\D/g, ''); // Obtener solo los dígitos del input
    const cell = document.getElementById(cellId);

    if (cell) {
        cell.classList.toggle('active'); // Cambiar el estado
        undoStack.push(cellId); // Agregar a la pila para deshacer
    }

    document.getElementById('cellInput').value = ''; // Limpiar el input 
}

function resetAllCells() {
    numberCells.forEach(cell => {
        cell.classList.remove('active'); // Restablecer todas las celdas
    });
}

// Estado de las celdas activas
const activeCells = new Set();

// Función para guardar el estado de las celdas activas
function saveActiveCells() {
    activeCells.clear();
    const numberCells = document.querySelectorAll('.number.active');
    numberCells.forEach(cell => {
        activeCells.add(cell.id);
    });
}

// Función para restaurar el estado de las celdas activas
function restoreActiveCells() {
    activeCells.forEach(cellId => {
        const cell = document.getElementById(cellId);
        if (cell) {
            cell.classList.add('active');
        }
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
        restoreActiveCells(); // Restaurar el estado de las celdas activas en la tabla horizontal
    } else {
        horizontalTable.style.display = 'none';
        verticalTable.style.display = 'block';
        saveActiveCells(); // Guardar el estado de las celdas activas en la tabla vertical
    }
}

// Ejecuta la función al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', checkTableLayout);
window.addEventListener('resize', checkTableLayout);


