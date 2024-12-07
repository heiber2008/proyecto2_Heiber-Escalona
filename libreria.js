//hola mi gente buena
// segundo comentario x
let librosColeccion = [{
    "nombre": "el principito",
    "cantidaddePaginas": 100,
    "autor": "mario",
    "genero": ["drama", "romance"],
    "disponible": true
},
{
    "nombre": "señor de los anillos",
    "cantidaddepaginas": 1304,
    "autor": "pedro",
    "genero": ["accion", "drama"],
    "disponible": true
}
];

function informacionLibro(libro) {
    console.log(libro.nombre + " " + libro.cantidaddePaginas + " "
        + libro.autor + " " + libro.genero + " " + libro.disponible)
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

