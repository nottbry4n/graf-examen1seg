// =========================================
// OBTENER LA IMAGEN
// =========================================

const image = document.getElementById('image');


// =========================================
// OBTENER LOS BOTONES
// =========================================

const extraSmallBtn = document.getElementById('extraSmallBtn');

const smallBtn = document.getElementById('smallBtn');

const mediumBtn = document.getElementById('mediumBtn');

const largeBtn = document.getElementById('largeBtn');

const extraLargeBtn = document.getElementById('extraLargeBtn');


// =========================================
// X - PEQUEÑO
// AMARILLO
// Tamaño: 100px
// =========================================

extraSmallBtn.addEventListener('click', () => {

    image.style.width = '100px';

});


// =========================================
// PEQUEÑO
// AZUL
// Tamaño: 180px
// =========================================

smallBtn.addEventListener('click', () => {

    image.style.width = '180px';

});


// =========================================
// MEDIANO
// GRIS
// Tamaño: 300px
// =========================================

mediumBtn.addEventListener('click', () => {

    image.style.width = '300px';

});


// =========================================
// GRANDE
// VERDE
// Tamaño: 450px
// =========================================

largeBtn.addEventListener('click', () => {

    image.style.width = '450px';

});


// =========================================
// X - GRANDE
// ROSA
// Tamaño: 600px
// =========================================

extraLargeBtn.addEventListener('click', () => {

    image.style.width = '600px';

});