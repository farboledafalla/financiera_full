import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';
import * as authService from '../services/auth.service.js';
import { unauthorized } from '../utils/errors.js';

export const login = async (req, res, next) => {
   try {
      const { email, password } = req.body;
      const user = await authService.findUserByEmail(email);

      // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
      // Si no coincide, lanza un error y eso es lo que está pasando
      if (!user || !(await bcrypt.compare(password, user.password_hash))) {
         throw unauthorized('Credenciales inválidas');
      }
      const compare = await bcrypt.compare(password, user.password_hash);

      // Genera un token para el usuario entregando el objeto user
      const token = generateToken(user);
      res.json({
         token,
         user: { id: user.id, email: user.email, role: user.rol_id },
      });
   } catch (error) {
      next(error);
   }
};

export const register = async (req, res, next) => {
   try {
      const user = await authService.create(req.body);
      res.status(201).json(user);
   } catch (error) {
      next(error);
   }
};

export const getCurrentUser = async (req, res, next) => {
   try {
      const user = await authService.findUserById(req.user.id);
      res.json(user);
   } catch (error) {
      next(error);
   }
};
