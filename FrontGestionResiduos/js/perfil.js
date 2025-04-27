// Funciones para el modal de edición de perfil
function editarPerfil() {
    const modal = document.getElementById('modalEditar');
    // Rellenar el formulario con los datos actuales
    document.getElementById('nombre').value = document.querySelector('.info-item:nth-child(1) p').textContent;
    document.getElementById('email').value = document.querySelector('.info-item:nth-child(2) p').textContent;
    document.getElementById('telefono').value = document.querySelector('.info-item:nth-child(3) p').textContent;
    document.getElementById('direccion').value = document.querySelector('.info-item:nth-child(4) p').textContent;
    
    modal.style.display = 'flex';
}

function cerrarModal() {
    const modal = document.getElementById('modalEditar');
    modal.style.display = 'none';
}

function guardarCambios(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    // Actualizar los valores en el perfil
    document.querySelector('.info-item:nth-child(1) p').textContent = nombre;
    document.querySelector('.info-item:nth-child(2) p').textContent = email;
    document.querySelector('.info-item:nth-child(3) p').textContent = telefono;
    document.querySelector('.info-item:nth-child(4) p').textContent = direccion;

    // Mostrar mensaje de éxito
    alert('Cambios guardados exitosamente');
    cerrarModal();
}

// Cerrar modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modalEditar');
    if (event.target === modal) {
        cerrarModal();
    }
} 