import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { Server } from 'socket.io';
import { createServer } from 'http';
import routes from './routes/index.js';
import logger from './config/logger.js';
//import './config/redis.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const httpServer = createServer(app);

// Configuración de CORS más específica
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Configuración de Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

app.use(express.json());

// Rutas principales
app.use('/api', routes);

// Manejador de errores
app.use(errorHandler);

export default app; 