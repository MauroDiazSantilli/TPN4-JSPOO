class Libro{
   constructor(isbn, titulo, autor, numpaginas){
   this.isbn = isbn
   this.titulo = titulo
   this.autor = autor
   this.numpaginas = numpaginas
}

getISBN(){
    return this.isbn
}

setISBN(isbn){
    this.isbn = isbn
}
getTitulo(){
    return this.titulo
}

setTitulo(titulo){
    this.titulo = titulo
}
getAutor(){
    return this.autor
}

setAutor(autor){
    this.autor = autor
}
getNumeroPaginas(){
    return this.numpaginas
}

setNumeroPaginas(numpaginas){
    this.numpaginas = numpaginas
}

mostrarLibro(){
    document.write(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene paginas ${this.numpaginas}<br>`)
}

}

let isbn1 = prompt("Por favor introduzca el ISBN del libro 1 (Numero de 13 cifras): ")
let titulo1 = prompt("Por favor introduzca el titulo del libro 1: ")
let autor1 = prompt("Por favor introduzca el autor del libro 1: ")
let numpaginas1 = prompt("Por favor introduzca el numero de paginas del libro 1: ")

let isbn2 = prompt("Por favor introduzca el ISBN del libro 2 (Numero de 13 cifras): ")
let titulo2 = prompt("Por favor introduzca el titulo del libro 2: ")
let autor2 = prompt("Por favor introduzca el autor del libro 2: ")
let numpaginas2 = prompt("Por favor introduzca el numero de paginas del libro 2: ")

let libro1 = new Libro(isbn1, titulo1, autor1, numpaginas1)
let libro2 = new Libro(isbn2, titulo2, autor2, numpaginas2)

libro1.mostrarLibro()
libro2.mostrarLibro()

if(libro1.getNumeroPaginas() > libro2.getNumeroPaginas()){
    document.write(`El libro ${libro1.getTitulo()} tiene mas paginas que el libro ${libro2.getTitulo()}<br>`)
}else if(libro2.getNumeroPaginas() > libro1.getNumeroPaginas()){
    document.write(`El libro ${libro2.getTitulo()} tiene mas paginas que el libro ${libro1.getTitulo()}<br>`)
} else{
    document.write("Ambos libros tienen el mismo numero de paginas<br>")
}