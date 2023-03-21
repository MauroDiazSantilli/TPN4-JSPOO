//Probando con funcion constructora

function CuentaBancaria(){
  this.titular = "Alex"; //Titular de la cuenta
  this.saldo = 0; // Valor inicial igual a 0

  this.depositar = function(cantidad){
    if (cantidad > 0){
      this.saldo += cantidad;
      document.write(`Han sido depositados ${cantidad} pesos en su cuenta.<br>`);
    } else{
      document.write("Se requiere que la cantidad a depositar sea mayor que 0.<br>");
    }
  }

  this.extraer = function(cantidad){
    if(cantidad > 0 && cantidad <= this.saldo){
      this.saldo -= cantidad;
      document.write(`Han sido extraidos ${cantidad} pesos de su cuenta.<br>`);
    } else{
      document.write("La cantidad que desea extraer es mayor que el saldo de su cuenta.<br>");
    }
  }

  this.informe = function(){
    document.write(`Titular: ${this.titular} | Saldo: ${this.saldo}<br>`);
  }
}

let cuenta1 = new CuentaBancaria();
cuenta1.informe();

let cantidadDepositar = prompt("Ingrese la cantidad que desea depositar:");
cuenta1.depositar(parseFloat(cantidadDepositar));
cuenta1.informe();

let cantidadExtraer = prompt("Ingrese la cantidad que desea extraer:");
cuenta1.extraer(parseFloat(cantidadExtraer));
cuenta1.informe();
