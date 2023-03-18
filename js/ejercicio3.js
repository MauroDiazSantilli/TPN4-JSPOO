class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto
        this.ancho = ancho
    }

    cambiarAlto(nuevoAlto){
     this.alto = nuevoAlto
    }

    cambiarAncho(nuevoAncho){
     this.ancho = nuevoAncho
    }

    mostrarPropiedades(){
        console.log(`Alto: ${this.alto} | Ancho: ${this.ancho}`)
    }

    calculoPerimetro(){
        return 2 * (this.alto + this.ancho)
    }

    calculoArea(){
        return this.alto * this.ancho
    }
}

let rectangulo1 = new Rectangulo (12, 18)
rectangulo1.mostrarPropiedades()
rectangulo1.cambiarAlto(6)
rectangulo1.cambiarAncho(9)
rectangulo1.mostrarPropiedades()

let rectangulo2 = new Rectangulo (25, 30)
rectangulo2.mostrarPropiedades()
rectangulo2.cambiarAlto(14)
rectangulo2.cambiarAncho(20)
rectangulo2.mostrarPropiedades()

let rectangulo3 = new Rectangulo (37, 47)
rectangulo3.mostrarPropiedades()
rectangulo3.cambiarAlto(23)
rectangulo3.cambiarAncho(29)
rectangulo3.mostrarPropiedades()