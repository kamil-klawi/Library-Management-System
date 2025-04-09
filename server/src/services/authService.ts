import bcrypt from 'bcryptjs';
import { IUser, User, UserRole, UserStatus } from '../models/userModel';
import { generateToken } from '../utils/generateToken';

type TCredentials = Pick<IUser, 'email' | 'password'>;
type TUser = Omit<IUser, 'id' | 'membershipDate' | 'role' | 'status'>;

export const registerUser = async (data: TUser): Promise<{ token: string }> => {
    const { firstName, lastName, phoneNumber, password, email, birthDate } = data;

    const existingUser: User | null = await User.findOne({ where: [{ email }, { phoneNumber }] });
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword: string = bcrypt.hashSync(password, 8);
    const newUser: User = await User.create({
        firstName,
        lastName,
        phoneNumber,
        password: hashedPassword,
        email,
        birthDate,
        membershipDate: new Date(),
        role: UserRole.USER,
        status: UserStatus.PENDING,
    });

    const token:string = generateToken(newUser);
    return { token };
};

export const loginUser = async (data: TCredentials): Promise<{ token: string }> => {
    const { email, password } = data;

    const user: User | null = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isPasswordValid: boolean = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials')
    }

    const token: string = generateToken(user);
    return { token };
};