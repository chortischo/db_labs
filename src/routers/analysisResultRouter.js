import express from 'express';
import {
    createAnalysisResult,
    getAnalysisResults,
    getAnalysisResult,
    updateAnalysisResult,
    deleteAnalysisResult,
} from '../controllers/analysisResultController.js';

const analysisResultRouter = new express.Router();

analysisResultRouter.post('/analysisResult', createAnalysisResult);
analysisResultRouter.get('/analysisResult', getAnalysisResults);
analysisResultRouter.get('/analysisResult/:id', getAnalysisResult);
analysisResultRouter.patch('/analysisResult/:id', updateAnalysisResult);
analysisResultRouter.delete('/analysisResult/:id', deleteAnalysisResult);

export default analysisResultRouter;