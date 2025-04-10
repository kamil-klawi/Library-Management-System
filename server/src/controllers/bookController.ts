import { Request, Response } from 'express';
import * as bookService from '../services/bookService';
import { IBook } from '../models/bookModel';

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json({ books });
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}

export const getBookById = async (req: Request, res: Response) => {
    try {
        const UUID: number = Number(req.params.id);
        const book: IBook | null = await bookService.getBookById(UUID);
        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}

export const addBook = async (req: Request, res: Response) => {
    try {
        const book: IBook | null = await bookService.addBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}

export const updateBook = async (req: Request, res: Response) => {
    try {
        const UUID: number = Number(req.params.id);
        const update = await bookService.updateBook(UUID, req.body);
        res.status(200).json(update);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const UUID: number = Number(req.params.id);
        const book = await bookService.deleteBook(UUID);
        res.status(204).json(book);
    } catch (err) {
        res.status(400).json({ message: err instanceof Error ? err.message : 'Unexpected error' });
    }
}