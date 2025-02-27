import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.js';
import * as authService from '../services/auth.service.js';
import { unauthorized } from '../utils/errors.js';

export const login = async (req, res, next) => {
   try {
      const { email, password } = req.body;
      const user = await authService.findUserByEmail(email);

      if (!user || !(await bcrypt.compare(password, user.password_hash))) {
         throw unauthorized('Credenciales inválidas');
      }

      const token = generateToken(user);
      res.json({
         token,
         user: { id: user.id, email: user.email, role: user.role },
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
