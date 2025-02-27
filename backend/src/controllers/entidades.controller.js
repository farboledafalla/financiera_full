import * as entidadesService from '../services/entidades.service.js';

export const getEntidades = async (req, res, next) => {
   try {
      const entidades = await entidadesService.findAll();
      res.json(entidades);
   } catch (error) {
      next(error);
   }
};

export const getEntidadById = async (req, res, next) => {
   try {
      const entidad = await entidadesService.findById(req.params.id);
      res.json(entidad);
   } catch (error) {
      next(error);
   }
};

export const createEntidad = async (req, res, next) => {
   try {
      const newEntidad = await entidadesService.create(req.body);
      res.status(201).json(newEntidad);
   } catch (error) {
      next(error);
   }
};

export const updateEntidad = async (req, res, next) => {
   try {
      const updatedEntidad = await entidadesService.update(
         req.params.id,
         req.body
      );
      res.json(updatedEntidad);
   } catch (error) {
      next(error);
   }
};

export const deleteEntidad = async (req, res, next) => {
   try {
      await entidadesService.delete(req.params.id);
      res.status(204).send();
   } catch (error) {
      next(error);
   }
};
