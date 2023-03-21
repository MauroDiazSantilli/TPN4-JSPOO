class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    cambiarAlto(nuevoAlto) {
      this.alto = nuevoAlto;
    }
    cambiarAncho(nuevoAncho) {
      this.ancho = nuevoAncho;
    }
    mostrarPropiedades() {
      document.write(`Alto: ${this.alto} | Ancho: ${this.ancho}<br>`);
    }
    calculoPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
    calculoArea() {
      return this.alto * this.ancho;
    }
  }
  
  let rectangulo1 = new Rectangulo(12, 18);
  rectangulo1.mostrarPropiedades();
  let nuevoAlto = prompt("Ingrese el nuevo alto para el rectangulo 1:");
  let nuevoAncho = prompt("Ingrese el nuevo ancho para el rectangulo 1:");
  rectangulo1.cambiarAlto(parseInt(nuevoAlto));
  rectangulo1.cambiarAncho(parseInt(nuevoAncho));
  document.write("Nuevo tamaño del rectangulo 1:<br>");
  rectangulo1.mostrarPropiedades();
  document.write(`Area: ${rectangulo1.calculoArea()} | Perímetro: ${rectangulo1.calculoPerimetro()}<br></br>`);
  
  let rectangulo2 = new Rectangulo(25, 30);
  rectangulo2.mostrarPropiedades();
  nuevoAlto = prompt("Ingrese el nuevo alto para el rectangulo 2:");
  nuevoAncho = prompt("Ingrese el nuevo ancho para el rectangulo 2:");
  rectangulo2.cambiarAlto(parseInt(nuevoAlto));
  rectangulo2.cambiarAncho(parseInt(nuevoAncho));
  document.write("Nuevo tamaño del rectangulo 2:<br>");
  rectangulo2.mostrarPropiedades();
  document.write(`Area: ${rectangulo2.calculoArea()} | Perímetro: ${rectangulo2.calculoPerimetro()}<br></br>`);
  
  let rectangulo3 = new Rectangulo(37, 47);
  rectangulo3.mostrarPropiedades();
  nuevoAlto = prompt("Ingrese el nuevo alto para el rectangulo 3:");
  nuevoAncho = prompt("Ingrese el nuevo ancho para el rectangulo 3:");
  rectangulo3.cambiarAlto(parseInt(nuevoAlto));
  rectangulo3.cambiarAncho(parseInt(nuevoAncho));
  document.write("Nuevo tamaño del rectangulo 3:<br>");
  rectangulo3.mostrarPropiedades();
  document.write(`Area: ${rectangulo3.calculoArea()} | Perimetro: ${rectangulo3.calculoPerimetro()}<br></br>`);
  