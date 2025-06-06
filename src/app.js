import express from 'express';
import userRouter from './routers/userRouter.js';
import mediaContentRouter from './routers/mediaContentRouter.js';
import errorHandler from './middleware/errorHandler.js';
import analysisResultRouter from "./routers/analysisResultRouter.js";

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', mediaContentRouter);
app.use('/api', analysisResultRouter);

app.use(errorHandler);

export default app;