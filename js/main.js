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