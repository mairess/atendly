import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must have at least 3 characters!')
    .max(50, 'Name must have at most 50 characters!'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format!'),
  password: z
    .string()
    .min(6, 'Password must have at least 6 characters!')
    .max(32, 'Password must have at most 32 characters!'),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required!')
    .email('Invalid email format!'),
  password: z
    .string()
    .min(1, 'Password is required!'),
});

export type LoginInput = z.infer<typeof loginSchema>;
