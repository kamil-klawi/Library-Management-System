import { Sequelize } from 'sequelize';
import { config } from './env';

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    logging: true,
});

export default sequelize;