const mongoose = require('mongoose')
require('dotenv').config({ path: 'config.env'})

const conectarDb = async () => {
    try {
        await mongoose.connect(process.env.CONEX_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("conexion exitosa")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDb