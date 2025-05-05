const mongoose = require('mongoose');
const AuthorModel = mongoose.model('autors', { 
    nombre: { type: String, required: true },
    bio: { type: String, required: false },
    fechaNacimiento: { type: Date, required: true },
    nacionalidad: { type: String, required: true },
    Libros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = {AuthorModel};