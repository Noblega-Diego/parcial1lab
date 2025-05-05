const mongoose = require('mongoose');
const bookScheme = new mongoose.Schema({ 
    titulo: { type: String, required: true },
    resumen: { type: String, required: false },
    genero: { type: String, required: true },
    publicacion: { type: Date, required: true },
    disponible: { type: Boolean, required: true }
});
const BookModel = mongoose.model('libros', bookScheme);

module.exports = { BookModel };
