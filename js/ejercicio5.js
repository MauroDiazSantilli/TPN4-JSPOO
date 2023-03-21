class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.DNI = this.generarDNI();
      this.anioNacimiento = new Date().getFullYear() - this.edad;
    }
  
    mostrarGeneracion(){
        let generacion = ""
        if(this.anioNacimiento >= 1939 && this.anioNacimiento <= 1948){
            generacion = "Silent Generation"
            document.write(`La persona pertenece a la generacion ${generacion}. Esta es una generacion ubicada en un contexto de conflictos belicos. Su rasgo mas caracteristico es que se han acostumbrado a la austeridad y son personas muy trabajadoras, pues han tenido una vida complicada y han sido educadas en la cultura del esfuerzo y del sacrificio.`)
        } else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968 ){
            generacion = "Baby Boomers"
            document.write(`La persona pertenece a la generacion ${generacion}. Esta es una generacion ubicada en un contexto de paz y explosion demografica. Su rasgo mas caracteristico es el sentido de ambicion. Son una generación acostumbrada a la independencia económica y a la toma de decisiones, pero siempre apegados a los valores.`)

        } else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
            generacion = "Generacion X"
            document.write(`La persona pertenece a la generacion ${generacion}. Esta es una generacion ubicada en el contexto de la crisis del 73 y son los que vieron el nacimiento de la Internet y demás avances tecnologicos. Su rasgo mas caracteristico es su obsesion por el exito.`)

        } else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
            generacion = "Generacion Y"
            document.write(`La persona pertenece a la generacion ${generacion}. Tambien conocidos como Millenials, esta es una generacion ubicada en el contexto del auge de la digitalizacion. Su rasgo mas caracteristico es ser muy adaptados a la tecnologia. Sin embargos, tambien los caracteriza una cierta frustracion ya que el mundo, con motivo de la crisis económica, les exige una mayor preparación para optar a un puesto de trabajo, donde cada vez la competencia se hace mayor.`)

        } else if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
            generacion = "Generacion Z"
            document.write(`La persona pertenece a la generacion ${generacion}. Tambien conocidos como Centenials, esta es una generacion ubicada en el contexto de la expansion masiva de la Internet. Su rasgo mas caracteristico es que son autenticos nativos digitales, ya que usan la Internet desde niños. También se les considera más conscientes y comprometidos con temas sociales y medioambientales. Sin embargo, tambien se caracterizan por su irreverencia.`)

        } else {
            document.write("No es posible encontrar la generacion")
        }
     }

  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        document.write(`<br><br>${this.nombre} es mayor de edad. </br></br>`);
      } else {
        document.write(`<br><br>${this.nombre} no es mayor de edad. </br></br>`);
      }
    }
  
    mostrarDatos() {
      document.write(`Nombre: ${this.nombre} <br>`);
      document.write(`Edad: ${this.edad} <br>`);
      document.write(`DNI: ${this.DNI} <br>`);
      document.write(`Sexo: ${this.sexo} <br>`);
      document.write(`Peso: ${this.peso} kg <br>`);
      document.write(`Altura: ${this.altura} mts <br>`);
      document.write(`Año de nacimiento: ${this.anioNacimiento} <br>`);
    }
  
    generarDNI() {
      let dni = "";
      for (let i = 0; i < 8; i++) {
        dni += Math.floor(Math.random() * 10);
      }
      return dni;
    }
  }


let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let sexo = prompt("Ingrese su sexo (H hombre | M mujer):");
let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));

let persona1 = new Persona(nombre, edad, sexo, peso, altura);

document.write(`<h2>Información de la persona:</h2>`);
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
document.write(`<p>${persona1.mostrarDatos()}</p>`);
