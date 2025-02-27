import { Router } from 'express';
import authRoutes from './auth.routes.js';
import usuariosRoutes from './usuarios.routes.js';
import creditosRoutes from './creditos.routes.js';
import entidadesRoutes from './entidades.routes.js';
import datosAlternativosRoutes from './datosAlternativos.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/usuarios', usuariosRoutes);
router.use('/creditos', creditosRoutes);
router.use('/entidades', entidadesRoutes);
router.use('/datos-alternativos', datosAlternativosRoutes);

export default router; 