import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatus';
import userService from '../services/userService';

async function register(req: Request, res: Response) {
  const serviceResponse = await userService.register(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

async function login(req: Request, res: Response) {
  const serviceResponse = await userService.login(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

async function profile(_req: Request, res: Response) {
  const serviceResponse = await userService.profile(res.locals.user);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  register,
  login,
  profile
};