const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    tipodocumento: {    
        type: String,
        required: true
    },
    documento: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    clave:{
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
    
},{
    versionKey: false
})

module.exports = mongoose.model('Usuario', UsuarioSchema)