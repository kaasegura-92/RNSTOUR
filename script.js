// ========================================
// CARRUSELES AUTOMÁTICOS - RNS TOUR
// ========================================

const carruseles = [
    {
        destino: "BRASIL",
        imagenes: [
            "./imagenes/rns1.png",
            "./imagenes/brasil-1.jpg",
            "./imagenes/brasil2.jpg"
        ]
    },

    {
        destino: "BÚZIOS",
        imagenes: [
            "./imagenes/buzios-1.png",
            "./imagenes/buzios2.png"
        ]
    },

    {
        destino: "RÍO DE JANEIRO",
        imagenes: [
            "./imagenes/rio-2.jpg",
            "./imagenes/rio3.png"
        ]
    }
];


// Buscamos todas las imágenes que tengan esta clase
const imagenesCarrusel = document.querySelectorAll(".imagen-carrusel");


// Iniciamos un carrusel para cada destino
carruseles.forEach((carrusel, indice) => {

    let posicion = 0;

    setInterval(() => {

        // Pasamos a la siguiente imagen
        posicion++;

        // Cuando llegamos al final, volvemos a la primera
        if (posicion >= carrusel.imagenes.length) {
            posicion = 0;
        }

        // Cambiamos la imagen
        imagenesCarrusel[indice].src = carrusel.imagenes[posicion];

    }, 3000);

});
