import { Rental } from './rentalModel';
import { Book } from './bookModel';
import { User } from './userModel';

export const setupAssociations = () => {
    Book.hasMany(Rental, { foreignKey: 'bookId' });
    Rental.belongsTo(Book, { foreignKey: 'bookId' });

    User.hasMany(Rental, { foreignKey: 'userId' });
    Rental.belongsTo(User, { foreignKey: 'userId' });
};
