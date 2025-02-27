import { Router } from 'express';
import * as usuariosController from '../controllers/usuarios.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

// Ruta para obtener todos los usuarios
router.get(
   '/',
   authenticate,
   authorize(['admin']),
   usuariosController.getUsuarios
);

// Ruta para obtener un usuario por ID
router.get(
   '/:id',
   authenticate,
   authorize(['admin']),
   usuariosController.getUsuarioById
);

// Ruta para crear un usuario
router.post('/', usuariosController.createUsuario);

// Ruta para actualizar un usuario por ID
router.put(
   '/:id',
   authenticate,
   authorize(['admin']),
   usuariosController.updateUsuario
);

// Ruta para eliminar un usuario por ID
router.delete(
   '/:id',
   authenticate,
   authorize(['admin']),
   usuariosController.deleteUsuario
);

export default router;
