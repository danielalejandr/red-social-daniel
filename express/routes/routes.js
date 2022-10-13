const express = require('express')
const router = express.Router()
const asistenciaController = require('../controllers/asistenciaController')
const usuarioController = require('../controllers/usuarioController')
const contactoController = require('../controllers/contactoController')


router.get('/pepe', asistenciaController.obtenerAsistencias)
router.post('/pepeinserta', asistenciaController.crearAsistencias)


router.get('/usuario', usuarioController.obtenerUsuario)
router.post('/crear-usuario', usuarioController.crearUsuario)
router.put('/actualizar-usuario/:id', usuarioController.actualizarUsuario)
router.delete('/eliminar-usuario/:id', usuarioController.eliminarUsuario)
router.get('/usuarios/:id', usuarioController.obtenerUsuarioEspecifico)
router.get('/crea-contacto', contactoController.crearContacto)


module.exports = router