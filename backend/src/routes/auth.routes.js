import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { authenticate } from '../middleware/auth.js';
import * as authController from '../controllers/auth.controller.js';
import { loginSchema, registerSchema } from '../validations/auth.validation.js';

const router = Router();

router.post('/login', validate(loginSchema), authController.login);
router.post('/register', validate(registerSchema), authController.register);
router.get('/me', authenticate, authController.getCurrentUser);

export default router;
