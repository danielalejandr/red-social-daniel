const mongoose = require('mongoose')

const ContactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Contacto', ContactoSchema)