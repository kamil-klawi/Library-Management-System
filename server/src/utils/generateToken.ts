import jwt from 'jsonwebtoken';
import { config } from '../config/env';
import { IUser } from '../models/userModel';

export const generateToken = (user: IUser): string => {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
    }

    return jwt.sign(payload, config.jwt.secret as string, { expiresIn: '1h' });
}
