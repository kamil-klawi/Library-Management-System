import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IUser, UserRole } from '../models/userModel';
import { config } from '../config/env';

interface RequestWithUser extends Request {
    user?: IUser;
}

export const authenticate = (allowedRoles: UserRole[]) => {
    return (req: RequestWithUser, res: Response, next: NextFunction) => {
        const token: string | undefined = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            res.status(401).json({ message: 'Access denied: token is missing!' });
            return;
        }

        try {
            req.user = jwt.verify(token, config.jwt.secret as string) as IUser;
            if (!allowedRoles.includes(req.user?.role as UserRole)) {
                res.status(403).json({ message: 'Access forbidden: insufficient role!' });
                return;
            }

            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid or expired token!', err });
        }
    }
}