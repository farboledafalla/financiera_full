export class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export const unauthorized = (message = 'No autorizado') => {
  return new AppError(message, 401);
};

export const forbidden = (message = 'Acceso denegado') => {
  return new AppError(message, 403);
};

export const notFound = (message = 'Recurso no encontrado') => {
  return new AppError(message, 404);
}; 