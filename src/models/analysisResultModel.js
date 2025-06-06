import db from '../config/db.js';
import AppError from '../utils/appError.js';

export const insertAnalysisResult = async (contentData) => {
    const query = `
    INSERT INTO AnalysisResult (title, description, body, created_at, analysisResult_id, profile_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
    const values = [
        contentData.title,
        contentData.description,
        contentData.body,
        contentData.created_at,
        contentData.analysisResult_id,
        contentData.profile_id,
    ];
    const result = await db.query(query, values);
    return result.rows[0];
};

export const getAllAnalysisResults = async () => {
    const query = `SELECT * FROM AnalysisResult`;
    const result = await db.query(query);
    return result.rows;
};

export const getAnalysisResultById = async (id) => {
    const query = `SELECT * FROM AnalysisResult WHERE id = $1`;
    const result = await db.query(query, [id]);
    return result.rows[0] || null;
};

export const updateAnalysisResultById = async (id, contentData) => {
    const fields = Object.keys(contentData);
    const values = Object.values(contentData);

    if (!fields.length) {
        throw new AppError('NoFieldsToUpdateException', 400);
    }

    const setClause = fields
        .map((field, index) => `${field} = $${index + 1}`)
        .join(', ');
    const query = `
      UPDATE AnalysisResult
      SET ${setClause}
      WHERE id = $${fields.length + 1}
    RETURNING *;
  `;

    const result = await db.query(query, [...values, id]);
    return result.rows[0];
};

export const deleteAnalysisResultById = async (id) => {
    const query = `DELETE FROM AnalysisResult WHERE id = $1 RETURNING *`;
    const result = await db.query(query, [id]);
    return result.rows[0] || null;
};