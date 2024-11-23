//hola mundo
let librosColeccion = [
    {
        nombre: "Cien Años de Soledad",
        paginas: 417,
        autor: "Gabriel García Márquez",
        generos: ["Realismo mágico", "Literatura latinoamericana"],
        disponible: true
    },
    {
        nombre: "1984",
        paginas: 328,
        autor: "George Orwell",
        generos: ["Distopía", "Ciencia ficción"],
        disponible: false
    }
];

   function informacionLibro (libro){
        let generos = libro.generos.join(", ");
        let disponibilidad = libro.disponible ? "se encuentra disponible" : "no se encuentra disponible ";
        console.log(`El libro ${libro.nombre}, tiene ${libro.paginas} páginas, fue escrito por ${libro.autor} y es del género ${generos} y ${disponibilidad}.`);
   }
   

    function imprimirLibros (libros){
        for (let i = 0 ; i < libros.legth; i++){
            informacionLibro(libros[i]);
        }
    }

    imprimirLibros(librosColeccion)

console.log("hola");