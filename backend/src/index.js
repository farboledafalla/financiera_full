// Configuración de variables de entorno
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { Server } from 'socket.io';
import { createServer } from 'http';
import routes from './routes/index.js'; // Rutas
import logger from './config/logger.js';
import app from './app.js'; // Importa la aplicación configurada
//import './config/redis.js';

const httpServer = createServer(app);
const io = new Server(httpServer, {
   cors: {
      origin: process.env.FRONTEND_URL,
   },
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

// Rutas, se agrega el prefijo /api
app.use('/api', routes);

// WebSocket
io.on('connection', (socket) => {
   logger.info('Cliente conectado');
   socket.on('disconnect', () => {
      logger.info('Cliente desconectado');
   });
});

const PORT = process.env.PORT || 3005;
const server = httpServer;

server.listen(PORT, () => {
   logger.info(`Servidor corriendo en puerto ${PORT}`);
});
