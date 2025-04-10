import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import corsOptions from "./config/cors";
import sequelize from './config/database';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/v1/books', bookRoutes);

sequelize.authenticate().then(() => {
    console.log("Sequelize successfully authenticated!");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});