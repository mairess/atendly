import { IUser } from '../interfaces/IUser';
import { ServiceMessage, ServiceResponse } from '../utils/ServiceResponse';
import userModel from '../models/userModel';
import bcrypt from 'bcrypt';


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

export default {
  register
};
