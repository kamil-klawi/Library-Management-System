import { IRental, Rental } from '../models/rentalModel';
import { literal, Op } from 'sequelize';

export const rentBook = async (userId: number, bookId: number): Promise<IRental> => {
    const activeRental: Rental | null = await Rental.findOne({
        where: {
            bookId,
            returnedAt: { [Op.is]: literal('NULL') },
        }
    });

    if (activeRental) {
        throw new Error('Book is already rented.');
    }

    const rentedAt = new Date();
    const dueDate = new Date();
    dueDate.setDate(rentedAt.getDate() + 14);

    return await Rental.create({
        userId,
        bookId,
        rentedAt,
        dueDate,
        extended: false,
    });
};

export const returnBook = async (rentalId: number): Promise<IRental> => {
    const rental: Rental | null = await Rental.findByPk(rentalId);

    if (!rental) {
        throw new Error('Rental does not exist.');
    }

    if (rental.returnedAt) {
        throw new Error('The book has already been returned.');
    }

    rental.returnedAt = new Date();
    await rental.save();
    return rental;
}

export const extendRental = async (rentalId: number): Promise<IRental> => {
    const rental: Rental | null = await Rental.findByPk(rentalId);

    if (!rental) {
        throw new Error('Rental does not exist.');
    }

    if (rental.returnedAt) {
        throw new Error('Cannot extend – the book has already been returned.');
    }

    if (rental.extended) {
        throw new Error('This rental has already been extended.');
    }

    const newDueDate = new Date(rental.dueDate);
    newDueDate.setDate(newDueDate.getDate() + 14);
    rental.dueDate = newDueDate;
    rental.extended = true;
    await rental.save();
    return rental;
}