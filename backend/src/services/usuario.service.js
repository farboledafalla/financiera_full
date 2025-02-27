import { pool } from '../config/database.js';

export const findAll = async () => {
   const result = await pool.query('SELECT * FROM usuarios');
   return result.rows;
};

export const findById = async (id) => {
   const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [
      id,
   ]);
   return result.rows[0];
};

export const create = async (data) => {
   const result = await pool.query(
      'INSERT INTO usuarios (email, password_hash, nombre, apellido, rol_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [data.email, data.password, data.nombre, data.apellido, 2]
   );
   return result.rows[0];
};

export const update = async (id, data) => {
   const result = await pool.query(
      'UPDATE usuarios SET email = $1, nombre = $2, apellido = $3, rol_id = $4 WHERE id = $5 RETURNING *',
      [data.email, data.nombre, data.apellido, data.rol_id, id]
   );
   return result.rows[0];
};

export const deleteUser = async (id) => {
   await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
};
