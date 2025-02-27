import * as datosAlternativosService from '../services/datosAlternativos.service.js';

export const getDatosAlternativos = async (req, res, next) => {
   try {
      const datos = await datosAlternativosService.findAll();
      res.json(datos);
   } catch (error) {
      next(error);
   }
};

export const getDatoAlternativoById = async (req, res, next) => {
   try {
      const dato = await datosAlternativosService.findById(req.params.id);
      res.json(dato);
   } catch (error) {
      next(error);
   }
};

// Implementa las funciones createDatoAlternativo, updateDatoAlternativo y deleteDatoAlternativo de manera similar

export const createDatoAlternativo = async (req, res, next) => {
   try {
      const newDato = await datosAlternativosService.create(req.body);
      res.status(201).json(newDato);
   } catch (error) {
      next(error);
   }
};

export const updateDatoAlternativo = async (req, res, next) => {
   try {
      const updatedDato = await datosAlternativosService.update(
         req.params.id,
         req.body
      );
      res.json(updatedDato);
   } catch (error) {
      next(error);
   }
};

export const deleteDatoAlternativo = async (req, res, next) => {
   try {
      await datosAlternativosService.delete(req.params.id);
      res.status(204).send();
   } catch (error) {
      next(error);
   }
};
