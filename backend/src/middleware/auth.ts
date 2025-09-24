import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided!' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Invalid token format!' });
  }

  const [scheme, token] = parts as [string, string];

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: 'Invalid token format!' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'superSecret123';
    const decoded = jwt.verify(token, secret) as JwtPayload;

    res.locals.user = decoded;;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid token token!' });
  }
};
