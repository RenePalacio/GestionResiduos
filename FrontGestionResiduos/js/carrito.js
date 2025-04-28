// Clase para manejar el carrito de compras
class Carrito {
    constructor() {
        this.items = [];
        this.cargarDeLocalStorage();
        this.actualizarContador();
    }

    agregarItem(material, cantidad, unidad, descripcion, centro) {
        const item = {
            material,
            cantidad,
            unidad,
            descripcion,
            centro,
            fecha: new Date().toISOString()
        };
        this.items.push(item);
        this.guardarEnLocalStorage();
        this.actualizarContador();
        this.mostrarNotificacion('Material agregado al carrito');
    }

    eliminarItem(index) {
        this.items.splice(index, 1);
        this.guardarEnLocalStorage();
        this.actualizarContador();
    }

    limpiarCarrito() {
        this.items = [];
        this.guardarEnLocalStorage();
        this.actualizarContador();
    }

    guardarEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(this.items));
    }

    cargarDeLocalStorage() {
        const itemsGuardados = localStorage.getItem('carrito');
        if (itemsGuardados) {
            this.items = JSON.parse(itemsGuardados);
        }
    }

    actualizarContador() {
        const contador = document.getElementById('contador-carrito');
        if (contador) {
            contador.textContent = this.items.length;
            if (this.items.length > 0) {
                contador.style.display = 'block';
            } else {
                contador.style.display = 'none';
            }
        }
    }

    mostrarNotificacion(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = mensaje;
        document.body.appendChild(notificacion);

        setTimeout(() => {
            notificacion.remove();
        }, 3000);
    }
}

// Inicializar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    const carrito = new Carrito();
    window.carrito = carrito; // Hacer el carrito accesible globalmente

    // Manejar el formulario de reciclaje
    const formReciclaje = document.getElementById('form-reciclaje');
    if (formReciclaje) {
        formReciclaje.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const material = document.getElementById('material').value;
            const cantidad = document.getElementById('cantidad').value;
            const unidad = document.getElementById('unidad').value;
            const descripcion = document.getElementById('descripcion').value;

            if (!material || !cantidad) {
                alert('Por favor, selecciona un material e ingresa la cantidad');
                return;
            }

            carrito.agregarItem(material, cantidad, unidad, descripcion);
            formReciclaje.reset();
        });
    }
}); 