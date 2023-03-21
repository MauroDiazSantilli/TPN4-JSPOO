class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre
        this.telefono = telefono
    }
}

class Agenda{
    constructor (tamanio = 10){
    this.contactos = []
    this.tamanio = tamanio
    }


    aniadirContacto(contacto){
        if(this.contactos.lenght === this.tamanio){
         console.log("La agenda se encuentra lena. No se pueden añadir mas contactos.")
        }else if(this.exsiteContacto(contacto)){
         console.log(`El contacto ${contacto.nombre} ya existe en la agenda.`)
        }else{
            this.contactos.push(contacto)
            console.log(`Se añadió el contacto ${contacto.nombre} exitosamente.`)
        }
    }


}
