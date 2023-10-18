
// creamos una constante donde guardamos las opciones que puede elegir el usuario
const opcionesSomieres = {
    "Somier Individual": 100,
    "Somier Matrimonial": 200,
    "Somier Queen": 300,
    "Somier King": 400
};

// variables para el carrito y el total de ventas
let carrito = [];
let totalVentas = 0;

// función para mostrar opciones y permitir al usuario elegir
function elegirSomier() {
    let mensaje = "¡Bienvenid@!, por favor elije una opción:\n";

    for (var opcion in opcionesSomieres) {
        mensaje += opcion + " - $" + opcionesSomieres[opcion] + "\n";
    }

    mensaje += "0. Finalizar compra";

    let eleccion = prompt(mensaje);
    if (eleccion === null) {
        return;
    }

    let opcionElegida = parseInt(eleccion);
    if (opcionElegida === 0) {
        mostrarCarrito();
        return;
    }

    let opciones = Object.keys(opcionesSomieres);
    if (opcionElegida < 1 || opcionElegida > opciones.length) {
        alert("Opción no válida. Elija nuevamente.");
    } else {
        let somierElegido = opciones[opcionElegida - 1];
        let precioSomier = opcionesSomieres[somierElegido];
        let cantidad = parseInt(prompt("Ingrese la cantidad de " + somierElegido));
        if (!isNaN(cantidad) && cantidad > 0) {
            let subtotal = precioSomier * cantidad;
            carrito.push({ somier: somierElegido, cantidad: cantidad, subtotal: subtotal });
            totalVentas += subtotal;
            alert("Agregado al carrito: " + cantidad + " x " + somierElegido + " - Subtotal: $" + subtotal);
        } else {
            alert("Cantidad no válida. Elija nuevamente.");
        }
    }

    elegirSomier(); // Continuar eligiendo somieres
}

// Función para mostrar el contenido del carrito y el total de ventas
function mostrarCarrito() {
    let resumenCarrito = "Carrito de compras:\n";
    for (let i = 0; i < carrito.length; i++) {
        resumenCarrito += carrito[i].cantidad + " x " + carrito[i].somier + " - Subtotal: $" + carrito[i].subtotal + "\n";
    }

    resumenCarrito += "Total de ventas: $" + totalVentas;
    alert(resumenCarrito);
}

// Iniciar el proceso de compra
elegirSomier();