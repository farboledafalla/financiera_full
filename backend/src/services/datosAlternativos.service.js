import { pool } from '../config/database.js';

export const findAll = async () => {
   const result = await pool.query('SELECT * FROM datos_alternativos');
   return result.rows;
};

export const findById = async (id) => {
   const result = await pool.query(
      'SELECT * FROM datos_alternativos WHERE id = $1',
      [id]
   );
   return result.rows[0];
};

export const create = async (data) => {
   const result = await pool.query(
      'INSERT INTO datos_alternativos (campo1, campo2) VALUES ($1, $2) RETURNING *',
      [data.campo1, data.campo2]
   );
   return result.rows[0];
};

export const update = async (id, data) => {
   const result = await pool.query(
      'UPDATE datos_alternativos SET campo1 = $1, campo2 = $2 WHERE id = $3 RETURNING *',
      [data.campo1, data.campo2, id]
   );
   return result.rows[0];
};

export const deleteAlternativeData = async (id) => {
   await pool.query('DELETE FROM datos_alternativos WHERE id = $1', [id]);
};
