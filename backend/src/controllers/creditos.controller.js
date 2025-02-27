import * as creditosService from '../services/creditos.service.js';

export const getCreditos = async (req, res, next) => {
  try {
    const creditos = await creditosService.findAll();
    res.json(creditos);
  } catch (error) {
    next(error);
  }
};

export const getCreditoById = async (req, res, next) => {
  try {
    const credito = await creditosService.findById(req.params.id);
    res.json(credito);
  } catch (error) {
    next(error);
  }
};

export const createCredito = async (req, res, next) => {
  try {
    const newCredito = await creditosService.create(req.body);
    res.status(201).json(newCredito);
  } catch (error) {
    next(error);
  }
};

export const updateCredito = async (req, res, next) => {
  try {
    const updatedCredito = await creditosService.update(req.params.id, req.body);
    res.json(updatedCredito);
  } catch (error) {
    next(error);
  }
};

export const deleteCredito = async (req, res, next) => {
  try {
    await creditosService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}; 