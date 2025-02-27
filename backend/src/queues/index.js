import Queue from 'bull';
import logger from '../config/logger.js';

export const scoreQueue = new Queue('credit-scoring', process.env.REDIS_URL);
export const reportQueue = new Queue('report-generation', process.env.REDIS_URL);

scoreQueue.process(async (job) => {
  logger.info(`Procesando scoring para solicitud ${job.data.solicitudId}`);
  // Lógica de scoring
});

reportQueue.process(async (job) => {
  logger.info(`Generando reporte para ${job.data.tipo}`);
  // Lógica de generación de reportes
});

// Manejo de errores en las colas
[scoreQueue, reportQueue].forEach(queue => {
  queue.on('error', error => {
    logger.error('Queue error', error);
  });
}); 