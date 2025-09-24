import User from '../database/models/UserSequelizeModel';
import { IUser } from '../interfaces/IUser';

async function register(userData: Omit<IUser, 'id'>): Promise<User> {
  const user = await User.create(userData);
  return user;
}

async function findByEmail(email: string): Promise<User | null> {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return null;
  };

  return user;
}

export default {
  register,
  findByEmail
};
