//Probando con funcion constructora

function CuentaBancaria(){
    this.titular = "Alex" //Titular de la cuenta
    this.saldo = 0 // Valor inicial igual a 0

    this.depositar = function(cantidad){  
        if (cantidad > 0){
        this.saldo += cantidad
        console.log(`Han sido depositados ${cantidad} pesos en su cuenta`)
    } else{
        console.log("Se requiere que la cantidad a depositar sea mayor que 0")
    }
}

  this.extraer = function(cantidad){
    if(cantidad > 0 && cantidad <= this.saldo){
        this.saldo -= cantidad
        console.log(`Han sido extraidos ${cantidad} pesos de su cuenta`)
    } else{
        console.log("La cantidad que desea extraer es mayor que el saldo de su cuenta")
    }
  }
  
  this.informe = function(){
    console.log(`Titular: ${this.titular} | Saldo: ${this.saldo}`)

  }
}

let cuenta1 = new CuentaBancaria();
cuenta1.informe();
cuenta1.depositar(1000);
cuenta1.informe();
cuenta1.extraer(500);
cuenta1.informe();