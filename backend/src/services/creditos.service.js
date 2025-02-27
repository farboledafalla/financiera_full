import { pool } from '../config/database.js';

export const findAll = async () => {
   const result = await pool.query('SELECT * FROM creditos');
   return result.rows;
};

export const findById = async (id) => {
   const result = await pool.query('SELECT * FROM creditos WHERE id = $1', [
      id,
   ]);
   return result.rows[0];
};

export const create = async (data) => {
   const result = await pool.query(
      'INSERT INTO creditos (campo1, campo2) VALUES ($1, $2) RETURNING *',
      [data.campo1, data.campo2]
   );
   return result.rows[0];
};

export const update = async (id, data) => {
   const result = await pool.query(
      'UPDATE creditos SET campo1 = $1, campo2 = $2 WHERE id = $3 RETURNING *',
      [data.campo1, data.campo2, id]
   );
   return result.rows[0];
};

export const deleteCredit = async (id) => {
   await pool.query('DELETE FROM creditos WHERE id = $1', [id]);
};
