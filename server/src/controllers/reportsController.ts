import { Request, Response } from 'express';
import * as reportService from '../services/reportsService';

export const getAllRentals = async (req: Request, res: Response): Promise<void> => {
    try {
        const reports = await reportService.getAllRentals();
        res.status(200).json({ reports });
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}

export const getOverdueRentals = async (req: Request, res: Response): Promise<void> => {
    try {
        const reports = await reportService.getOverdueRentals();
        res.status(200).json({ reports });
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}

export const getExtendedRentals = async (req: Request, res: Response): Promise<void> => {
    try {
        const reports = await reportService.getExtendedRentals();
        res.status(200).json({ reports });
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}