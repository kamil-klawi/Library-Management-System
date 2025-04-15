import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface IBook {
    id: number;
    title: string;
    author: string;
    translator?: string;
    publishingHouse: string;
    languageReleased: string;
    genre: string;
    numberOfPages: number;
    type: string;
    cover?: string;
    height?: number;
    width?: number;
    depth?: number;
}

export interface BookCreationAttributes extends Optional<IBook, 'id'> {}

export class Book extends Model<IBook, BookCreationAttributes> implements IBook {
    public id!: number;
    public title!: string;
    public author!: string;
    public translator!: string;
    public publishingHouse!: string;
    public languageReleased!: string;
    public genre!: string;
    public numberOfPages!: number;
    public type!: string;
    public cover!: string;
    public height!: number;
    public width!: number;
    public depth!: number;
}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        translator: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        publishingHouse: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        languageReleased: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numberOfPages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        depth: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Book',
        tableName: 'books',
    },
);
