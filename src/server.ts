import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '@Infrastructure/Routes';
import AppError from '@Domain/Middlewares/Errors/AppError';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
      innerException: error.message,
    });
  },
);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
