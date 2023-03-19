class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }

    imprimirDatos(){
        document.write(`<br>Codigo: ${this.codigo}</br><br> Nombre: ${this.nombre}</br><br> Precio: $${this.precio}</br>`)
        
    }
}

let producto1 = new Producto(1, "Producto 1", 25)
let producto2 = new Producto(2, "Producto 2", 50)
let producto3 = new Producto(3, "Producto 3", 75)

let productos = [producto1, producto2, producto3]


for(i = 0; i < productos.length; i++){
   productos[i].imprimirDatos()
}
