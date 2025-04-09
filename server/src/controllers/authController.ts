import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authService';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { firstName, lastName, phoneNumber, password, email, birthDate } = req.body;
        const { token } = await registerUser({ firstName, lastName, phoneNumber, password, email, birthDate });
        res.status(201).json({ token });
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const { token } = await loginUser({email, password});
        res.status(200).json({token});
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
};