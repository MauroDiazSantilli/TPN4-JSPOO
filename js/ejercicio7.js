class Contacto{
    #nombre
    #telefono
    constructor(nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nuevoNombre){
      this.#nombre = nuevoNombre
    }
    get telefono(){
        return this.#telefono
    }

    set telefono(nuevoTelefono){
      this.#telefono = nuevoTelefono
    }

}

class Agenda{
    #tamanio
  constructor(tamanio){
    this.contactos = []
    this.tamanio = this.tamanio

  }

  get tamanio(){
    return this.#tamanio
  }
  set tamanio(nuevoTamanio){
    this.#tamanio = nuevoTamanio
  }

//metodos
  agregarContacto(contacto){
    //si el contacto existe en la agenda
     if(!this.existeContacto(contacto.nombre)){
    //tengo que preguntar si la agenda tiene espacios libres
    if(!this.agendaLlena()){
    this.contactos.push(contacto)
    console.log("Contacto agregado")
     }
    }else{
        console.log("El contacto ya existe y no se puede agregar")
    }
  }

  agendaLlena(){
    if(this.contactos.length === this.tamanio){
       console.log("Agenda llena")
       return true
    }else{
        console.log("Queda espacio")
        return false
    }
    
 }

  existeContacto(nombreContacto){
     //buscar el contacto en la agenda
     const existe = this.contactos.find(contacto => contacto.nombre === nombreContacto )
     if(existe){
        console.log("El contacto existe")
     }else{
        console.log("El contacto no existe")
        return false
     }
   }

   listarContactos(){
    document.write('<h2>Lista de contactos</h2>')
    this.contactos.map(contacto =>{
     document.write(`<p> Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono}</p>`)
     console.log(`Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono}`)
    })
   }
    buscarContacto(nombreContacto){
        const contactoBuscado = this.contactos.find(contacto => contacto.nombre === nombreContacto)

        if(contactoBuscado){
            console.log(`Contacto encontrado, nombre: ${contactoBuscado.nombre} - telefono ${contactoBuscado.telefono}`)
        }else{
            console.log("No encontramos el contacto buscado")
        }
    }

    eliminarContacto(nombreContacto){
    let contactosFiltrados = this.contactos.filter(contacto => contacto.nombre !== nombreContacto)
    this.contactos = contactosFiltrados
    if(contactosFiltrados.length === this.contactos.length){
        console.log("No borramos ningun contacto")
    } else{
        console.log("Borramos al contacto" +nombreContacto)
    }
    
    }

    espaciosDisponibles(){
        let espaciosDisponibles = this.tamanio - this.contactos.length
        espaciosDisponibles > 0? console.log(`Espacios disponibles ${espaciosDisponibles}`): console.log("No hay espacios disponibles")
    }

    modificarTamanioAgenda(){
        
    }
}




let nuevaAgenda = new Agenda(10)
console.log(nuevaAgenda)

do{
let opcion = parseInt((`Seleccione una opcion: 
1- Añadir contacto
2- Existe contacto
3- Listar contactos
4- Buscar contactos
5- Eliminar contacto
6- Agenda llena
7- Huecos libres
8- Salir`))


switch(opcion){
    case 1:
        //crear el contacto
        let nombre = prompt("Ingrese un nombre")
        let telefono = prompt("Ingrese un telefono")

        let nuevoContacto = new Contacto(nombre, telefono)

        nuevaAgenda.agregarContacto(nuevoContacto)
        break
    case 2:
        let nombreBuscado = prompt("Ingrese el nombre")
        nuevaAgenda.existeContacto
        break
    case 3:
         nuevaAgenda.listarContactos()
        break
    case 4:
        const nombreSolicitado = prompt("Igrese el nombre que desea buscar")
        nuevaAgenda.buscarContacto
        break
    case 5:
        const eliminarPersona = prompt("Ingrese el nombre de la persona que desea eliminar")
        break
    case 6:
        document.write(`<p>La agenda esta llena? ${nuevaAgenda.agendaLlena()}</p>`)
        console.log("Agenda llena")
        break
    case 7:
        console.log("Espacios libres")
        break
    case 8:
        console.log("Cambiar el tamaño de la agenda")
        break
    default:
}


}while(confirm('Desea realizar otra operacion?'))
