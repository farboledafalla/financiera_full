import { Router } from 'express';
import * as datosAlternativosController from '../controllers/datosAlternativos.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

// Rutas para datos alternativos
router.get('/', authenticate, authorize(['admin']), datosAlternativosController.getDatosAlternativos);
router.get('/:id', authenticate, authorize(['admin']), datosAlternativosController.getDatoAlternativoById);
router.post('/', authenticate, authorize(['admin']), datosAlternativosController.createDatoAlternativo);
router.put('/:id', authenticate, authorize(['admin']), datosAlternativosController.updateDatoAlternativo);
router.delete('/:id', authenticate, authorize(['admin']), datosAlternativosController.deleteDatoAlternativo);

export default router; 