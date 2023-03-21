let auto = {
    color: "Azul",
    marca: "Ford",
    modelo: "Fiesta",
    encendido: false,
    encender: function(){
      if (!this.encendido){
        this.encendido = true;
        console.log("El auto acaba de encenderse.")
      }
    },
    apagar: function(){
      if(this.encendido){
        this.encendido = false;
        console.log("El auto acaba de apagarse")
      } 
    }
  }
  
  let decision = prompt("Desea encender o apagar el auto?")
  
  if (decision.toLowerCase() === "encender") {
    auto.encender();
  } else if (decision.toLowerCase() === "apagar") {
    auto.apagar();
  } else {
    alert("La accion solicitada no es valida.")
  }
  
  document.write(`<p>Color: ${auto.color}</p>`)
  document.write(`<p>Marca: ${auto.marca}</p>`)
  document.write(`<p>Modelo: ${auto.modelo}</p>`)
  document.write(`<p>Encendido: ${auto.encendido ? "Sí" : "No"}</p>`)