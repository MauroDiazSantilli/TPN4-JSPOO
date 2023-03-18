let auto = {
    color: "Azul",
    marca: "Ford",
    modelo: "Fiesta",
    encendido: false,

encender: function(){
    if (!this.encendido){
    this.encendido = true
    console.log("El auto acaba de encenderse.")
    }else{
        console.log("El auto ya está encendido.")
}

},

 apagar: function(){
    if(this.encendido){
        this.encendido = false
        console.log("El auto acaba de apagarse")
    } else{
        console.log("El auto ya está apagado")
    }
 }
}