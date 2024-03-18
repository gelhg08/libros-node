const moongose = require('moongose');

const userSchema = new moongose.Schema({
    name: String,
    genero: String,
    numeroReferencia: String,
})

const Libros = mongoose.model("Libros", userSchema);

module.exports = Libros;