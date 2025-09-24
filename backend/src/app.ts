import userController from './controllers/userController';
import express from 'express';
import cors from 'cors';
import { authMiddleware } from './middleware/auth';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/register', userController.register);
app.post('/api/login',  userController.login);
app.get('/api/profile', authMiddleware, userController.profile);

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`API running at -> http://localhost:${PORT}`));
  } catch (error) {
    console.error('Error starting API:', error);
  }
};

start();
