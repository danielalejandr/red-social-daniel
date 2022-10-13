const { findById } = require("../models/Usuario");
const Usuario = require("../models/Usuario");

exports.obtenerUsuario = async (req, res) => {
    console.log("te estoy dando este dato")
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        console.groupCollapsed(error)
        res.status(500).send('hay un error')
    }
    
}

exports.crearUsuario = async (req, res) => {
    console.log('creando el producto')
    try {
        let dataUsuario;

        dataUsuario = new Usuario(req.body)
        await dataUsuario.save();
        res.send(dataUsuario);
    
    }catch (error){
        console.groupCollapsed(error)
        res.status(500).send('Existe un problema...... comuniquese con el administrador')
    }
}

exports.actualizarUsuario= async (req, res) => {
    
        const { nombre, apellido, tipodocumento, documento, fecha, contacto, correo, clave} = req.body

        let usuario = await Usuario.findById(req.params.id)

        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario especificado'})
        }

        usuario.nombre = nombre
        usuario.apellido = apellido
        usuario.tipodocumento = tipodocumento
        usuario.documento = documento
        usuario.fecha = fecha
        usuario.contacto = contacto
        usuario.correo = correo
        usuario.clave = clave

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true })
        res.json(usuario)
}

exports.eliminarUsuario = async (req, res) => {
    console.log("eliminar usuario")
    try {
        let usuario = await Usuario.findById(req.params.id)

        if (!usuario) {
            res.status(404).json({ msg: 'No existe el usuario seleccionado' })
        }

        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'El usuario se elimino correctamente' })

    } catch (error) {
        console.log(error)
        res.status(500).send('existe un problema')
    }
    
}
exports.obtenerUsuarioEspecifico = async (req, res) => {
    try {
        let usuario_especifico =  await Usuario.findById(req.params.id)
        if (!usuario_especifico) {
            res.status(404).json({ error: 'No existe el usuario seleccionado'})        
        }
        res.json(usuario_especifico)

    } catch (error) {
        console.log(error)
        res.status(500).send('hay un error')
    }
    
}


