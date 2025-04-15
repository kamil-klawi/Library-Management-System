import { Op } from 'sequelize';
import { Rental } from '../models/rentalModel';
import { User } from '../models/userModel';
import { Book } from '../models/bookModel';

export const getAllRentals = async (): Promise<Rental[]> => {
    return Rental.findAll({
        include: [User, Book],
    });
}

export const getOverdueRentals = async (): Promise<Rental[]> => {
    return Rental.findAll({
        where: {
            dueDate: { [Op.lt]: new Date() },
            returnedAt: undefined
        },
        include: [User, Book],
    });
}

export const getExtendedRentals = async (): Promise<Rental[]> => {
    return Rental.findAll({
        where: { extended: true },
        include: [User, Book],
    });
}