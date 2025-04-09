import { config } from './env';

const corsOptions = {
    origin: config.cors.origin,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions;