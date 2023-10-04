const activeCells = new Set();

// Función para activar una celda en ambas tablas
function changeActive(cellId, active) {
    const horizontalCell = document.getElementById(`h_${cellId}`);
    const verticalCell = document.getElementById(`v_${cellId}`);

    if (horizontalCell && verticalCell) {
        if (active) {

            // Utiliza SweetAlert2 para mostrar una advertencia
            Swal.fire({
                title: '¿Activar numero ' + cellId + '?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, activar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#298f64'
            }).then((result) => {
                if (result.isConfirmed) {
                    horizontalCell.classList.add('active');
                    verticalCell.classList.add('active');
                    activeCells.add(cellId);
                }
            });
        } else {
            // Utiliza SweetAlert2 para mostrar una advertencia
            Swal.fire({
                title: '¿Desactivar numero ' + cellId + '?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, desactivar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#e23030'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Si el usuario confirma, se quita el activo en la celda
                    horizontalCell.classList.remove('active');
                    verticalCell.classList.remove('active');
                    activeCells.delete(cellId);
                }
            });
        }
    }
}


function buttonChangeActive(){
    const cellInput = document.getElementById('cellInput');
    const cellId = cellInput.value.trim(); // Obtener el valor del campo de entrada
    // Verificar si el valor cumple con la expresión regular
    const pattern = /^(?:[1-9]|[1-6][0-9]|75)$/;
    if (pattern.test(cellId)) {
        changeActive(cellId, !document.getElementById(`h_${cellId}`).classList.contains('active'));
    } else {
        // El valor ingresado no cumple con la expresión regular, muestra un mensaje de error
        alert('Ingrese un número válido del 1 al 75.');
    }
}

// Función para restablecer el estado "active" en todas las celdas
function resetTable() {

    // Verificar si no hay celdas activas
    if (activeCells.size === 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
        })
          
        Toast.fire({
            icon: 'question',
            title: 'La tabla no tiene celdas activas'
        })
        return; // Salir de la función sin restablecer la tabla
    }

    // Utiliza SweetAlert2 para mostrar una advertencia
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción restablecerá la tabla y eliminará todos los estados activos.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, restablecer',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, restablece la tabla
            const activeCellsArray = Array.from(activeCells);

            activeCellsArray.forEach(cellId => {
                const horizontalCell = document.getElementById(`h_${cellId}`);
                const verticalCell = document.getElementById(`v_${cellId}`);

                if (horizontalCell && verticalCell) {
                    horizontalCell.classList.remove('active');
                    verticalCell.classList.remove('active');
                }
            });

            activeCells.clear();
            
            // Muestra un mensaje de éxito con SweetAlert2
            Swal.fire({
                title: 'Tabla restablecida',
                icon: 'success',
            });
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
            changeActive(cellId, !cell.classList.contains('active'));
        });
    });
});

// Ejecuta la función al cargar la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', checkTableLayout);
window.addEventListener('resize', checkTableLayout);
