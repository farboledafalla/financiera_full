import { pool } from '../config/database.js';
import bcrypt from 'bcryptjs';

export const findUserByEmail = async (email) => {
   const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [
      email,
   ]);
   return result.rows[0];
};

export const createUser = async (userData) => {
   const { email, password, nombre, apellido } = userData;
   const hashedPassword = await bcrypt.hash(password, 10);

   const result = await pool.query(
      `INSERT INTO usuarios (email, password_hash, nombre, apellido, rol_id)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [email, hashedPassword, nombre, apellido, 2] // rol_id 2 para usuarios normales
   );

   return result.rows[0];
};

export const findUserById = async (id) => {
   const result = await pool.query(
      'SELECT id, email, nombre, apellido, rol_id FROM usuarios WHERE id = $1',
      [id]
   );
   return result.rows[0];
};

// Servicio para crear un nuevo usuario
// Es invocado desde auth.controller.js
export const create = async (data) => {
   // Lógica para crear un nuevo usuario
   const { email, password, nombre, apellido } = data;
   const hashedPassword = await bcrypt.hash(password, 10);

   const result = await pool.query(
      `INSERT INTO usuarios (email, password_hash, nombre, apellido, rol_id)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [email, hashedPassword, nombre, apellido, 2] // rol_id 2 para usuarios normales
   );

   return result.rows[0];
};
