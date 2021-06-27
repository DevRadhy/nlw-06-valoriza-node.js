import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';
import { AppError } from './error/AppError';
import cors from 'cors';
import 'express-async-errors';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      error: error.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error.'
  });
});

export { app };