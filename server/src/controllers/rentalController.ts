import { Request, Response } from 'express';
import * as rentalService from '../services/rentalService';

export const rentBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, bookId } = req.body;
        const rental = await rentalService.rentBook(userId, bookId);
        res.status(201).json(rental);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
};

export const returnBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const { rentalId } = req.params;
        const rental = await rentalService.returnBook(Number(rentalId));
        res.status(200).json(rental);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}

export const extendBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const { rentalId } = req.params;
        const rental = await rentalService.extendRental(Number(rentalId));
        res.status(200).json(rental);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}