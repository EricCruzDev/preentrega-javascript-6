class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock = this.stock - cantidad;
            return "Venta realizada correctamente.";
        }

        return "No hay suficiente stock.";
    }
}

const producto1 = new Producto("Pan", 1500, "Alimentos", 10);
const producto2 = new Producto("Leche", 1200, "Lácteos", 8);
const producto3 = new Producto("Arroz", 1800, "Alimentos", 15);

const productos = [producto1, producto2, producto3];

const listaProductos = document.querySelector("#listaProductos");
const resultado = document.querySelector("#resultado");

function mostrarProductos(productos) {
    listaProductos.innerHTML = "";

    productos.forEach((producto) => {
        listaProductos.innerHTML += `
            <article class="producto">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Stock: ${producto.stock}</p>
            </article>
        `;
    });
}

mostrarProductos(productos);

function buscarProducto() {
    const nombre = prompt("¿Qué producto querés buscar?");

    const productoEncontrado = productos.find(
        (producto) =>
            producto.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (productoEncontrado) {
        resultado.innerHTML = `
            <p class="resultado-item">
                Producto encontrado: <strong>${productoEncontrado.nombre}</strong>
            </p>
            <p class="resultado-item">
                Precio: $${productoEncontrado.precio}
            </p>
            <p class="resultado-item">
                Stock: ${productoEncontrado.stock}
            </p>
        `;
    } else {
        resultado.innerHTML = "<p>El producto no se encuentra.</p>";
    }
}

document.querySelector("#btnBuscar").addEventListener("click", buscarProducto);

function mostrarDisponibles() {
    const productosDisponibles = productos.filter(
        (producto) => producto.stock > 0
    );

    resultado.innerHTML = "<h3>Productos disponibles</h3>";

    productosDisponibles.forEach((producto) => {
        resultado.innerHTML += `
            <p class="resultado-item">
                ${producto.nombre} - Stock: ${producto.stock}
            </p>
        `;
    });
}

function mostrarNombres() {
    const nombresProductos = productos.map(
        (producto) => producto.nombre
    );

    resultado.innerHTML = `
        <p>${nombresProductos.join(", ")}</p>
    `;
}

document.querySelector("#btnDisponibles").addEventListener("click", mostrarDisponibles);
document.querySelector("#btnNombres").addEventListener("click", mostrarNombres);

function comprarProducto() {
    const nombre = prompt("¿Qué producto querés comprar?");

    const productoEncontrado = productos.find(
        (producto) =>
            producto.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (productoEncontrado) {
        const cantidad = parseInt(
            prompt("¿Cuántas unidades querés comprar?")
        );

        if (!isNaN(cantidad) && cantidad > 0) {
            const mensaje = productoEncontrado.vender(cantidad);

            resultado.innerHTML = `<p>${mensaje}</p>`;

            mostrarProductos(productos);
        } else {
            resultado.innerHTML = "<p>Ingresá una cantidad válida.</p>";
        }
    } else {
        resultado.innerHTML = "<p>El producto no se encuentra.</p>";
    }
}

document.querySelector("#btnComprar").addEventListener("click", comprarProducto);