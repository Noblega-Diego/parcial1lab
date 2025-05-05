const mongoose = require('mongoose');
const BookModel = mongoose.model('libros', { 
    titulo: { type: String, required: true },
    resumen: { type: String, required: false },
    genero: { type: String, required: true },
    publicacion: { type: Date, required: true },
    disponible: { type: Boolean, required: true }
});

module.exports = { BookModel };
