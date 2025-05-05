const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Root:Root@user.vauaijh.mongodb.net/Libros')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// routers
const RoutersBooks     = require('./routers/books');
const RoutersAuthors  = require('./routers/authors');


const app = express();
app.use(bodyParser.json());
app.use('/books', RoutersBooks);
app.use('/authors', RoutersAuthors);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

