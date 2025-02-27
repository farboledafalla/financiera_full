import { Router } from 'express';
import * as creditosController from '../controllers/creditos.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

// Rutas para créditos
router.get('/', authenticate, authorize(['admin']), creditosController.getCreditos);
router.get('/:id', authenticate, authorize(['admin']), creditosController.getCreditoById);
router.post('/', authenticate, authorize(['admin']), creditosController.createCredito);
router.put('/:id', authenticate, authorize(['admin']), creditosController.updateCredito);
router.delete('/:id', authenticate, authorize(['admin']), creditosController.deleteCredito);

export default router; 