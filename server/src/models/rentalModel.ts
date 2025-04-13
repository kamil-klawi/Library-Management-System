import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { User } from './userModel';
import { Book } from './bookModel';

export interface IRental {
    id: number;
    rentedAt: Date;
    dueDate: Date;
    returnedAt?: Date;
    extended: boolean;
    userId: number;
    bookId: number;
}

export interface RentalCreationAttributes extends Optional<IRental, 'id'> {}

export class Rental extends Model<IRental, RentalCreationAttributes> implements IRental {
    id!: number;
    rentedAt!: Date;
    dueDate!: Date;
    returnedAt?: Date;
    extended!: boolean;
    userId!: number;
    bookId!: number;
}

Rental.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        rentedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        returnedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        extended: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Book,
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Book,
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
    {
        sequelize,
        modelName: 'Rental',
        tableName: 'rentals',
    },
);

Rental.belongsTo(User, { foreignKey: 'userId' });
Rental.belongsTo(Book, { foreignKey: 'bookId' });
