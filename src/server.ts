import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  return response.sendStatus(200);
});

app.use((error: Error, request: Request, response: Response) => {
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    innerException: error.message,
  });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
