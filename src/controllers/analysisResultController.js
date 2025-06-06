import handleAsync from '../utils/handleAsync.js';
import {
    deleteAnalysisResultById,
    getAllAnalysisResults,
    getAnalysisResultById,
    insertAnalysisResult,
    updateAnalysisResultById,
} from '../models/analysisResultModel.js';
import {validateRequiredContentFields} from '../utils/validator.js';
import AppError from '../utils/appError.js';

export const createAnalysisResult = handleAsync(async (req, res) => {
    const analysisResultData = req.body;

    validateRequiredContentFields(analysisResultData);

    await insertAnalysisResult(analysisResultData);

    res.status(200).json({status: 'success', message: analysisResultData});
});

export const getAnalysisResults = handleAsync(async (req, res) => {
    const analysisResults = await getAllAnalysisResults();
    res.status(200).json({status: 'success', message: analysisResults});
});

export const getAnalysisResult = handleAsync(async (req, res) => {
    const {id} = req.params;
    const analysisResult = await getAnalysisResultById(id);

    if (!analysisResult) {
        throw new AppError('AnalysisResultNotFoundException', 404);
    }

    res.status(200).json({status: 'success', message: analysisResult});
});

export const updateAnalysisResult = handleAsync(async (req, res) => {
    const {id} = req.params;
    const userData = req.body;

    const analysisResult = await getAnalysisResultById(id);

    if (!analysisResult) {
        throw new AppError('AnalysisResultNotFoundException', 404);
    }

    const updatedAnalysisResult = await updateAnalysisResultById(id, userData);
    res.status(200).json({status: 'success', message: updatedAnalysisResult});
});

export const deleteAnalysisResult = handleAsync(async (req, res) => {
    const {id} = req.params;

    const deletedAnalysisResult = await deleteAnalysisResultById(id);

    if (!deletedAnalysisResult) {
        throw new AppError('AnalysisResultNotFoundException', 404);
    }

    res
        .status(200)
        .json({status: 'success', message: 'Analysis Result Deleted Successfully'});
});