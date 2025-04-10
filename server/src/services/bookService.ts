import { Book, BookCreationAttributes, IBook } from '../models/bookModel';

export const getAllBooks = async (): Promise<IBook[]> => {
    return await Book.findAll();
}

export const getBookById = async (id: number): Promise<IBook | null> => {
    return await Book.findByPk(id);
}

export const addBook = async (book: Omit<BookCreationAttributes, 'id'>): Promise<IBook> => {
    return await Book.create(book);
}

export const updateBook = async (id: number, book: IBook): Promise<IBook | null> => {
    const bookExist = await Book.findByPk(id);
    if (!bookExist) {
        throw new Error('Book does not exist');
    }

    return await bookExist.update(book);
}

export const deleteBook = async (id: number): Promise<void> => {
    await Book.destroy({ where: { id: id } });
}