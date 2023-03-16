alert("Hora de jugar piedra papel o tijera!")
let eleccion = ["Piedra", "Papel", "Tijera"]
let usuarioEleccion = prompt("Piedra, papel o tijera?")
let eleccionCantidad = eleccion.length
let numeroAzar = Math.floor(Math.random() * eleccionCantidad)
let compuEleccion = eleccion[numeroAzar]

if (usuarioEleccion == compuEleccion){
    document.write("Empate")
} else if (compuEleccion == "Piedra"){
    if(usuarioEleccion == "Papel"){
        document.write("Felicidades, ganaste!")
    } else if(usuarioEleccion == "Tijera"){
        alert("Mala suerte, perdiste. Querés volver a intentarlo?")
    }

}else if(compuEleccion == "Papel"){
        if(usuarioEleccion == "Tijera"){
            document.write("Felicidades, ganaste!")
        } else if(usuarioEleccion == "Piedra"){
        alert("Mala suerte, perdiste. Querés volver a intentarlo?")
        }
    }else if(compuEleccion == "Tijera"){
        if(usuarioEleccion == "Piedra"){
            document.write("Felicidades, ganaste!")
        } else if(usuarioEleccion == "Papel"){
        alert("Mala suerte, perdiste. Querés volver a intentarlo?")
        }
    }

