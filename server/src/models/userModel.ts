import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { Rental } from './rentalModel';

export enum UserRole {
    USER = "User",
    ADMIN = "Admin",
}

export enum UserStatus {
    ACTIVE = "Active",
    SUSPENDED = "Suspended",
    PENDING = "Pending",
    DEACTIVATED = "Deactivated",
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    email: string;
    birthDate?: Date;
    membershipDate: Date;
    role: UserRole;
    status: UserStatus;
}

interface UserCreationAttributes extends Optional<IUser, 'id'> {}

export class User extends Model<IUser, UserCreationAttributes> implements IUser {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public phoneNumber!: string;
    public password!: string;
    public email!: string;
    public birthDate?: Date;
    public membershipDate!: Date;
    public role!: UserRole;
    public status!: UserStatus;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        membershipDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(...Object.values(UserRole)),
            allowNull: false,
            defaultValue: UserRole.USER,
        },
        status: {
            type: DataTypes.ENUM(...Object.values(UserStatus)),
            allowNull: false,
            defaultValue: UserStatus.PENDING,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
    },
);

User.hasMany(Rental, { foreignKey: 'userId' });
