import { IUser, IUserNoPassword } from '../interfaces/IUser';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';
import userModel from '../models/userModel';
import bcrypt from 'bcrypt';
import { ILogin } from '../interfaces/ILogin';
import { IToken } from '../interfaces/IToken';
import jwt from '../utils/jwt';
import { IMe } from '../interfaces/IMe';


async function register(userData: Omit<IUser, 'id'>): Promise<ServiceResponse<ServiceMessage | IUser>> {
  const { name, email, password } = userData;

  if (!name || !email || !password) {
    return { status: 'BAD_REQUEST', data: { message: 'All fields are required!' } };
  }

  try {
    const userExists = await userModel.findByEmail(email);

    if (userExists) {
      return { status: 'BAD_REQUEST', data: { message: 'Email already in use!' } };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.register({ name, email, password: hashedPassword });

    return { status: 'CREATED', data: { name: user.name, email: user.email } };

  } catch (error) {
    console.error(error);
    return { status: 'CREATED', data: { message: 'Error creating user!' } };
    
  } 
}

async function login(loginData: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
  const user = await userModel.findByEmail(loginData.email);

  if (!user || !bcrypt.compareSync(loginData.password, user.password!)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password!' } };
  }

  const token = jwt.sign({ email: user.email });
  return { status: 'SUCCESSFUL', data: { token } };
};

async function profile(userMail: IMe): Promise<ServiceResponse<ServiceMessage | IUserNoPassword>> {
  try {
    if (!userMail || !userMail.email) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid token format!' } };
    }

    const foundUser = await userModel.findByEmail(userMail.email);

    if (!foundUser) {
      return { status: 'NOT_FOUND', data: { message: 'User not found!' } };
    }

    return { 
      status: 'SUCCESSFUL', 
      data: { id: foundUser.id, name: foundUser.name, email: foundUser.email }
    };
  } catch (error) {
    console.error(error);
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid or expired token!' } };
  }
}

export default {
  register,
  login,
  profile
};
