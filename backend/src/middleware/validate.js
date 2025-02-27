import Joi from 'joi';

export const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }
    next();
  };
};

// Esquemas de validación
export const creditoSchema = Joi.object({
  monto: Joi.number().required().min(100000),
  plazo: Joi.number().required().min(1),
  proposito: Joi.string().required(),
  tipo_credito: Joi.string().required()
}); 