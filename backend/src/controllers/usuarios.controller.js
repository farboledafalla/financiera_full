import * as usuarioService from '../services/usuario.service.js';

export const getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await usuarioService.findAll();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const getUsuarioById = async (req, res, next) => {
  try {
    const usuario = await usuarioService.findById(req.params.id);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const createUsuario = async (req, res, next) => {
  try {
    const newUsuario = await usuarioService.create(req.body);
    res.status(201).json(newUsuario);
  } catch (error) {
    next(error);
  }
};

export const updateUsuario = async (req, res, next) => {
  try {
    const updatedUsuario = await usuarioService.update(req.params.id, req.body);
    res.json(updatedUsuario);
  } catch (error) {
    next(error);
  }
};

export const deleteUsuario = async (req, res, next) => {
  try {
    await usuarioService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}; 