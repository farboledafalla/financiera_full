import logger from '../config/logger.js';

export default function errorHandler(err, req, res, next) {
   logger.error(err);

   if (err.status) {
      return res.status(err.status).json({
         error: err.message,
      });
   }

   // Manejo de errores genéricos, details es el mensaje de error
   res.status(500).json({
      error: 'Error interno del servidor',
      details: err.message,
   });
}
