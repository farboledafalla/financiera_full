import jwt from 'jsonwebtoken';
import { unauthorized, forbidden } from '../utils/errors.js';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw unauthorized('Token no proporcionado');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(unauthorized('Token inválido'));
  }
};

export const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(forbidden('No tiene permisos para esta acción'));
    }
    next();
  };
}; 