import { Router } from 'express';
import * as entidadesController from '../controllers/entidades.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

// Rutas para entidades
router.get('/', authenticate, authorize(['admin']), entidadesController.getEntidades);
router.get('/:id', authenticate, authorize(['admin']), entidadesController.getEntidadById);
router.post('/', authenticate, authorize(['admin']), entidadesController.createEntidad);
router.put('/:id', authenticate, authorize(['admin']), entidadesController.updateEntidad);
router.delete('/:id', authenticate, authorize(['admin']), entidadesController.deleteEntidad);

export default router; 