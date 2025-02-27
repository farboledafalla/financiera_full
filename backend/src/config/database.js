import dotenv from 'dotenv';
dotenv.config(); // Cargar las variables de entorno

import pg from 'pg';
import logger from './logger.js';

const { Pool } = pg;

export const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err) => {
   logger.error('Error inesperado del pool de postgres', err);
});

export const connectDB = async () => {
   try {
      await pool.query('SELECT NOW()');
      logger.info('Base de datos conectada');
   } catch (error) {
      logger.error('Error conectando a la base de datos:::', error);
      process.exit(1);
   }
};

connectDB();
