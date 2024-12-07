//hola mi gente buena
// segundo comentario x
let librosColeccion = [{
    "nombre": "el principito",
    "cantidadDePaginas": 100,
    "autor": "mario",
    "genero": ["drama", "romance"],
    "disponible": true
},
{
    "nombre": "señor de los anillos",
    "cantidadDePaginas": 1304,
    "autor": "pedro",
    "genero": ["accion", "drama"],
    "disponible": true
}
];

function informacionLibro(libro) {
    console.log("nombre: " + libro.nombre + ", paginas:" + libro.cantidadDePaginas + ", autor:"
        + libro.autor + ", " + libro.genero + ", " + libro.disponible)
};

function imprimirLibros(libros) {
    libros.forEach(libro => {
        informacionLibro(libro);
    });
}

function agregarLibro(libros, nuevoLibro) {

    libros.push(nuevoLibro);
}

imprimirLibros(librosColeccion);
