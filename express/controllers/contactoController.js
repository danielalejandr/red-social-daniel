const Contacto = require("../models/Contacto");

exports.crearContacto = async (req, res) => {
    try {
        let dataUsuario;

        dataContacto = new Contacto(req.body)
        await dataContacto.save();
        res.send(dataContacto)
    
    }catch (error){
        console.log(error)
        res.status(500).send('hay un error')
    }
}