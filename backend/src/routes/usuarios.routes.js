import { Router } from 'express';
import * as usuariosController from '../controllers/usuarios.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

// Rutas para usuarios
router.get(
   '/',
   authenticate,
   authorize(['admin']),
   usuariosController.getUsuarios
);
router.get(
   '/:id',
   authenticate,
   authorize(['admin']),
   usuariosController.getUsuarioById
);
router.post('/', usuariosController.createUsuario);
router.put(
   '/:id',
   authenticate,
   authorize(['admin']),
   usuariosController.updateUsuario
);
router.delete(
   '/:id',
   authenticate,
   authorize(['admin']),
   usuariosController.deleteUsuario
);

export default router;
