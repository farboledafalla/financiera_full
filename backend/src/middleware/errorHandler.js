import logger from '../config/logger.js';

export default function errorHandler(err, req, res, next) {
  logger.error(err);

  if (err.status) {
    return res.status(err.status).json({
      error: err.message
    });
  }

  res.status(500).json({
    error: 'Error interno del servidor'
  });
} 