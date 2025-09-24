import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatus';
import userService from '../services/userService';

const register = async (req: Request, res: Response) => {
  const serviceResponse = await userService.register(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const login = async (req: Request, res: Response) => {
  const serviceResponse = await userService.login(req.body);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const profile = async (_req: Request, res: Response) => {
  const serviceResponse = await userService.profile(res.locals.user);
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  register,
  login,
  profile
};