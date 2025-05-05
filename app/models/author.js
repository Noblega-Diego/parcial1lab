const mongoose = require('mongoose');
const authorScheme = new mongoose.Schema({ 
    nombre: { type: String, required: true },
    bio: { type: String, required: false },
    fechaNacimiento: { type: Date, required: true },
    nacionalidad: { type: String, required: true },
    Libros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
})
const AuthorModel = mongoose.model('autors', authorScheme);

module.exports = {AuthorModel};