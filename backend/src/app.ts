import userController from './controllers/userController';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/register', userController.register);
app.post('/api/login',  (_req, res) => { res.json('login!');});
app.get('/api/profile',  (_req, res) => { res.json('profile!');});

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`API running at -> http://localhost:${PORT}`));
  } catch (error) {
    console.error('Error starting API:', error);
  }
};

start();
